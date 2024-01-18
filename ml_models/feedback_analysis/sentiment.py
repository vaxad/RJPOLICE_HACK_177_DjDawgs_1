import google.generativeai as genai
import gradio as gr
from deep_translator import (GoogleTranslator)
from transformers import pipeline
from langdetect import detect


api_key = "AIzaSyCmmus8HFPLXskU170_FR4j2CQeWZBKGMY"

spam_detector = pipeline("text-classification", model="madhurjindal/autonlp-Gibberish-Detector-492513457")

model = genai.GenerativeModel('gemini-pro')
genai.configure(api_key = api_key)

def sentiment(feedback):
    try:
        #response = model.generate_content(f"State whether given response is positive, negative or neutral in one word: {feedback}")
        score = model.generate_content(f"Give me the polarity score between -1 to 1 for: {feedback}")
        return score.text
    except Exception as e:
        return "-1"

def translate(input_text):
    source_lang = detect(input_text)
    translated = GoogleTranslator(source=source_lang, target='en').translate(text=input_text)
    return translated
    
def spam_detection(input_text):
    return spam_detector(input_text)[0]['label'] == 'clean'

def negative_zero_shot(input_text):
    try:
        return model.generate_content(f'Issues should be from ["Misconduct" , "Negligence" , "Discrimination" , "Corruption" , "Violation of Rights" , "Inefficiency" , "Unprofessional Conduct", "Response Time" , "Use of Firearms" , "Property Damage"] only. Give me the issue faced by the feedback giver in less than four words. If no specific category is detected, take "Offensive" as default. Feedback: {input_text}').text
    except Exception as e:
        return "Offensive"

def positive_zero_shot(input_text):
    try:
        return model.generate_content(f'Issues should be from ["Miscellaneous", "Tech-Savvy Staff" , "Co-operative Staff" , "Well-Maintained Premises" , "Responsive Staff"] only. Give me the issue faced by the feedback giver in less than four words. If no specific category is detected, take "Appreciation" as default. Feedback: {input_text}').text
    except Exception as e:
        return "Appreciation"
        
def which_department(input_text):
    try:
        return model.generate_content(f'Departments should be from ["Crime branch", "Rajasthan Armed Constabulary (RAC)", "State Special Branch", "Anti Terrorist Squad (ATS)", "Planning and Welfare", "Training", "Forensic Science laboratory", "Telecommunications", "Cybersecurity", "Traffic Police"] only. Give me the department about which the user is giving feedback. If no specific department is mentioned, take "Crime Branch" as default. Feedback: {input_text}').text
    except Exception as e:
        return "Crime branch"
    
def preprocess(desc, questionaire):
    desc = translate(desc)
    input_text = f"Description: {desc}, Questionaire: {questionaire}"
    return input_text

def pipeline(desc, questionaire):

    input_text = preprocess(desc, questionaire)
    
    if spam_detection(input_text):

        sent = float(sentiment(input_text))
        dept = which_department(input_text)
        
        if sent > 0:
            
            return str(sent), positive_zero_shot(input_text), dept
        
        elif sent < 0:
            
            return str(sent),  negative_zero_shot(input_text), dept
        
        else:
            
            return "0", "No issue", dept
    else:
        return "42", "Spam", "No department"

iface = gr.Interface(
    fn = pipeline,
    inputs = ["text", "text"],
    outputs = ["text", "text", "text"]
)

iface.launch()
import google.generativeai as genai
import gradio as gr
from deep_translator import (GoogleTranslator)
from transformers import pipeline
from langdetect import detect

default = """
Thank you for reporting the incident at [Police Station]. We value your feedback. Could you please share your satisfaction level with the response to your FIR and your overall experience at the police station? Your input helps us improve our services. Reply with:

'Very Satisfied'
'Satisfied'
'Neutral'
'Dissatisfied'
'Very Dissatisfied'
Your feedback is important to us. Thank you for your cooperation.
"""


api_key = "AIzaSyCmmus8HFPLXskU170_FR4j2CQeWZBKGMY"

model = genai.GenerativeModel('gemini-pro')
genai.configure(api_key = api_key)

def translate_en_hi(input_text):
    translated = GoogleTranslator(source='en', target='hi').translate(text=input_text)
    return translated

def translate_source_en(input_text):
    source_lang = detect(input_text)
    translated = GoogleTranslator(source=source_lang, target='en').translate(text=input_text)
    return translated

def message(fir_content):
    try:
        score = model.generate_content(f"Taking into consideration below given FIR content, formulate an appropriate SMS message that will be sent to user to assess if he is satisfied with the situation and his experience in the police station. Also ask him to rate his experience. FIR Content: {fir_content}")
        return score.text
    except Exception as e:
        return default

def pipeline(input_text):
    input_text = translate_source_en(input_text)
    output_text_en = message(input_text)
    output_text_hn = translate_en_hi(output_text_en)
    return [output_text_en, output_text_hn]

iface = gr.Interface(
    fn = pipeline,
    inputs = ["text"],
    outputs = ["text", "text"]
)

iface.launch()
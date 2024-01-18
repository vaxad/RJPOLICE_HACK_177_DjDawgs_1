import google.generativeai as genai
import gradio as gr

api_key = "AIzaSyCmmus8HFPLXskU170_FR4j2CQeWZBKGMY"

model = genai.GenerativeModel('gemini-pro')
genai.configure(api_key = api_key)
chat = model.start_chat(history=[])

def generate_response(prompt):
    output = chat.send_message(f"{prompt}")
    return output.text

# Create Gradio interface
iface = gr.Interface(
    fn=generate_response,
    inputs="text",
    outputs="text",
    title="RakshakRita Chatbot",
    description="Ask me anything about RakshakRita."
)

# Launch the Gradio interface
iface.launch()
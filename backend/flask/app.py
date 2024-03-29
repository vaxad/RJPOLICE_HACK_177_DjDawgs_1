from flask import Flask, request, jsonify
from gradio_client import Client

app = Flask(__name__)

def model(desc,ques):
    client = Client("https://tirath5504-geminisentiment.hf.space/--replicas/zdebr/")
    result = client.predict(
            desc,	# str  in 'input_text' Textbox component
            ques,	# str  in 'input_text2' Textbox component
            api_name="/predict"
    )
    print(result)
    return result

@app.route('/', methods=['GET'])
def hello():
    response = {'message': 'Hello, World!'}
    return jsonify(response)

@app.route('/model', methods=['POST'])
def gradio():
    try:
        data = request.get_json()
        desc = data['desc']
        ques = data['ques']
        print(data)
        result = model(desc=desc, ques=ques)
        response = {'result': result[0], 'issue':result[1], 'department':result[2]}
        return jsonify(response)
    except Exception as e:
        return jsonify({'error':e})

# 1-->committee 2
if __name__ == '__main__':
    app.run(debug=True)

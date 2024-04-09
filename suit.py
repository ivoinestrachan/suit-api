from flask import Flask, make_response
from flask_ngrok import run_with_ngrok
import serial

app = Flask(__name__)
app.config['DEBUG'] = True


arduino = serial.Serial("/dev/tty.usbmodem1101", 9600, timeout=1)

@app.route('/')
def index():
    return make_response("Everything works", 200)

@app.route('/send-command/<command>')
def send_command(command):
    try:
        arduino.write(command.encode())
        response_text = "Message sent successfully"
        status_code = 200
    except Exception as e:
        response_text = f"Error in sending message: {str(e)}"
        status_code = 500

    return make_response(response_text, status_code)




@app.route('/close-serial')
def close_serial():
    arduino.close()
    return "Serial connection closed"

if __name__ == '__main__':
    app.run()

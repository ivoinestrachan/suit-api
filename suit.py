from flask import Flask, make_response
from flask_ngrok import run_with_ngrok
import serial

app = Flask(__name__)
app.config['DEBUG'] = True

try:
    left_arm_serial = serial.Serial("/dev/tty.usbmodem11101", 9600, timeout=1)
    right_arm_serial = serial.Serial("/dev/tty.usbmodem101", 9600, timeout=1)
except Exception as e:
    print(f"serial connection failed: {e}")


@app.route('/')
def index():
    return make_response("suit is up", 200)


@app.route('/left-arm/<command>')
def send_command_left_arm(command):
    try:
        left_arm_serial.write(command.encode())
        response_text = "got request for left arm"
        status_code = 200
    except Exception as e:
        response_text = f"did'nt get message request for left arm: {str(e)}"
        status_code = 500
    return make_response(response_text, status_code)


@app.route('/right-arm/<command>')
def send_command_right_arm(command):
    try:
        right_arm_serial.write(command.encode())
        response_text = "got request for right arm"
        status_code = 200
    except Exception as e:
        response_text = f"did'nt get message request for right arm: {str(e)}"
        status_code = 500
    return make_response(response_text, status_code)


@app.route('/close-serial')
def close_serial():
    try:
        left_arm_serial.close()
        right_arm_serial.close()
        response_text = "serial connection stopped"
    except Exception as e:
        response_text = f"issue closing serial connectoin: {str(e)}"
    return make_response(response_text)


if __name__ == '__main__':
    app.run(port=5002)

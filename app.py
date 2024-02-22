from flask import Flask

app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():

    return {
        "name": "noname",
        "age": 12
    }


if __name__ == '__main__':
    app.run(debug=True)
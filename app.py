from flask import Flask, render_template

app = Flask(__name__)

@app.route("/", methods=['GET'])
def hello_world():
    # return "<p>Hello, World!</p>"

    # return render_template('./frontent/ManagMate/src')

    return {
        "name": "noname",
        "age": 12
    }


if __name__ == '__main__':
    app.run(debug=True)
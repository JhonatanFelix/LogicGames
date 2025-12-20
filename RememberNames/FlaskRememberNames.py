from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

names = ["Jason", "Jennyfer", "Pablo", "Tyrony", "Plancton", "Roberson"]

@app.route('/')
def index():
    return render_template('index.html', random_name=random_name)


@app.route('/random_name')
def random_name():
    random_name = random.choice(names)
    return jsonify(random_name=random_name)

if __name__=='__main__':
    app.run(debug=True)
from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', random_number=random_number)


@app.route('/random_number')
def random_number():
    random_number = random.randint(1,100)
    return jsonify(random_number=random_number)

if __name__=='__main__':
    app.run(debug=True)
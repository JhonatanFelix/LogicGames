from flask import Flask, render_template, jsonify, request, session, redirect, url_for
import random

app = Flask(__name__)

names = ["Jason","Luis", "Jennyfer", "Pablo", 
        "Tyrony", "Plancton", "Felipe", "Roberson", "Carlitos",
        "Pandero"]

@app.route('/')
def index():
    selected = random.sample(names, 4)
    session["names"] = selected
    return render_template('show.html', names=selected)


@app.route('/random_name')
def random_name():
    random_name = random.choice(names)
    return jsonify(random_name=random_name)


if __name__=='__main__':
    app.run(debug=True)
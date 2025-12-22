from flask import Flask, render_template, jsonify, request, session, redirect, url_for
import random

app = Flask(__name__)

names = ["Jason","Luis", "Jennyfer", "Pablo", 
        "Tyrony", "Plancton", "Felipe", "Roberson", "Carlitos",
        "Pandero"]

@app.route("/")
def index():
    selected = random.sample(names, 4)
    session["names"] = selected
    return render_template("show.html", names=selected)


@app.route("/check", methods=["post"])
def check():
    user_input = request.form.get("guess")
    user_names = user_input.split(",")

    correct_names = session.get("names", [])
    user_names = [n.strip() for n in user_names]

    if sorted(user_names) == sorted(correct_names):
        result = 'Correct!!!'
    else:
        result = f"Wrong, correct names were:{', '.join(correct_names)}"
    return render_template("result.html", result=result)


if __name__=='__main__':
    app.run(debug=True)
from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

template = [

    {
        "inputs": 5,
        "category": "sports",
        "words": ["Black", "Gorilla", "Dancing", "Madagascar", "Nice", "White", "Tigers", "Move"]
    },
    {
        "inputs": 6,
        "category": "world country name",
        "words": "france"
    },
   
]

@app.route("/")

def index():

    return render_template("index.html")

@app.route("/get-template")
def get_template():

    return jsonify({

    "status": "success",

    "word": random.choice (templates)
    )}

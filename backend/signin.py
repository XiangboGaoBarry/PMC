from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
import random

app = Flask(__name__)
CORS(app)

signIn_code = "123456"

@app.route('/api/signIn')
# @cross_origin(origin='*')
def signIn():
    return {"code":signIn_code}



@app.route('/api/dataUpdate')
def dataUpdate():
    return {"number":str(int(random.random()*100))}


if __name__ == "__main__":
    app.run(debug = True)


from flask import Flask, request
import pymongo
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
import json
from bson import ObjectId

app = Flask(__name__)
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

@app.route("/")
@cross_origin()
def hello_world():
    return "<p>Hello World!</p>"

@app.route("/save", methods=['POST'])
@cross_origin()
def save():
    data = request.json

    client = pymongo.MongoClient("mongodb+srv://catbat127:mongoDB@cluster0.1tnsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl_cert_reqs=CERT_NONE")
    #db is the test database in client, creates it if it does not exist yet
    db = client.test

    #goes the test database and goes into/creates testCollection table
    collection = db.testCollection

    collection.insert_one(data)

    return 'success save'

@app.route("/find")
@cross_origin()
def find():
    client = pymongo.MongoClient("mongodb+srv://catbat127:mongoDB@cluster0.1tnsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl_cert_reqs=CERT_NONE")
    #db is the test database in client, creates it if it does not exist yet
    db = client.test

    #goes the test database and goes into/creates testCollection table
    collection = db.testCollection
    x = collection.find()
    result = []
    for record in x:
        result.append(record)
    return JSONEncoder().encode({"saved":result})

from flask import Flask, request
import pymongo

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello World!</p>"

@app.route("/save")
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
def find():
    data = request.json
    client = pymongo.MongoClient("mongodb+srv://catbat127:mongoDB@cluster0.1tnsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl_cert_reqs=CERT_NONE")
    #db is the test database in client, creates it if it does not exist yet
    db = client.test

    #goes the test database and goes into/creates testCollection table
    collection = db.testCollection
    
    x = collection.find()
    result = []
    for record in x:
        result.append(record)
    return {"saved": result}

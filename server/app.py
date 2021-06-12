from flask import Flask
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

@app.route("/find")
def add():
    return 'find'

import pymongo

client = pymongo.MongoClient("mongodb+srv://catbat127:mongoDB@cluster0.1tnsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl_cert_reqs=CERT_NONE")

#db is the test database in client, creates it if it does not exist yet
db = client.test

#goes the test database and goes into/creates testCollection table
collection = db.testCollection

record = {}
record['key'] = 'value'
record['covid'] = 19
collection.insert_one(record)

del record['_id']
record['hello'] = 'world'
record['catherine'] = 'yang'
collection.insert_one(record)

x = collection.find({'key':'value'})

for record in x: 
    print(record)

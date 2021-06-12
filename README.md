# Beach Trip Planner - Surfs Up Hacks
Beach Trip Planner is a web application that allows people to search for different stops to add to their travel itinerary, from restaurants to cafes to tourist attractions. Users simply need to enter the destination city and activity type, and they will instantly have access to highly-rated locations. Users can then save locations that they are interested in, and come back later to the site to view them.

## How we built it
We used MongoDB as a database to persistently store saved locations. The React frontend interfaces with a Python Flask server to perform database operations like adding and retrieving locations. The React frontend also utilizes the Google Cloud Places API to find location suggestions.

URL: https://beach-trip-planner.web.app/

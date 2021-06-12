import { useState } from 'react';
import { Button, Input } from 'reactstrap';
import SearchResult from '../components/SearchResult';

function Home() {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');

    function handleCategoryChange(event) {
        setCategory(event.target.value);
        console.log(category);
    }

    function handleLocationChange(event) {
        setLocation(event.target.value);
        console.log(location);
    }

    function callback(results, status) {
        if (status == window.google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              var place = results[i];
              console.log(place);
            }
        }
    }

    async function handleSubmit(event) {
        // call API
        try {
            var map;
            var request = {
                query: `${category}+at+${location}`
            }
            var pyrmont = new window.google.maps.LatLng(-33.8665433,151.1956316);

            map = new window.google.maps.Map(document.getElementById('map'), {
                center: pyrmont,
                zoom: 15
            });

            try {
                var service = await new window.google.maps.places.PlacesService(map);
                await service.textSearch(request, callback);
            } catch (err) {
                console.log(err);
            }
    
            // reset form
            event.preventDefault();
            setCategory('');
            setLocation('');
        } catch (err) {
            console.log(err);
        }

        // reset form
        event.preventDefault();
        setCategory('');
        setLocation('');
    }

    const info = [
        {
            name: 'Paris Baguette',
            address: '2300 Main St',
            number: '1234567890'
        }
    ]
    return (
        <div className='m-5'>
            <h1 id='map'>
                Find locations of interest:
            </h1>
            <h4>
                Find<Input type="text" placeholder='Ex: Restaurants' value={category} 
                        onChange={handleCategoryChange} className='w-25 mb-2'>
                    </Input> 
                at <Input 
                        type="text" placeholder='Ex: Miami Beach' value={location} 
                        onChange={handleLocationChange} className='w-25 mb-3'>
                    </Input>
                <Button onClick={handleSubmit} color='primary'>Submit</Button>
            </h4>
            <h2 className='mt-5'>Results:</h2>
            {info.map((item, id) => <SearchResult
                key = {id}
                name = {item.name}
                address = {item.address}
                numBer = {item.number}
                />)
            }
        </div>

    )
}
export default Home;
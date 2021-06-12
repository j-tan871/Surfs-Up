import { useState } from 'react';
import { Button, Input } from 'reactstrap';
import SearchResult from '../components/SearchResult';

function Home() {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [answers, setAnswers] = useState();

    function handleCategoryChange(event) {
        setCategory(event.target.value);
        // console.log(category);
    }

    function handleLocationChange(event) {
        setLocation(event.target.value);
        // console.log(location);
    }

    function callback(results, status) {
        if (status == window.google.maps.places.PlacesServiceStatus.OK) {
            setAnswers(results);
            console.log(results[0])
        }
    }

    async function handleSubmit(event) {
        var map;
        var request = {
            query: `${category}+at+${location}`
        }
        var pyrmont = new window.google.maps.LatLng(-33.8665433,151.1956316);
        map = new window.google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 15
        })
        var service = new window.google.maps.places.PlacesService(map);
        service.textSearch(request, callback);
        
        event.preventDefault();
        setCategory('');
        setLocation('');
    }

    // const info = [
    //     {
    //         name: 'Paris Baguette',
    //         address: '2300 Main St',
    //         rating: '4.5'
    //     }
    // ]
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
            {/* {info.map((item, id) => <SearchResult
                key = {id}
                name = {item.name}
                address = {item.address}
                raTing = {item.rating}
                />)
            } */}
            { answers ? answers.map((item, id) => <SearchResult
                // because mapping multiple items - know which search result is what
                key = {id}
                name = {item.name}
                address = {item.formatted_address}
                rating = {item.rating}
                />) : null
            }
            {/* <div>{process.env.REACT_APP_API_KEY}</div> */}
        </div>

    )
}
export default Home;
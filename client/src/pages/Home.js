import { useState } from 'react';
import { Button, Input, Container, Row, Col, Spinner } from 'reactstrap';
import SearchResult from '../components/SearchResult';

function Home() {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [answers, setAnswers] = useState();
    const [loading, setLoading] = useState(false);

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
        setLoading(false);
    }

    async function handleSubmit(event) {
        setLoading(true);
        var map;
        var request = {
            query: `${category}+at+${location}`
        }
        var pyrmont = new window.google.maps.LatLng(-33.8665433, 151.1956316);
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
            {
                loading ? <Spinner color="primary" style={{ width: '3rem', height: '3rem' }}/> : null
            }
            <h1 className='display-1'>
                Home
            </h1>
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
            <Container>
                <Row className='justify-content-md-start'>
                    {answers ? answers.map((item, id) => <Col className="order-lg-2 mt-4" lg="6"><SearchResult
                        // because mapping multiple items - know which search result is what
                        key={id}
                        name={item.name}
                        address={item.formatted_address}
                        rating={item.rating}
                        className="order-lg-2 mt-4" lg="5"
                    /></Col>) : null
                    }
                </Row>
            </Container>
            {/* <div>{process.env.REACT_APP_API_KEY}</div> */}
        </div>

    )
}
export default Home;
import { useState } from 'react';
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

    function handleSubmit(event) {
        console.log('hi');
        alert('submitted');
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
        <div>
            <h1>
                Find locations of interest:
            </h1>
            <h4>
                Find <input type="text" placeholder='Ex: Restaurants' value={category}
                    onChange={handleCategoryChange}></input> at <input
                        type="text" placeholder='Ex: Miami Beach' value={location}
                        onChange={handleLocationChange}></input>
                <button onClick={handleSubmit}>Submit</button>
            </h4>
            {info.map((item, id) => <SearchResult
                key = {id}
                name = {item.name}
                address = {item.address}
                numBer = {item.number}
                />)
            }
            {/* <div>{process.env.REACT_APP_API_KEY}</div> */}
        </div>

    )
}
export default Home;
import { useState } from 'react';
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
        console.log('hi')
        alert('submitted');
        event.preventDefault();
        setCategory('');
        setLocation('');
    }

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
            
        </div>
        
    )
}
export default Home;
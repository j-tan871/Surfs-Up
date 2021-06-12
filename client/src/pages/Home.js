import { useState } from 'react';
import { Button, Input } from 'reactstrap';

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
        <div className='m-5'>
            <h1>
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
        </div>
        
    )
}
export default Home;
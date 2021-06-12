import { useEffect } from 'react';

export default function Saved() {
    useEffect(() => {
        async function fetchSavedLocations() {
            const response = await fetch('http://localhost:5000/save');
            // converts to a Javascript object
            const responseData = await response.json();
            console.log(responseData);
        }
        fetchSavedLocations();
    }, []);

    return (
        <div className='m-5'>
            <h1 className='display-1'>Saved Locations</h1>
        </div>
    )
}
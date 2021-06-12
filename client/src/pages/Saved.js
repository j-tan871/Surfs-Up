import { useEffect } from 'react';

export default function Saved() {
    useEffect(() => {
        async function fetchSavedLocations() {
            const headers = {
                'Access-Control-Allow-Origin': '*'
            }
            const response = await fetch('https://trip-planner-surf-api.herokuapp.com/find', {
                headers: headers, 
                method: 'GET'
            });
            // converts to a Javascript object
            const responseData = await response.json();
            console.log(responseData['saved']);
            console.log('done')
        }
        fetchSavedLocations();
    }, []);

    return (
        <div className='m-5'>
            <h1 className='display-1'>Saved Locations</h1>
        </div>
    )
}
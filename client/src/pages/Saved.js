import { useEffect, useState } from 'react';
import SearchResult from '../components/SearchResult';

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
            setSavedItems(responseData['saved']);
        }
        fetchSavedLocations();
    }, []);

    const [savedItems, setSavedItems] = useState()
    return (
        <div className='m-5'>
            <h1 className='display-1'>Saved Locations</h1>
            <p className='mb-3'>🌴 Here are the locations that you saved. Happy travels, and don't forget to pack sunscreen! 🌴</p>
            { savedItems ? savedItems.map((item, id) => 
                <SearchResult 
                    key={id}
                    name={item.name}
                    address={item.address}
                    rating={item.rating}
                    hasButton={false}
                    className="order-lg-2 mt-4" lg="5"
                    />
            ) : null 
            }
        </div>
    )
}
import {useState} from 'react';
import { Card, Button } from 'reactstrap';

export default function SearchResult(props){
    async function handleSave(){
        const headers = {
            'Access-Control-Allow-Origin' : '*', 
            'Content-Type': 'application/json'
        };
        try{
            await fetch(`http://localhost:5000/save`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({
                    name: props.name,
                    address: props.address,
                    rating: props.rating
                })
            });
        } catch(err){
            console.log(err);
        }
    }
    return(
        <div>
            <Card className='p-3 m-3 card-lift--hover shadow border-0'>
                <h5 className='font-weight-bold'>
                    {props.name}
                </h5>
                <p>
                    {props.address}
                </p>
                <p>
                    Rating: {props.rating}/5 stars
                </p>
                {
                    props.hasButton ? <Button color='primary' onClick={handleSave}>Save</Button> : null
                }
            </Card>
        </div>
    )
}
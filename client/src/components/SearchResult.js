import {useState} from 'react';
import { Card, Button } from 'reactstrap';

export default function SearchResult(props){
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
                <Button color='primary'>Save</Button>
            </Card>
        </div>
    )
}
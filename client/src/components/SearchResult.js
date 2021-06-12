import {useState} from 'react';
import { Card, Button } from 'reactstrap';

export default function SearchResult(props){
    return(
        <div>
            <Card className='p-3 m-3 w-25 card-lift--hover shadow border-0'>
                <p>
                    {props.name}
                </p>
                <p>
                    {props.address}
                </p>
                <p>
                    rating: {props.rating}
                </p>
                <Button color='primary'>Save</Button>
            </Card>
        </div>
    )
}
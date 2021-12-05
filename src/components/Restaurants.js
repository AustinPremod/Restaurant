import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Restaurants({cardItem}) {
    return (
        <>
        <Link to={`restaurants/${cardItem.id}`}>
           <Card className="my-3 p-3 rounded cards">
                <Card.Img src={cardItem.photograph} className="p-3" variant="top"/>
                <Card.Body>
                    <Card.Title as="div">
                        <h4>{cardItem.name}</h4>
                    </Card.Title>
                    <Card.Text as="div">
                        <p><strong>Cusine:</strong>{cardItem.cuisine_type}</p>
                    </Card.Text>
                    <Card.Text as="div">
                        <p>{cardItem.neighborhood}</p>
                    </Card.Text>
                </Card.Body>
            </Card> 
        </Link>
        </>
    )
}

export default Restaurants


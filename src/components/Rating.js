import React from 'react'
import { Row, Col, Image, Card, ListGroup } from "react-bootstrap";
function Rating({ResData}) {
    
    return (
        <div>
           
                {ResData.map((item)=>(
                    <ListGroup.Item>
                       
                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Date:</strong> {item.date}</p>
                    <p><strong>Rating:</strong> {item.Rating}</p>
                    <p><strong>Comment:</strong> {item.comments}</p>
                    
                    </ListGroup.Item>
                ))}
               
            
        </div>
    )
}

export default Rating

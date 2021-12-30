import React from 'react'

import './WorkCard.css'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function WorkCard(props) {
    return (
        <Card className={'mt-2'} style={{ width: '10rem', margin: "auto" }}>
            <a href={"#"}><Card.Img id={"card-img"} style={{ objectFit: 'cover' }}  variant="top" height={"150px"} src={require("./" + props.filename + "/card.png")}/></a>
            <Card.Body>
                <Card.Title style={{fontSize: '.75rem'}}>{props.projectname}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default WorkCard
import React from 'react'
import Col from 'react-bootstrap/Col'
import './WorkCard.css'

function WorkCard(props) {

    const imagepath = require('../' + props.filename + '/card.png')

    console.log(imagepath)

    return (
        <Col style={{textAlign: "center"}}>
            <div className={"m-3"} id={"card-body"} style={{backgroundImage: `url("${imagepath}")` ,backgroundColor: "red", backgroundSize: 'cover'}}>
                <div id={"card-content"}>
                    <h3 className={"ps-3 pt-3"}>{props.title}</h3>
                    <p className={"ps-3 pe-3"}>{props.text}</p>
                </div>
            </div>
        </Col>
    )

}

export default WorkCard
import React from 'react'
import Col from 'react-bootstrap/Col'
import './WorkCard.css'

function WorkCard(props) {

    const imagepath = require('../' + props.filename + '/card.png')

    console.log(imagepath)

    return (
        <Col style={{textAlign: "center", padding: "0 0 0 0"}}>
            <div className={"m-3"} id={"card-body"} style={{backgroundImage: `url("${imagepath}")` ,backgroundColor: "red", backgroundSize: 'cover'}}>
                <a href={props.link} target={"_blank"}>
                    <div id={"card-content"}>
                        <h3 className={"ps-3 pt-2 pb-2"}>{props.title}</h3>
                        <p className={"ps-3 pe-3"}>{props.text}</p>
                    </div>
                </a>
            </div>
        </Col>
    )

}

export default WorkCard
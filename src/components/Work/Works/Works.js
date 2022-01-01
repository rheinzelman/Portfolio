import React from 'react'

import './Works.css'

import WorkCard from './WorkCard/WorkCard'


import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Works(props) {
    return (
        <Container className={""}>
            <Row>
                <WorkCard filename={"DBMS"} title={"Python DBMS"} text={"This was a mock DBMS I made in python for my CS457 class on databases."} />
                <WorkCard filename={"Capstone"} title={"Capstone"} text={"My undergrad capstone: Autochess. WIP! Click to find out more."} />
                <WorkCard filename={"BubbleSort"} title={"Bubble Sort"} text={"Demonstration of bubble sort in C++"} />
                <WorkCard filename={"QuickSort"} title={"Quick Sort"} text={"Demonstration of quick sort in C++"} />
            </Row>
        </Container>
    )
}

export default Works

/*

<Card className={'mt-4'} style={{ width: '100px', margin: "auto" }}>
            <a href={"#"}><Card.Img id={"card-img"} style={{ objectFit: 'cover' }}  variant="top" height={"85px"} src={require("./" + props.filename + "/card.png")}/></a>
            <Card.Body id={"card-body"}>
                <Card.Text style={{fontSize: '.75rem'}}>{props.projectname}</Card.Text>
            </Card.Body>
        </Card>

 */
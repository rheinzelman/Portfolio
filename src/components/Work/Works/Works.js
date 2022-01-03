import React from 'react'

import './Works.css'

import WorkCard from './WorkCard/WorkCard'


import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Works(props) {
    return (
        <Container className={""}>
            <Row>
                <WorkCard filename={"DBMS"} title={"Python DBMS"} text={"This was a mock DBMS I made in python for my CS457 class on databases."} link={"https://github.com/rheinzelman/CS457-DBMS"} />
                <WorkCard filename={"Capstone"} title={"Capstone"} text={"My undergrad capstone: Autochess. WIP! Click to find out more."} link={"https://github.com/rheinzelman/AutoChess"} />
                <WorkCard filename={"BubbleSort"} title={"Bubble Sort"} text={"Demonstration of bubble sort in C++"} link={"https://github.com/rheinzelman/Bubble-and-Quick-Sort"} />
                <WorkCard filename={"QuickSort"} title={"Quick Sort"} text={"Demonstration of quick sort in C++"} link={"https://github.com/rheinzelman/Bubble-and-Quick-Sort"} />
            </Row>
        </Container>
    )
}

export default Works
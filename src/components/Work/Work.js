import React from 'react'

//component imports
import Works from './Works/Works'

import "./Work.css"

//Bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

const Work = () => (
    <div>

        <a className={"anchor"} id={"work"}></a>

        <h3 className={"fs-2 m-3"}>Work</h3>
        <p className={"m-3"}>Here are some of my projects.</p>

        <Works />

    </div>
);

export default Work

/*

<Carousel interval={null} id={"carousel"}>
            <Carousel.Item>
                <div class={"carousel-slide"}>
                    <Row>
                        <Col><Works projectname={"Python DBMS"} filename={"DBMS"}/></Col>
                        <Col><Works projectname={"Undergrad Capstone"} filename={"Capstone"}/></Col>
                    </Row>

                    <Row>
                        <Col><Works projectname={"Bubble Sort"} filename={"BubbleSort"}/></Col>
                        <Col><Works projectname={"Quick Sort"} filename={"QuickSort"}/></Col>
                    </Row>
                </div>

            </Carousel.Item>

            <Carousel.Item>
                <div class={"carousel-slide"}>
                    <Row>
                        <Col><Works projectname={"Heap"} filename={"Heap"}/></Col>
                        <Col><Works projectname={"Heap"} filename={"Heap"}/></Col>
                    </Row>

                    <Row>
                        <Col><Works projectname={"Heap"} filename={"Heap"}/></Col>
                        <Col><Works projectname={"Heap"} filename={"Heap"}/></Col>
                    </Row>
                </div>

            </Carousel.Item>

        </Carousel>

 */
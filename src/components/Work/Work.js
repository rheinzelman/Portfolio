import React from 'react'

//component imports
import WorkCard from './WorkCard/WorkCard'

//Bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Work = () => (
    <div>
        <h3 className={"fs-2 m-3"}>Work</h3>
        <p className={"m-3"}>Here are some of my projects.</p>
        <Container>

            <Row>
                <Col><WorkCard projectname={"Python DBMS"}
                          filename={"DBMS"}
                /></Col>

                <Col><WorkCard projectname={"Undergrad Capstone"}
                          filename={"Capstone"}
                /></Col>
                <Col><WorkCard projectname={"Python DBMS"}
                               filename={"DBMS"}
                /></Col>

                <Col><WorkCard projectname={"Undergrad Capstone"}
                               filename={"Capstone"}
                /></Col>
                <Col><WorkCard projectname={"Python DBMS"}
                               filename={"DBMS"}
                /></Col>

                <Col><WorkCard projectname={"Undergrad Capstone"}
                               filename={"Capstone"}
                /></Col>
            </Row>

            <Row>
                <Col><WorkCard projectname={"Python DBMS"}
                               filename={"DBMS"}
                /></Col>

                <Col><WorkCard projectname={"Undergrad Capstone"}
                               filename={"Capstone"}
                /></Col>
                <Col><WorkCard projectname={"Python DBMS"}
                               filename={"DBMS"}
                /></Col>

                <Col><WorkCard projectname={"Undergrad Capstone"}
                               filename={"Capstone"}
                /></Col>
                <Col><WorkCard projectname={"Python DBMS"}
                               filename={"DBMS"}
                /></Col>

                <Col><WorkCard projectname={"Undergrad Capstone"}
                               filename={"Capstone"}
                /></Col>
            </Row>
            <Row>
                <Col><WorkCard projectname={"Python DBMS"}
                               filename={"DBMS"}
                /></Col>

                <Col><WorkCard projectname={"Undergrad Capstone"}
                               filename={"Capstone"}
                /></Col>
                <Col><WorkCard projectname={"Python DBMS"}
                               filename={"DBMS"}
                /></Col>

                <Col><WorkCard projectname={"Undergrad Capstone"}
                               filename={"Capstone"}
                /></Col>
                <Col><WorkCard projectname={"Python DBMS"}
                               filename={"DBMS"}
                /></Col>

                <Col><WorkCard projectname={"Undergrad Capstone"}
                               filename={"Capstone"}
                /></Col>
            </Row>

        </Container>
    </div>
);

export default Work
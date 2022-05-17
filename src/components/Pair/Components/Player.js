import React from "react";
import {Card, CardBody, Col, Row} from "reactstrap";

const Player = ({ player }) => {
    return (
        <Card>
            <CardBody>
                <small>Name:</small>
                <h4>Jugador</h4>
                <Row>
                    <Col md={6}>
                        <small>Height (in):</small>
                        <h5>000 in</h5>
                    </Col>
                    <Col md={6}>
                        <small>Height (m):</small>
                        <h5>0.00 m</h5>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Player;

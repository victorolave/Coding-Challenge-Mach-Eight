import React from "react";
import {Col, Row} from "reactstrap";
import Player from "./Components/Player";

const Pair = () => {
    return (
        <Row className="mt-4">
            <Col md={5}>
                <Player />
            </Col>
            <Col md={2} className="align-items-center">
                <h1>+</h1>
            </Col>
            <Col md={5}>
                <Player />
            </Col>
        </Row>
    )
}

export default Pair;

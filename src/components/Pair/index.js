import React from "react";
import {Col, Row} from "reactstrap";
import Player from "./Components/Player";

const Pair = ({ pair }) => {
    return (
        <Row className="mt-4">
            <Col md={5}>
                <Player player={pair.playerA} />
            </Col>
            <Col md={2} className="align-items-center">
                <h1>+</h1>
            </Col>
            <Col md={5}>
                <Player player={pair.playerB} />
            </Col>
        </Row>
    )
}

export default Pair;

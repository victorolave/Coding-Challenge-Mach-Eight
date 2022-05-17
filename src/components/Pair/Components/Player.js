import React from "react";
import {Card, CardBody, Col, Row} from "reactstrap";

/**
 * @description Component for show player data.
 * @param player
 * @returns {JSX.Element}
 * @constructor
 */
const Player = ({ player }) => {
    return (
        <Card>
            <CardBody>
                <small>Name:</small>
                <h4>{ player.first_name + ' ' + player.last_name }</h4>
                <Row>
                    <Col md={6}>
                        <small>Height (in):</small>
                        <h5>{ player.h_in } in</h5>
                    </Col>
                    <Col md={6}>
                        <small>Height (m):</small>
                        <h5>{ player.h_meters } m</h5>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Player;

import {useEffect, useState} from "react";

// Images
import nba from './assets/images/nba.png';

// Components
import Pair from "./components/Pair";
import {Button, Card, CardBody, Col, Container, FormGroup, Input, Label, Row} from "reactstrap";

// Libraries
import axios from "axios";

/**
 * @description Main component
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {

    // Array of all NBA players
    const [players, setPlayers] = useState([]);

    // State to handle user input
    const [height, setHeight] = useState(null);

    // Array with the couples that meet the condition
    const [pairs, setPairs] = useState([]);

    // State to handle when results are displayed
    const [showResults, setShowResults] = useState(false);

    /**
     * @description Method to get api data with the nba players.
     * @returns {Promise<void>}
     */
    const getPlayers = async () => {
        await axios.get('https://mach-eight.uc.r.appspot.com')
            .then(response => {
                setPlayers(response.data.values);
            })
    }

    /**
     * @description Method to find the player pairs.
     */
    const find = () => {

        let map = new Map();

        let pairs = [];

        for (let i = 0; i < players.length; i++) {

            let temp = height - players[i].h_in;

            // Checking for condition.
            if (map.has(temp.toString())) {
                pairs.push({
                    playerA: players[i],
                    playerB: map.get(temp.toString())
                })
            }
            map.set(players[i].h_in, players[i]);
        }

        setPairs(pairs);
        setShowResults(true);
    }

    useEffect(() => {
       getPlayers();
    }, []);

    useEffect(() => {
        setShowResults(false);
        setPairs([]);
    }, [height]);

    return (
        <Container>
            <Row className="mt-5">
                <Col md={12}>
                    <Card>
                        <CardBody className="text-center">
                            <img alt="NBA Logo" src={nba} height="80px"/>
                            <h1>FIND THE PAIR'S</h1>
                            <hr/>
                            <p>This application will allow you to find the pairs of <strong>NBA</strong> players whose
                                summed height (in) is equal to the value you enter. </p>

                            <br/>

                            <FormGroup>
                                <Row className="justify-content-center">
                                    <Col md={6}>
                                        <Label for="user_height">
                                            Enter the height you are looking for (in)
                                        </Label>
                                        <Input value={height} onChange={(e) => setHeight(e.target.value)} className="text-center" id="user_height" name="user_height"
                                               placeholder="Ex: 100 in" type="number"/>
                                        <Button onClick={find} className="mt-2" color="primary"> Search </Button>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <br/>

                            {
                                showResults ? <>
                                    <h1>Results</h1>
                                    <p>{ pairs.length > 0 ? 'There are a total of ' + pairs.length +' pairs whose combined heights total ' + height : 'No matches found' }</p>

                                    {
                                        pairs.map(pair => <Pair pair={pair} />)
                                    }
                                </> : <></>
                            }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;

import {useEffect, useState} from "react";
import {Button, Card, CardBody, Col, Container, FormGroup, Input, Label, Row} from "reactstrap";

// Images
import nba from './assets/images/nba.png';
import Pair from "./components/Pair";
import axios from "axios";

const App = () => {

    const [players, setPlayers] = useState([]);
    const [height, setHeight] = useState(null);
    const [pairs, setPairs] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const getPlayers = async () => {
        await axios.get('https://mach-eight.uc.r.appspot.com')
            .then(response => {
                setPlayers(response.data.values);
            })
    }

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

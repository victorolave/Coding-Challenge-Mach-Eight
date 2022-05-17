import {Card, CardBody, Col, Container, FormGroup, Input, Label, Row} from "reactstrap";

// Images
import nba from './assets/images/nba.png';

const App = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={12}>
          <Card>
              <CardBody className="text-center">
                  <img alt="NBA Logo" src={nba} height="80px"/>
                  <h1>FIND THE PAIR'S</h1>
                  <hr/>
                  <p>This application will allow you to find the pairs of <strong>NBA</strong> players whose summed height (in) is equal to the value you enter. </p>

                  <br/>

                  <FormGroup>
                      <Row className="justify-content-center">
                          <Col md={6}>
                              <Label for="user_height">
                                  Enter the height you are looking for (in)
                              </Label>
                              <Input className="text-center" id="user_height" name="user_height" placeholder="Ex: 100 in" type="number"/>
                          </Col>
                      </Row>
                  </FormGroup>

                  <br/>

                  <h1>Results</h1>
                  <p>Results</p>

                  <Row className="mt-4">
                      <Col md={5}>
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
                      </Col>
                      <Col md={2} className="align-items-center">
                          <h1>+</h1>
                      </Col>
                      <Col md={5}>
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
                      </Col>
                  </Row>
              </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

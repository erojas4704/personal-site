import logo from "./logo.svg";
import "./App.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="App">
      <Col className="justify-content-center">
        <div className="display-5">Hello</div>
        <div>There will be stuff here</div>
        {/*
        <Row>
          <Card>
            <Card.Img></Card.Img>
            <Card.Title>Primus</Card.Title>
            <Card.Body>Ok</Card.Body>
          </Card>
          <Card>
            <Card.Img></Card.Img>
            <Card.Title>Stocks Game</Card.Title>
            <Card.Body>Ok</Card.Body>
          </Card>
        </Row>
        */}
      </Col>
    </Container>
  );
}

export default App;

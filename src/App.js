// src/App.js
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Name, Price, Description, Image } from './components';
import Message from './components/Message';
import './App.css'; // Import the custom CSS

// Define your name here
const firstName = "John"; // Change to your name or leave as an empty string

const App = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Image />
              <Card.Title>
                <Name />
              </Card.Title>
              <Card.Text>
                <Price />
                <Description />
              </Card.Text>
            </Card.Body>
          </Card>
          <Message firstName={firstName} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Main from './views/Main/Main';

import { Row, Col } from 'react-materialize';

export default function App() {
  return (
    <Row>
      <Header />
      <Row>
        <Col m={2}>
          <Profile />
        </Col>
        <Col m={10}>
          <Main />
        </Col>
      </Row>
    </Row>
  );
}

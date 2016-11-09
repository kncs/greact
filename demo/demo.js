import React from 'react';
import ReactDOM from 'react-dom';

import {Row, Col} from '../src/greact';

class App extends React.Component {
  render() {
    return (
      <div>
        <Row cols={12}>
          <Col xs={12} sm={4} md={2} lg={1}>{'1'}</Col>
          <Col xs={12} sm={4} md={2} lg={1}>{'2'}</Col>
          <Col xs={12} sm={4} md={2} lg={1}>{'3'}</Col>
          <Col xs={12} sm={4} md={2} lg={1}>{'4'}</Col>
          <Col xs={12} sm={4} md={2} lg={1}>{'5'}</Col>
          <Col xs={12} sm={4} md={2} lg={1}>{'6'}</Col>
          <Col xs={12} sm={4} md={2} lg={1}>{'7'}</Col>
          <Col xs={12} sm={4} md={2} lg={1}>{'8'}</Col>
          <Col xs={12} sm={4} md={2} lg={1}>{'9'}</Col>
          <Col xs={12} sm={4} md={2} lg={1}>{'10'}</Col>
          <Col xs={12} sm={4} md={2} lg={1}>{'11'}</Col>
          <Col xs={12} sm={4} md={2} lg={1}>{'12'}</Col>
        </Row>
        <Row cols={5}>
          <Col xs={5} md={1}>{'1'}</Col>
          <Col xs={5} md={1}>{'2'}</Col>
          <Col xs={5} md={1}>{'3'}</Col>
          <Col xs={5} md={1}>{'4'}</Col>
          <Col xs={5} md={1}>{'5'}</Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';

import {Row, Col} from '../src/greact';

class App extends React.Component {
  render() {
    let code = "var data = 1;";
    return (
      <div>
        <h1>Greact, the easiest way to create your layout</h1>
        <p>Without any suprise greact will allow you to layout your pages through a series of rows and columns. A row can be defined as a horizontal groups of columns and content should be placed within columns (only columns may be immediate children of rows).</p>
        <h2>Example: Stacked-to-horizontal</h2>

        <Row>
          <Col md={1}>md-1</Col>
          <Col md={1}>md-1</Col>
          <Col md={1}>md-1</Col>
          <Col md={1}>md-1</Col>
          <Col md={1}>md-1</Col>
          <Col md={1}>md-1</Col>
          <Col md={1}>md-1</Col>
          <Col md={1}>md-1</Col>
          <Col md={1}>md-1</Col>
          <Col md={1}>md-1</Col>
          <Col md={1}>md-1</Col>
          <Col md={1}>md-1</Col>
        </Row>
        <Row>
          <Col md={8}>md-8</Col>
          <Col md={4}>md-4</Col>
        </Row>
        <Row>
          <Col md={4}>md-4</Col>
          <Col md={4}>md-4</Col>
          <Col md={4}>md-4</Col>
        </Row>
        <Row>
          <Col md={6}>md-6</Col>
          <Col md={6}>md-6</Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import {PrismCode} from "react-prism";

import {Row, Col} from '../src/greact';

import {default as stackedToHorizontal} from '!raw-loader!./examples/stacked-to-horizontal.js';
import {default as changingColumnsNumber} from '!raw-loader!./examples/changing-columns-number.js';
import {default as offsettingColumns} from '!raw-loader!./examples/offsetting-columns.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Greact, the easiest way to create your layout</h1>
        <p>Without any suprise greact will allow you to layout your pages through a series of rows and columns. A row can be defined as a horizontal groups of columns and content should be placed within columns.</p>
        <h2>Example: Stacked-to-horizontal</h2>

        <Row>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
        </Row>
        <Row>
          <Col md={8}>{'md-8'}</Col>
          <Col md={4}>{'md-4'}</Col>
        </Row>
        <Row>
          <Col md={4}>{'md-4'}</Col>
          <Col md={4}>{'md-4'}</Col>
          <Col md={4}>{'md-4'}</Col>
        </Row>
        <Row>
          <Col md={6}>{'md-6'}</Col>
          <Col md={6}>{'md-6'}</Col>
        </Row>

        <h3>Code</h3>
        <pre>
          <PrismCode className="language-javascript">
            {stackedToHorizontal}
          </PrismCode>
        </pre>

        <h2>Example: Changing columns number</h2>
        <Row>
          <Col md={12}>{'columns = 12'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
        </Row>
        <Row cols={7}>
          <Col md={7}>{'columns = 7'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
          <Col md={1}>{'md-1'}</Col>
        </Row>

        <h3>Code</h3>
        <pre>
          <PrismCode className="language-javascript">
            {changingColumnsNumber}
          </PrismCode>
        </pre>

        <h2>Example: Offsetting columns</h2>
        <Row>
          <Col md={4}>{'md-4'}</Col>
          <Col md={4} offset={{md:4}}>{'offset-md-4 md-4'}</Col>
        </Row>
        <Row>
          <Col md={3} offset={{md:3}}>{'offset-md-3 md-3'}</Col>
          <Col md={3} offset={{md:3}}>{'offset-md-3 md-3'}</Col>
        </Row>
        <Row>
          <Col md={6} offset={{md:3}}>{'offset-md-3 md-6'}</Col>
        </Row>
        <h3>Code</h3>
        <pre>
          <PrismCode className="language-javascript">
            {offsettingColumns}
          </PrismCode>
        </pre>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

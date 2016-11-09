# Greact

Grid systems are used for creating page layouts through a series of rows and columns that house your content. Greact has been created to render layout as easy as a pie for [React](https://facebook.github.io/react/) users.
Greact is based on [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and don't have any css dependencies. Keep in mind that flexbox are well supported by most of modern browsers however you can check the compatibility [here](http://caniuse.com/#feat=flexbox)

# Code Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import {Row, Col} from 'greact';

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
          <Col xs={5} md={1}>{'13'}</Col>
          <Col xs={5} md={1}>{'14'}</Col>
          <Col xs={5} md={1}>{'15'}</Col>
          <Col xs={5} md={1}>{'16'}</Col>
          <Col xs={5} md={1}>{'17'}</Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```
# Installation

```bash
$ npm install --save greact
```

# API Reference

Comming soon :)

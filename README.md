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
      </div
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```
# Installation

```bash
$ npm install --save greact
```

# Grid System

Without any suprise greact will allow you to layout your pages through a series of rows and columns. A row can be defined as a horizontal groups of columns and content should be placed within columns (only columns may be immediate children of rows).

## Row

Create a Row is super easy, so just have a look below:

```javascript
    <Row>
        ...
    </Row>
```
Because sometimes you may want to tweek your grid, a Row can accept some extra options:

|  Props    |               Description              |              Default                  |
|:----------|:---------------------------------------|:-------------------------------------:|
| cols      |  number of columns                     | 12                                    |
| queries   |  an object to define new queries size  | ```{ xs : 544, sm : 768, md : 992 }```|

See the example below for a better idea of how it all works.

```javascript
    <Row cols={16} queries={{ xs : 500, sm : 800, md : 1000 }}>
        ...
    </Row>
```

## Col

Create a Col is as easy as a creating a Row :

```javascript
    <Row>
        <Col xs={6}>
            ...
        </Col>
        <Col xs={6}>
            ...
        </Col>
    </Row>
```
Let's have a look on options:

|  Props  |                     Description                  |  Default  |
|:--------|:-------------------------------------------------|:---------:|
| xs      | space used by the column for extra small devices | 0         |
| sm      | space used by the column for small devices       | 0         |
| md      | space used by the column for medium devices      | 0         |
| lg      | space used by the column for large devices       | 0         |

Feel free to combine all these options and play with the grid, that's super easy and this is why greact exists:

```javascript
    <Row>
        <Col xs={12} sm={6} md={4} lg={1}>
            ...
        </Col>
        <Col xs={12} sm={6} md={4} lg={1}>
            ...
        </Col>
    </Row>
    <Row cols={7}>
        <Col xs={6} sm={5}>
            ...
        </Col>
        <Col xs={1} sm={2}>
            ...
        </Col>
    </Row>
```

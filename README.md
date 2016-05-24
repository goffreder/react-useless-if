# react-useless-if

React PropType to check if prop is useless (in relation to other props)

(_inspired by [react-required-if](https://github.com/thejameskyle/react-required-if) from [thejameskyle](https://github.com/thejameskyle)_)

## Install

```sh
$ npm install --save react-useless-if
```

## Usage

```js
import React, {PropTypes} from 'react';
import uselessIf from 'react-useless-if';

export default class Component extends React.Component {
  static propTypes = {
    showButton: PropTypes.bool,
    handleButtonClick: uselessIf(PropTypes.func, props => !props.showButton)
  };

  render() {
    return (
      <div>
        {
          this.props.showButton
            ? <button onClick={this.props.handleButtonClick}>Click Me</button>
            : null
        }
      </div>
    );
  }
}
```

**Result:**

```js
import React from 'react';
import {render} from 'react-dom';
import Component from './Component';

render(
  <div>
    <Component/> // ok
    <Component showButton /> // ok
    <Component handleButtonClick={() => {}} /> // Warning
  </div>,
  document.getElementById('root')
);
```

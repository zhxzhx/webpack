// touch Greeter.js
import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';
class Greeter extends Component {
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
        <p className={styles.another}>this is first demo</p>
      </div>
    )
  };
}
export default Greeter
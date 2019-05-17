import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCount, decrementCount, resetCount } from '../actions';

class Counter extends Component {
  increment() {
    // const { incrementCount } = this.props;
    this.incrementCount();
  }

  decrement() {
    // const { decrementCount } = this.props;
    this.decrementCount();
  }

  reset() {
    // const { resetCount } = this.props;
    this.resetCount();
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment} type="button">
          +1
        </button>
        <button onClick={this.decrement} type="button">
          -1
        </button>
        <button onClick={this.reset} type="button">
          Reset
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { count } = state;
  return {
    count,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementCount,
      decrementCount,
      resetCount,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

import React from 'react';
import { connect } from 'react-redux';
import { serverRenderClock, startClock } from '../actions';
import Examples from '../components/examples';

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(serverRenderClock(isServer));

    return {};
  }

  componentDidMount() {
    // const { startClock } = this.props.startClock;
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    this.timer = setInterval(() => startClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Examples />;
  }
}
const mapDispatchToProps = { startClock };
export default connect(
  null,
  mapDispatchToProps,
)(Index);

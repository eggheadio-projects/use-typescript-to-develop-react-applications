import * as React from 'react';
import * as ReactDOM from 'react-dom';

type AppProps = {
  message: string,
}
type AppState = {
  count: number,
}
class App extends React.Component <AppProps, AppState> {
  constructor(props) {
      super(props);
      this.state = {
          count: 0
      }
  }
  render() {
      return (
          <div onClick={this.increment}>{this.props.message}{this.state.count}</div>
      );
  }
  increment = () => {
      this.setState({
          count: this.state.count + 1
      });
  }
}

ReactDOM.render(
    <div>Hello world</div>,
    document.getElementById('root')
  );
  
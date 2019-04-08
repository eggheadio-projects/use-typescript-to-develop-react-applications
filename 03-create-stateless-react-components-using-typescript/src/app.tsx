import * as React from 'react';
import * as ReactDOM from 'react-dom';

type AppProps = { message: string }
const App: React.SFC<AppProps> = ({ message }) => <div>{message}</div>;

ReactDOM.render(
    <div>Hello world</div>,
    document.getElementById('root')
  );
  
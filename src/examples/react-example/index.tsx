import 'react-app-polyfill/ie11';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloExplorerReact } from '../../index';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
        }
      >
        Click me to change the theme
      </button>
      <ApolloExplorerReact
        className="embedded-explorer"
        graphRef="acephei@current"
        endpointUrl="https://acephei-gateway.herokuapp.com"
        initialState={{
          document: `query Example {
	me {
		id
	}
}`,
          variables: {
            test: 'abcxyz',
          },
          displayOptions: {
            showHeadersAndEnvVars: true,
            theme,
          },
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

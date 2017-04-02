 how to use 'react-copy-to-clipboard'
 
 `npm i react-copy-clipboard`
###usage
```

import React from 'react';
import ReactDOM from 'react-dom';
import CopyToClipboard from 'react-copy-to-clipboard';

const App = React.createClass({
  getInitialState() {
    return {value: '', copied: false};
  },

  render() {
    return (
      <div>
        <input value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />
//text属性里面放的就是copy到粘贴板的内容
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>

        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
  }
});

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```



###how to use my demo 


1.`git clone  git@github.com:qmm-g-Excellent/react-copy-to-clipboard.git`

2. `cd react-copy-to-clipboard`

3.　`npm i`

4. `npm run wpw`

5. `npm start`

6. 访问：`localhost:3000`
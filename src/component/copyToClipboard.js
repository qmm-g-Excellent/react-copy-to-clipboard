import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

class CopyTextToClipboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      copied: false
    }
  }


  onChange({target:{value}}) {
    this.setState({value, copied: false});
  }

  onCopy() {
    this.setState({copied: true});
  }

  render() {
    const popup = this.state.copied ? 'show' : '';
    return (
        <div className="input-group copy">
          <input value={this.state.value} className="form-control"
                 onChange={this.onChange.bind(this)}/>

          <CopyToClipboard text={this.state.value}
                           onCopy={this.onCopy.bind(this)}>
            <div className="input-group-addon btn-copy">
              <span className="copy-btn">copy </span>
              <span className={"popupText " + popup}>Copied !</span>
            </div>
          </CopyToClipboard>

        </div>
    )
  }

}

export default CopyTextToClipboard;
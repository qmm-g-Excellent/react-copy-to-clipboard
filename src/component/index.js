import React from 'react';
import ReactDom from 'react-dom';
import CopyToClipboard from "./copyToClipboard";
import '../style/popup.less';

ReactDom.render(
    <CopyToClipboard />,
    document.getElementById('app')
);
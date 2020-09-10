import React from 'react';
import logo from './logo.svg';
import './App.css';

function tokenButtonClick() {
    console.log("Test tokenButtonClick")
}

function App() {
    return (
        <>
            <button className="button" onClick={() => tokenButtonClick()}>Click me to get token</button>

            {/* <button className="button" onClick="tokenButtonClick()">Click me to get config</button>

            <button className="button" id="toast" onClick="tokenButtonClick()">Click me to show toast</button>

            <button className="button" id="closeWeb" onClick="tokenButtonClick()">Click me to close webview</button>*/}
        </>
    );
}

export default App;

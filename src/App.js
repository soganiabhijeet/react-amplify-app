import React from 'react';
import logo from './logo.svg';
import './App.css';

<!DOCTYPE html>
<html>
<style>
    .button {
        background-color: #555555;
        border: none;
        color: white;
        padding: 30px 64px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 30px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>
<body>

<p id="demo" style="font-size:60px"></p>
<button class="button" onclick="tokenButtonClick()">Click me to get token</button>

<button class="button" onclick="buttonClick()">Click me to get config</button>

<button class="button" id="toast" onclick="toastButtonClick()">Click me to show toast</button>

<button class="button" id="closeWeb" onclick="closeButtonClick()">Click me to close webview</button>

<script>
    //document.getElementById("toast").style.visibility = "hidden";
    //document.getElementById("closeWeb").style.visibility = "hidden";
    function tokenButtonClick() {
        document.getElementById("demo").innerHTML = "<br>" + "Token is " + "<br>" + getParameterByName('token')
    }

    function toastButtonClick() {
        Android.showToast('Hello from Helix Sentient !');
        //document.getElementById("demo").innerHTML = "<br>" + "Token is " + "<br>" + getParameterByName('token')
    }

    function closeButtonClick() {
        Android.closeActivity();
        //document.getElementById("demo").innerHTML = "<br>" + "Token is " + "<br>" + getParameterByName('token')
    }

    function buttonClick() {
        /* document.write("URL from new flow is " + window.location.href + "\n");
         document.write("<br>");
         document.write("<br>");*/


        let url = new URL(window.location.href);
        let urlParams = new URLSearchParams(url.search);
        /*document.write("Token from new flow is  " + getParameterByName('token') + "\n");
        document.write("<br>");
        document.write("<br>");
        document.write("<br>");
        document.write("Making call to Get Config \n");
        document.write("<br>");
        document.write("<br>");*/
        var myHeaders = new Headers();
        myHeaders.append("x-amz-access-token", getParameterByName('token'));
        myHeaders.append("Request-id", "9ccffc0a-1b9c-4aae-8153-365cf56b5a29");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };


        fetch("https://vtoqmjisab.execute-api.eu-west-1.amazonaws.com/live/helix/v2/configuration?buildVersionName=123&devicePlatform=Android", requestOptions)
            .then(response => response.text())
            .then(result => {
                document.getElementById("toast").style.visibility = "visible";
                document.getElementById("closeWeb").style.visibility = "visible";
                document.getElementById("demo").innerHTML = "<br>" + "Get Config response " + "<br>" + result
                //document.write("<br>" + "Get Config response " + "<br>" + result);
            })
            .catch(error => document.write('error', error));
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

</script>

</body>
</html>
export default App;

# Soul Machines Video Web Component

## Usage Guide

### Token Server

> An cloud token server template is available internally within Soul Machines

A token server is required which serves an appopriate session configuration in JSON using the following format:

```
{
  url: SESSION_SERVER_URL,
  jwt: SIGNED_JWT_TOKEN
}

```

#### `url`

The secure websocket url to the session server that hosts the digital person.
eg. `wss://dh.soulmachines.cloud`

#### `jwt`

A valid JWT token string, signed with the credentials provided by Soul Machines.

### Import the JavaScript module

- Both specific versions (`soulmachines-X.Y.Z.js`) and the latest version (`soulmachines-latest.js`) are available
- Place the `<script>` tag in either the `<head>` or `<body>` section of your HTML page
- It is preferable to use `async` so that loading the script does not block parsing of the page

```
<script src="https://static.soulmachines.com/soulmachines-latest.js" async></script>
```

### Embed the `<sm-video>` element

> Substitute the relevant token server URL

```
<sm-video
  autoconnect="true"
  tokenserver="https://my-token-server.com/jwt"
></sm-video>
```

### Style the `<sm-video>` element

> This example will position the web component within a circle floating in the bottom right of the screen

```
<style>
  sm-video {
    position: fixed;
    z-index: 9999;
    bottom: 70px;
    right: 20px;
    margin: 10px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    background-color: white;
  }
</style>
```

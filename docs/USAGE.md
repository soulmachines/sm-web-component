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
- It is preferable to use `defer` so that loading the script does not block parsing of the page

```
<script src="https://static.soulmachines.com/soulmachines-latest.js" defer></script>
```

### Embed the `<sm-video>` element

> Substitute the relevant token server URL

```
<sm-video
  token-server="https://my-token-server.com/jwt"
></sm-video>
```

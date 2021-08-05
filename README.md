# Soul Machines Web Component

This project generates a single JavaScript file called `soulmachines.js` as output. Including this file into an existing website allows that site to add a digital person to the page using HTML like this:

```
<sm-video autoconnect="true" tokenserver="https://my-token-server.com/jwt"></sm-video>
```

The element MUST be passed a `tokenserver` url where it can request a session configuration from. The `tokenserver` may be a localhost URL if developing locally. The session configuration must be returned in JSON in the following format:

```
// GET /jwt

{
  url: SESSION_SERVER_URL,
  jwt: SIGNED_JWT_TOKEN
}

```

#### `url`

The secure websocket url to the session server that hosts the digital person.
eg. wss://dh.soulmachines.cloud

#### `jwt`

A valid JWT token string, signed with the credentials provided by Soul Machines.

## Usage Examples

See the `demo` folder for more usage examples.

## Local Development

The project consists of 2 parts:

- An Angular project, which builds a web component
- A simple http server, which serves the compiled library and examples as a static site

### Setup

Create a `.env` file in the root folder, copied from `.env.template` with the relevant values taken from your DP in DDNA Studio -> Edit Project -> Conection Config (Advanced)

### Building the soulmachines.js library

Needs to be done manually each time (sorry). Builds the Angular project and outputs to `dist` folder, then generates the file `demo/soulmachines.js` by concatenating all the Angular output into a single file.

```
npm run build && npm run package
```

### Serving the examples

Start the local token server:

```
npm run token
```

Serve the demo - this server can remain running. Refresh in browser to view changes - there's no auto-refresh. Hard refresh is often required.

```
npm run serve
```

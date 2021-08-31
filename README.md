# Soul Machines Web Component

## Continuity POC

This POC demonstrates that the Shared Worker instance is not persisted when navigating to another page on the same site.

Run the following commands:

```
npm run token
npm run package
npm run serve
```

This will start the token server and serve the /demo/index.html page.

1. Open the page at <http://127.0.0.1:8080/>
2. The `sm-video` component on the page starts a Shared Worker which continually increments a counter and sends the value back to the page where it is displayed under 'Worker Status'
3. Open another instance of the page in a new tab - you will notice that the 'Worker Status' updates with the same values as the other tab. This behaviour is expected due to the Shared Worker.
4. Close the second tab
5. On the original tab, click the 'Go to Other page' link which navigates you to a similar second page which also contains an `sm-video` component. However, note that the 'Worker Status was reset to the initial 'None set yet' state then starts incrementing from zero. This is because the original Shared Worked instance was terminated when the page was navigated away from, and a new instance created for the destination page.

## Original Content

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

### Github token for local development

Go to your GitHub profile -> Settings -> Developer settings -> Personal access tokens -> Generate new token ->
Enter a note ie: 'SM private packages'
Select scopes:

repo - Full control of private repositories
read:packages - Download packages from GitHub Package Registry

Generate token -> Copy token to save later -> Enable SSO -> Authorize to soulmachines org

Add your personal access token to ~/.npmrc file in the user root directory with the following line, replacing TOKEN with your personal access token. Create a new ~/.npmrc file if one doesn't exist.

```
@soulmachines:registry=https://npm.pkg.github.com/soulmachines
//npm.pkg.github.com/:_authToken=TOKEN
```

Reference: https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token

### Start local development

```
npm i
npm run token
npm run start
```

### Building the soulmachines.js library

```
npm run package
```

### Serving the examples in demo folder

Start the local token server:

```
npm run token
```

Serve the demo - this server can remain running. Refresh in browser to view changes - there's no auto-refresh. Hard refresh is often required.

```
npm run serve
```

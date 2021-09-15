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

### Release

1. branch from `master`, name the branch following this based on the release type:

   - formal release - `release`
   - alpha release - `alpha`
   - beta release - `beta`

2. Push the release branch to remote, it will trigger `semantic-release` and `release` job in CI
3. Once the release is done, create a PR to merge the branch back to `master` to get the latest version and changelog updated

The table below shows which commit message gets you which release type when `semantic-release` runs:

| Commit message                                                                                                                                                                                   | Release type               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release |

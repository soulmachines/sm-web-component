# Soul Machines Video Web Component

The Video web component allows integration of a Digital Person into any website.

Please refer to the [Usage Guide](./docs/USAGE.md) and [API Documentation](./docs/API-DOCS.md) for implementation guidance.

## Usage Examples

See the `examples` folder for more usage examples.

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

Remember to install all npm dependencies before starting the app:

```
npm i
```

You can then start the Angular app:

```
npm start
```

An Angular-based preview of the app will be available at `http://localhost:4210`.

A JWT token server is also hosted by the Angular app, and will be available at `http://localhost:4210/auth/authorize`. This token server can be used to issue JWTs for the Angular app, or for examples in the `examples` folder, served separately.

### Serving the examples in `examples` folder

Ensure the Angular app with token server is running:

```
npm start
```

In a **separate terminal window**, run the npm command to serve the examples folder as a static site. This server can remain running. Refresh in browser to view changes - there's no auto-refresh. Hard refresh is often required.

```
npm run serve
```

This command will serve the `examples` folder at `http://127.0.0.1:8080`. Use the browser's URL bar to navifate directly to the desired example page.

### Building the output soulmachines.js library

To create a bundled output file, use the `package` command:

```
npm run package
```

This will build the Angular app, produce standard Angular output files, then concat those into a single file for distribution.

### Release

#### Dev Release

Any PR merged to `master` branch will trigger workflow [Release Dev](https://github.com/soulmachines/sm-web-component/actions/workflows/release-dev.yml). `examples/soulmachines.js` file will be uploaded to `https://static.soulmachines.com/webcomponent-dev.js`

#### Stable Release

To release a stable version to CDN, manually trigger workflow [Release Stable](https://github.com/soulmachines/sm-web-component/actions/workflows/release-stable.yml). This workflow runs semantic release, publishes stable release version to CDN and update the latest script `https://static.soulmachines.com/soulmachines-latest.js`

The table below shows which commit message gets you which release type when `semantic-release` runs:

| Commit message                                                                                                                                                                                   | Release type     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release    |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | Breaking Release |

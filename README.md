# Soul Machines Video Web Component

The Video web component allows integration of a Digital Person into any website.

Please refer to the [Usage Guide](./docs/USAGE.md) and [API Documentation](./docs/API-DOCS.md) for implementation guidance.

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

### Building the output soulmachines.js library

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

2. Create a PR to merge from the release branch to `master` , it will trigger the `semantic-release` step and the `release` job in CI
3. Merge to `master` to get the latest version and changelog

The table below shows which commit message gets you which release type when `semantic-release` runs:

| Commit message                                                                                                                                                                                   | Release type     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release    |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | Breaking Release |

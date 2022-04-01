# Web Component

The web components allow for integration of a Digital Person into any website.

## Tools

- [Preact](https://preactjs.com/) for composing the UI
- [Vite](https://vitejs.dev/) for bundling the code

## Commands

### Local development

- `npm run start` to run the dev server with live reload
- `npm run build` to compile the scripts
- `npm run preview` to start a server and serve the dist files

### Linting

- `npm run prettier` to verify files are formatted
- `npm run prettier:fix` to auto format files

## Registering web components

Web components are registered using the [preactement lib](https://github.com/jahilldev/component-elements). Multiple components can be registered a single file but it will bundled together into a single file. If you would like to have different javascript bundles for different web components then create individual files. You'll also need to inform the bundle Vite about these files. They are listed under the input key in `vite.config.ts`.

# Web Component

The web components allow for integration of a Digital Person into any website.

## Tools

- [Preact](https://preactjs.com/) for composing the UI
- [Vite](https://vitejs.dev/) for bundling the code
- [Eslint](https://eslint.org/) for finding and fixing code issues
- [Prettier](https://prettier.io/) for code formatting
- [Storybook](https://storybook.js.org/) for building and previewing components
- [Jest](https://jestjs.io/) for the test runner
- [Testing Tools](https://testing-library.com/) for testing utils
- [Plop](https://plopjs.com/) for generating files and folders

## Getting started

Copy the `.env.template` file and rename it to `.env`.

### Connecting via an API Key

When working locally you'll need an api key to connect to a digital person.

#### Creating an API Key

**Prerequisites**

- You have created a project in DDNA Studio dev.
- You are connected to the full vpn

**Steps**

- Visit the (create api key page)[https://studio-dev.soulmachines.cloud/api-keys/create] in studio
- Give your key a memorable name, eg: Web Component Local Development
- Pick "web" for the scope
- Select your project
- Tick "I'm developing locally"
- Enter your IP address and subnet mask. Make sure you are on the VPN when doing this.

  - Find your IP address by running this command in your terminal `curl ifconfig.me && echo`
  - Most likely your subnet mask is 32

- Enter the domains that the api keys are allowed to be used.
  - To cover our local html files and storybook, enter `http://localhost:6006` and `http://localhost:3000`
- Select an expiry
- Publish
- Copy your api key and open your `.env` file. Paste your api key as the value of `VITE__PROJECT_API_KEY=`

### Connecting via a Token Server

To connect to a custom token server add the full endpoint to `VITE_TOKEN_SERVER=` in your `.dotenv` file.

## Commands

### Local development

- `npm run start` to run the dev server with live reload
- `npm run preview` to start a server and serve the snippet code
- `npm run storybook` to start storybook
- `npm run build` to compile the scripts
- `npm run build-snippet` to compile snippet script

### Linting

- `npm run lint` to run eslint over the files
- `npm run prettier` to verify files are formatted
- `npm run prettier:fix` to auto format files

### Unit testing

- `npm run test` to run the test suite in watch mode
- `npm run test:ci` to run the tests just once

**Helpful links**

- (Common mistakes)[https://kentcdodds.com/blog/common-mistakes-with-react-testing-library]
- (Learning)[https://testing-library.com/docs/learning]

## Styling

(Tailwind)[https://tailwindcss.com/] is setup and used to style the web components. All tailwind styles are under a `sm-` prefix, to avoid naming collisions.

It compiles multiple css files for each entry point. This is so that someone can use the `sm-video` component, without inherting the `sm-widget` styles.

### Local development

Setup your (editor)[https://tailwindcss.com/docs/editor-setup] with the Tailwind extension for autocompletion. For VSCode the extension is called Tailwind CSS IntelliSensePreview.

## Generating Components

Run `npm run generate` in your terminal and it will ask you what you'd like the component to be called. Enter the name and it will scaffold the files in the component directory.

## Registering web components

Web components are registered using the [preactement lib](https://github.com/jahilldev/component-elements). Multiple components can be registered a single file but it will bundled together into a single file. If you would like to have different javascript bundles for different web components then create individual files. You'll also need to inform the bundle Vite about these files. They are listed under the input key in `vite.config.ts`.

## Working with the snippet

### How the snippet works

This project creates a bundle for each web component. The javascript bundles can be used directly but require a few of additional steps. The user needs to add the html element to their webpage, add the script/css files and pass through their API key.

To lower the barrier to entry we have created a snippet. The snippet automates the above steps. Upon inserting the script to the page, it will:

- Insert the web component javascript bundle and the stylesheet into the head of the html page
- Insert the web component html element (with <sm-widget> tag) into the page
- Convert options into attributes on the web component html element. These objects can come from a global variable called `window.smConfig` or from data attributes on the script tag.

An example of data attributes.

```
<script
  src="snippet.min.js"
  data-sm-api-key="YOUR_API_KEY"
></script>
```

An example of global variable. This is useful if the user cannot add a <script /> tag to their website and needs to paste in the script.

```
window.smConfig = {
  smApiKey: 'YOUR_API_KEY',
};
<script src="snippet.min.js"></script>
```

The supported config options are:

- `smApiKey` the api key used to access the digital person.
- `smTokenServer` the url for the token server.
- `smProfilePicture` define a custom digital person profile picture.
- `smGreeting` define a custom greeting

### How it is built

1. `npm run build` is run to generate the assets. As part of this process it generates a file called `manifest.json`. This contains the asset names and paths that were generated.
2. There is a file called `build-snippet.js`. This:
   - reads the `manifest.json` file.
   - calls the template generation plugin we are using. The template is called `snippet.js.template`.
   - it takes the template, populating the filenames using the data from the manifest file. It outputs `snippet.js` into the `dist` folder.
3. You run the above file by typing `npm run build-snippet`
4. After the file is built, UglifyJS is run to minify it and the minified version is outputted into the dist directory as snippet.min.js.

### Running the snippet locally

Run `npm run preview`. This starts a local server, serving the `dist` folder. It also copies across the html files in `examples/snippet` to the `dist` folder. This is so that the html files can reference the built snippet scripts.

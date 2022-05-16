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
- `npm run build` to compile the scripts
- `npm run preview` to start a server and serve the dist files
- `npm run storybook` to start storybook

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

(Tailwind)[https://tailwindcss.com/] is setup and used to style the web components.

It compiles multiple css files for each entry point. This is so that someone can use the `sm-video` component, without inherting the `sm-widget` styles.

### Local development

Setup your (editor)[https://tailwindcss.com/docs/editor-setup] with the Tailwind extension for autocompletion. For VSCode the extension is called Tailwind CSS IntelliSensePreview.

## Generating Components

Run `npm run generate` in your terminal and it will ask you what you'd like the component to be called. Enter the name and it will scaffold the files in the component directory.

## Registering web components

Web components are registered using the [preactement lib](https://github.com/jahilldev/component-elements). Multiple components can be registered a single file but it will bundled together into a single file. If you would like to have different javascript bundles for different web components then create individual files. You'll also need to inform the bundle Vite about these files. They are listed under the input key in `vite.config.ts`.

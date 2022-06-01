// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Launch the scene. Verify that it shows the loader and then the video
       * @example cy.launchScene()
       */
      launchScene(): Chainable<null>;

      /**
       * Disconnect the scene
       * @example cy.disconnectScene()
       */
      disconnectScene(): Chainable<null>;

      /**
       * Mute the persona
       * @example cy.muteScene()
       */
      muteScene(): Chainable<null>;

      /**
       * Unmute the persona
       * @example cy.unmuteScene()
       */
      unmuteScene(): Chainable<null>;

      /**
       * Turn on the users camera
       * @example cy.cameraOn()
       */
      cameraOn(): Chainable<null>;

      /**
       * Turn off the users camera
       * @example cy.cameraOff()
       */
      cameraOff(): Chainable<null>;

      /**
       * Close the greeting
       * @example cy.closeGreeting()
       */
      closeGreeting(): Chainable<null>;
    }
  }
}

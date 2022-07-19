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

import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Launch the scene. Verify that it shows the loader and then the video
       * It waits a longer peroid of time as the first connection takes time
       * @example cy.launchScene()
       */
      launchScene(): Chainable<null>;

      /**
       * Reload page and wait to autoconnect to load the scene. Verify that it shows the loader and then the video
       * It waits a longer peroid of time as the first connection takes time
       * @example cy.reloadPageAndWaitUntilConnected()
       */
      reloadPageAndWaitUntilConnected(): Chainable<null>;

      /**
       * Disconnect the scene
       * @example cy.disconnectScene()
       */
      disconnectScene(): Chainable<null>;

      /**
       * Disable the users microphone
       * @example cy.disableMicrophone()
       */
      disableMicrophone(): Chainable<null>;

      /**
       * Enable the users microphone
       * @example cy.enableMicrophone()
       */
      enableMicrophone(): Chainable<null>;

      /**
       * Enable the users camera
       * @example cy.enableCamera()
       */
      enableCamera(): Chainable<null>;

      /**
       * Disable the users camera
       * @example cy.disableCamera()
       */
      disableCamera(): Chainable<null>;

      /**
       * Close the greeting
       * @example cy.closeGreeting()
       */
      closeGreeting(): Chainable<null>;

      /**
       * Send a message to the DP
       * @example cy.sendTextMessage(message)
       */
      sendTextMessage(message: string): Chainable<null>;
    }
  }
}

(function () {
  // add the function for creating the element
  window['sm'] = {
    configure: (options) => {
      const el = document.createElement('sm-video');

      /**
       * add support here for all JS-based config options
       */
      if (options.tokenServer) {
        el.setAttribute('token-server', options.tokenServer);
      }

      if (options.apiKey) {
        el.setAttribute('api-key', options.apiKey);
      }

      if (options.autoconnect) {
        el.setAttribute('autoconnect', options.autoconnect);
      }

      document.body.appendChild(el);
    },
  };
})();

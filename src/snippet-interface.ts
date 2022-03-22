(function () {
  /**
   * On every page where the web component is imported,
   * a property `sm` will be attached to the global `window`
   * object, so that the web page inline JS can call `window.sm()`
   * to configure the web component widget.
   */
  window['sm'] = {
    configure: (options) => {
      const el = document.createElement('sm-widget');

      /**
       * add support here for all JS-based config options,
       * assigning them to the web component's HTML attributes
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

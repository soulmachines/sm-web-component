(function () {
  // add the function for creating the element
  window['sm'] = {
    configure: (options) => {
      const el = document.createElement('sm-video');

      // add support here for all JS-based config options
      if (options.tokenServer) {
        el.setAttribute('token-server', options.tokenServer);
      }

      document.body.appendChild(el);
    },
  };
})();

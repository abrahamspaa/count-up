'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
const resolve = require('rollup-plugin-node-resolve');

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    rollup: {
      plugins: [resolve()]
    }
  });

  return app.toTree();
};

module.exports = {
  name: 'universe',
  // Dynamic Module Federation allows the server to declare the remotes so this can be omitted
  remotes: ['planet-one', 'planet-two'],

  // Here we would list the shared modules to save loading them twice,
  // We may also list shared services we want as app wide singletons
  // Shared modules/services are loaded once by the host application and shared with the remotes
  // Something like...
  // shared: ['@angular/core', '@angular/common']
};

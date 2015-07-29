Package.describe({
  version: '0.4.0-2.10.6',
  name: 'chaser:moment-timezone',
  summary: 'Moment Timezone for Meteor',
  documentation: null
});

Package.onUse(function(api) {
  api.addFiles([
    'node_modules/moment-timezone/node_modules/moment/moment.js',
    'node_modules/moment-timezone/node_modules/moment/locale/en-gb.js',
    'node_modules/moment-timezone/node_modules/moment/locale/en-au.js',
    'node_modules/moment-timezone/node_modules/moment/locale/en-ca.js',
    'node_modules/moment-timezone/moment-timezone.js',
    'chaser:moment-timezone.js',
    'tzdata.js'
  ]);
  api.export('moment');
});

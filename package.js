Package.describe({
  version: '0.5.0-2015g-2.11.1',
  name: 'chaser:moment-timezone',
  summary: 'Moment Timezone for Meteor',
  documentation: null
});

Package.onUse(function(api) {
  api.addFiles([
    'node_modules/moment/moment.js',
    'node_modules/moment/locale/en-gb.js',
    'node_modules/moment/locale/en-au.js',
    'node_modules/moment/locale/en-ca.js',
    'node_modules/moment-timezone/moment-timezone.js',
    'chaser:moment-timezone.js',
    'tzdata.js'
  ]);
  api.export('moment');
});

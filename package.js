Package.describe({
  version: '0.5.2-2016b-2.12.0',
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
    'node_modules/moment-timezone/builds/moment-timezone-with-data-2010-2020.js',
    'chaser:moment-timezone.js'
  ]);
  api.export('moment');
});

process.chdir(__dirname);

var http = require('http');
var express = require('express');
var exphbs  = require('express-handlebars');

function reactHandler(request, response) {
  if (module.parent || process.env.NODE_ENV === 'production') {
    response.render('production', { layout: 'react' });
  } else {
    response.render('development', { layout: 'react' });
  }
}

function selected(option, value) {
  if (option === value) {
    return ' selected';
  }
  return '';
}

var app;

try {
  console.info('Starting server.');

  // Create the app and set up the default stack.
  app = express();

  // Set up handlebars
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: {
      selected: selected
    }
  }));
  app.set('views', __dirname + '/views');
  app.set('view engine', '.hbs');

  // Static consents
  app.use('/static', express.static('static'));

  // Use handlebars to render react contents
  app.get('/', reactHandler);

  if (module.parent) {
    module.exports = http.createServer(app);
    console.info('Server is ready.');
  } else {
    // Static routes for development mode
    app.use('/web', express.static('web'));
    app.use('/jspm_packages', express.static('jspm_packages'));
    app.use('/jspm.browser.js', express.static('jspm.browser.js'));
    app.use('/jspm.config.js', express.static('jspm.config.js'));

    app.listen(8080, function () {
      console.info('Dashboard listening on port 8080!');
    });
  }

} catch (error) {
  console.error('Failed to start the server: ' + error.stack);
}

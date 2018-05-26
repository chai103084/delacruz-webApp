var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
client
    .init()
    .url('https://delacruz-webapp.herokuapp.com')
    //setValue('#search_form_input_homepage', 'WebdriverIO')
    //.click('#search_button_homepage')
    .getText().then(function (text){
         console.log(text);
    }
    //.getTitle().then(function(title) {
        //console.log('Title is: ' + title);
        // outputs:
        // "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
    .end();
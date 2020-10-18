var fetch = require('node-fetch');
var btoa = require('btoa');

module.exports = (req, res) => {
    fetch('https://api.twilio.com/2010-04-01/Accounts/' + req.params.aid + '/Messages.json', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(req.params.aid)
        }
    });
}

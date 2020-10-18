var fetch = require('node-fetch');
var btoa = require('btoa');

module.exports = (req, res) => {
  try {
    fetch('https://api.twilio.com/2010-04-01/Accounts/' + process.env.ACCOUNT_ID + '/Messages.json', {
      method: 'POST',
      body: {
        'Body': req.params.body,
        'From': process.env.PHONE_NUMBER,
        'To': req.params.to
      },
      headers: {
        'Authorization': 'Basic ' + btoa(`${process.env.ACCOUNT_ID}:${process.env.AUTH_KEY}`)
      }
    }).then(data => res.send(data.data)).catch(err => res.send(err));
  } catch (err) {
    res.send(err);
  }
}

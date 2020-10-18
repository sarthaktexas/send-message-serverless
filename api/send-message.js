var fetch = require('node-fetch');
var btoa = require('btoa');

module.exports = (req, res) => {
    if (req.query.body && req.query.to) {
        try {
            fetch('https://api.twilio.com/2010-04-01/Accounts/' + process.env.ACCOUNT_ID + '/Messages.json', {
                method: 'POST',
                body: {
                    'Body': req.query.body,
                    'From': process.env.PHONE_NUMBER,
                    'To': req.query.to
                },
                headers: {
                    'Authorization': 'Basic ' + btoa(`${process.env.ACCOUNT_ID}:${process.env.AUTH_KEY}`)
                }
            }).then(data => res.send(data.data)).catch(err => res.send(err));
        } catch (err) {
            res.send(err);
        }
    } else {
        res.send("Yeehaw! You're missing a parameter!");
    }
}

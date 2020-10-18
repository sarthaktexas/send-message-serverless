const client = require('twilio')(process.env.ACCOUNT_ID, process.env.AUTH_KEY);

module.exports = (req, res) => {
    if (req.query.body && req.query.to) {
        try {
            client.messages
                .create({
                    body: decodeURIComponent(req.query.body),
                    from: process.env.PHONE_NUMBER,
                    to: decodeURIComponent(req.query.to),
                })
                
                .then((message) => {
                    console.log(message);
                    res.json({
                        "api_version": message.api_version,
                        "body": message.body,
                        "date_created": message.date_created,
                        "date_sent": message.date_sent,
                        "date_updated": message.date_updated,
                        "direction": message.direction,
                        "error_code": message.error_code,
                        "error_message": message.error_message,
                        "num_media": message.num_media,
                        "num_segments": message.num_segments,
                        "price": message.price,
                        "price_unit": message.price_unit,
                        "status": message.status,
                        "to": message.to
                    });
                });
        } catch (err) {
            res.send(err);
        }
    } else {
        res.send("Yeehaw! You're missing a parameter!");
    }
}

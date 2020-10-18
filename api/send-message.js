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
                .then((res) => {
                    console.log(message);
                    res.json({
                        "api_version": res.api_version,
                        "body": res.body,
                        "date_created": res.date_created,
                        "date_sent": res.date_sent,
                        "date_updated": res.date_updated,
                        "direction": res.direction,
                        "error_code": res.error_code,
                        "error_message": res.error_message,
                        "num_media": res.num_media,
                        "num_segments": res.num_segments,
                        "price": res.price,
                        "price_unit": res.price_unit,
                        "status": res.status,
                        "to": res.to
                    });
                });
        } catch (err) {
            res.send(err);
        }
    } else {
        res.send("Yeehaw! You're missing a parameter!");
    }
}

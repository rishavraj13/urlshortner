const shortid  = require('shortid');
const Url = require('../models/url');


async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body.url) {
        return res.status(400).json({error: 'URL is required'});
    }

    const shortID = shortid();
    const newUrl = new Url({
        shortId: shortID,
        redirectUrl: body.url,
        VisitHistory: []
    });

    await newUrl.save();
    
    return res.json({
       Id: shortID,
    });




    

}

async function handleRedirectUrl(req, res) {
    const shortId = req.params.shortId;
    const entry = await Url.findOne({shortId: shortId});
    if(!entry) {
        return res.status(404).json({error: 'URL not found'});
    }
    entry.totalClicks += 1;
    entry.VisitHistory.push({timestamp: Date.now()});
    await entry.save();
    res.redirect(entry.redirectUrl);
    // return res.json({
    //     originalUrl: entry.redirectUrl,
    //     totalClicks: entry.totalClicks,
    //     VisitHistory: entry.VisitHistory
    // });
}
module.exports = {
    handleGenerateNewShortURL,
    handleRedirectUrl,

};

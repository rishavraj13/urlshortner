const express = require('express');
const router = express.Router();
const {handleGenerateNewShortURL, handleRedirectUrl} = require('../controllers/url');

router.post('/', handleGenerateNewShortURL);    

router.get('/:shortId', handleRedirectUrl); // Redirect to the original URL


module.exports = router;


'use strict';

var parseDomain = require('parse-domain');
var redirectTracer = require('resolve-redirect');

/*! amazon-asin by Nitzan Weidenfeld
*
* @author Nitzan Weidenfeld
* @url http://www.devsbedevin.com/
* @license ISC
**/

function isEngAlphaNumeric(str) {
    return /^[a-z0-9]+$/i.test(str);
}

function parseUrlTld(url) {
    try {
        if (url) {
            var parsed = parseDomain(url);
            if (parsed) {
                return parsed.tld;
            }
        }
    }
    catch (e) {
    }

    return undefined;
}


function encapsulateReturn(id, url) {
    return {
        ASIN: id,
        url: url,
        urlTld: parseUrlTld(url)
    }
}

var asinParser = {

    syncParseAsin: function (urlOrPlainId) {
        if (typeof urlOrPlainId == 'string') {
        }
        if ((urlOrPlainId.length === 10 // ASIN
                || urlOrPlainId.length === 13 // ISBN
            ) && isEngAlphaNumeric(urlOrPlainId)) {

            return encapsulateReturn(urlOrPlainId);
        }

        var parsed = urlOrPlainId.match(/https?:\/\/(www\.)?(.*)amazon\.([a-z\.]{2,6})(\/d\/(.*)|\/(.*)\/?(?:dp|o|gp|-)\/)(aw\/d\/|product\/)?(B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(?:X|[0-9]))/i);
       
        if (parsed) {
            return encapsulateReturn(parsed.splice(-1)[0], urlOrPlainId);
        }

        return encapsulateReturn();
    },

    asyncParseAsin: function (urlOrPlainId) {
        var isPermaLink = /^https?:\/\/([a-zA-Z\d-]+\.){0,}amzn\.to\//i.test(urlOrPlainId);
        if (isPermaLink) {
            return redirectTracer(urlOrPlainId).then(function (resolvedUrl) {
                return asinParser.syncParseAsin(resolvedUrl);
            });
        }
        else {
            return new Promise(function (resolve) {
                resolve(asinParser.syncParseAsin(urlOrPlainId));
            });
        }
    }
}

module.exports = asinParser;

'use strict';

var parseDomain = require('parse-domain');

/*! amazon-asin by Nitzan Weidenfeld
*
* @author Nitzan Weidenfeld
* @url http://www.devsbedevin.com/
* @license ISC
**/

function isEngAlphaNumeric( str ) {
    return /^[a-z0-9]+$/i.test( str );
}

function parseUrlTld( url )
{
    try {
        if (url) {
            var parsed = parseDomain(url);
            if (parsed) {
                return parsed.tld;
            }
        }
    }
    catch (e){}

    return undefined;
}



function encapsulateReturn( id, url )
{
    return {
        ASIN : id,
        url: url,
        urlTld: parseUrlTld(url)
    }
}

var asinParser = {

    syncParseAsin: function ( urlOrPlainId ) {
        if (typeof urlOrPlainId == 'string') {
        }
        if ((urlOrPlainId.length === 10 // ASIN
                || urlOrPlainId.length === 13 // ISBN
            ) && isEngAlphaNumeric(urlOrPlainId)) {

            return encapsulateReturn(urlOrPlainId);
        }

        var parsed = urlOrPlainId.match(/https?:\/\/(www\.)?(.*)amazon\.([a-z\.]{2,5})\/(.*)\/?(?:dp|o|gp|-)\/(aw\/d\/|product\/)?(B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(?:X|[0-9]))/);
        if ( parsed ) {
            return encapsulateReturn( parsed.splice(-1)[0], urlOrPlainId );
        }

        return encapsulateReturn();
    }


}

module.exports = asinParser;
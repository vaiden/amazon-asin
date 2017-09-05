var amazonAsin = require('./index');
var assert = require("assert");

describe('amazonAsin', function () {

    describe('Testing sync', function () {
        it('should return ASIN, rul, tld', function () {

            var asin = amazonAsin.syncParseAsin("https://www.amazon.com/gp/product/B01IG0E1F0/ref=s9u_nwrsa_gw_i3?ie=UTF8&fpl=fresh&pd_rd_i=B01IG0E1F0&pd_rd_r=HX877ZSJ45VZ39AN59A1&pd_rd_w=6aVbp&pd_rd_wg=Yyiuk&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=K1JQVYXFAG8F4WKVT3N0&pf_rd_t=36701&pf_rd_p=b15e70a0-40cd-4167-b336-ff44ea910cf2&pf_rd_i=desktop");
            assert.deepEqual(asin, {
                ASIN: "B01IG0E1F0",
                url: "https://www.amazon.com/gp/product/B01IG0E1F0/ref=s9u_nwrsa_gw_i3?ie=UTF8&fpl=fresh&pd_rd_i=B01IG0E1F0&pd_rd_r=HX877ZSJ45VZ39AN59A1&pd_rd_w=6aVbp&pd_rd_wg=Yyiuk&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=K1JQVYXFAG8F4WKVT3N0&pf_rd_t=36701&pf_rd_p=b15e70a0-40cd-4167-b336-ff44ea910cf2&pf_rd_i=desktop",
                urlTld: "com"
            });
        });

        it('should return ASIN', function () {

            var asin = amazonAsin.syncParseAsin("B01IG0E1F0");
            assert.deepEqual(asin, {
                ASIN: "B01IG0E1F0",
                url: undefined,
                urlTld: undefined
            })
        });

        it('should return undefined', function () {
            var asin = amazonAsin.syncParseAsin("https://www.google.com");
            assert.deepEqual(asin, {
                ASIN: undefined,
                url: undefined,
                urlTld: undefined
            });
        });
    });
});
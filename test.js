var amazonAsin = require('./index');
var assert = require('assert');

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

        it('should return ASIN, rul, tld', function () {
            var asin = amazonAsin.syncParseAsin("https://www.amazon.co.uk/d/Hair-Gel/Eco-Styler-Olive-Oil-Styling/B003E7UNE4");
            assert.deepEqual(asin, {
                ASIN: "B003E7UNE4",
                url: "https://www.amazon.co.uk/d/Hair-Gel/Eco-Styler-Olive-Oil-Styling/B003E7UNE4",
                urlTld: "co.uk"
            });
        });
        
        it('should return ASIN, rul, tld', function () {
            var asin = amazonAsin.syncParseAsin("https://www.amazon.com.mx/Ale-Zavala-Nacimiento-Adorno-Navide%C3%B1o/dp/B07GBDTV2Y");
            assert.deepEqual(asin, {
                ASIN: "B07GBDTV2Y",
                url: "https://www.amazon.com.mx/Ale-Zavala-Nacimiento-Adorno-Navide%C3%B1o/dp/B07GBDTV2Y",
                urlTld: "com.mx"
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

    describe('Testing async', function () {
        it('should return ASIN, rul, tld', function () {
            return amazonAsin.asyncParseAsin("http://amzn.to/2eEPcFk").then(function (result) {
                    assert.deepEqual(result, {
                        ASIN: 'B00MH78O0M',
                        url: 'https://www.amazon.com/gp/product/B00MH78O0M/ref=as_li_ss_tl?ie=UTF8&fpl=fresh&pd_rd_i=B00MH78O0M&pd_rd_r=Q6AGR9A4A9THVY19VQ00&pd_rd_w=BQhKK&pd_rd_wg=GythE&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=W4JDGRRE10YC5P1762MT&pf_rd_t=36701&pf_rd_p=e8de777f-727a-4395-809e-49e84c65e636&pf_rd_i=desktop&linkCode=sl1&tag=kaching05-20&linkId=fb58756aff4e5b2fc514af0b120bbc52',
                        urlTld: 'com'
                    }
                );
            });

        });

        it('should return ASIN', function () {
            return amazonAsin.asyncParseAsin('B00MH78O0M').then(function (result) {
                assert.deepEqual(result, {
                        ASIN: 'B00MH78O0M',
                        url: undefined,
                        urlTld: undefined
                    }
                );
            });
        });

        it('should return undefined', function () {
            return amazonAsin.asyncParseAsin('https://www.google.co.il').then(function (result) {
                assert.deepEqual(result, {
                        ASIN: undefined,
                        url: undefined,
                        urlTld: undefined
                    }
                );
            });
        });
    });

});

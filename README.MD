# Amazon ASIN

[![NPM version](https://img.shields.io/npm/v/amazon-asin.svg?style=flat)](https://npmjs.org/package/amazon-asin) [![NPM downloads](https://img.shields.io/npm/dm/amazon-asin.svg?style=flat)](https://npmjs.org/package/amazon-asin) [![GitHub issues](https://img.shields.io/github/issues/vaiden/amazon-asin.svg)](https://github.com/vaiden/amazon-asin/issues)

> An efficient NodeJS module to extract Amazon ASIN/ISBN from links. Supports Amazon shortened permalinks

## Installation

```
npm install amazon-asin --save
```
## Usage

#### Sync
```js
var amazonAsin = require('amazon-asin');

amazonAsin.syncParseAsin("https://www.amazon.com/gp/product/B01IG0E1F0/ref=s9u_nwrsa_gw_i3?ie=UTF8&fpl=fresh&pd_rd_i=B01IG0E1F0&pd_rd_r=HX877ZSJ45VZ39AN59A1&pd_rd_w=6aVbp&pd_rd_wg=Yyiuk&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=K1JQVYXFAG8F4WKVT3N0&pf_rd_t=36701&pf_rd_p=b15e70a0-40cd-4167-b336-ff44ea910cf2&pf_rd_i=desktop");
```
Returns:
```javascript
{
    ASIN: "B01IG0E1F0",
    url: "https://www.amazon.com/gp/product/B01IG0E1F0/ref=s9u_nwrsa_gw_i3?ie=UTF8&fpl=fresh&pd_rd_i=B01IG0E1F0&pd_rd_r=HX877ZSJ45VZ39AN59A1&pd_rd_w=6aVbp&pd_rd_wg=Yyiuk&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=K1JQVYXFAG8F4WKVT3N0&pf_rd_t=36701&pf_rd_p=b15e70a0-40cd-4167-b336-ff44ea910cf2&pf_rd_i=desktop",
    urlTld: "com"
}
```

#### Async
```js
var amazonAsin = require('amazon-asin');

amazonAsin.asyncParseAsin("http://amzn.to/2eEPcFk");
```
Returns a *Promise* that would resolve to:
```javascript
{
    ASIN: 'B00MH78O0M',
    url: 'https://www.amazon.com/gp/product/B00MH78O0M/ref=as_li_ss_tl?ie=UTF8&fpl=fresh&pd_rd_i=B00MH78O0M&pd_rd_r=Q6AGR9A4A9THVY19VQ00&pd_rd_w=BQhKK&pd_rd_wg=GythE&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=W4JDGRRE10YC5P1762MT&pf_rd_t=36701&pf_rd_p=e8de777f-727a-4395-809e-49e84c65e636&pf_rd_i=desktop&linkCode=sl1&tag=kaching05-20&linkId=fb58756aff4e5b2fc514af0b120bbc52',
    urlTld: 'com'
}
```

Run the example [->](https://runkit.com/embed/t5e0u7wq98gi)

## The fine print

* For parsing permalinks please use the async method, since permalinks are basically HTTP 301 redirects.
* You may also pass raw ASIN/ISBN numbers as arguments.
* No exception is thrown on an invalid argument. The resulting object would simply contain *undefined*s.
* Heavily influenced by [amazon-helpers](https://www.npmjs.com/package/amazon-helpers).

## License

ISC
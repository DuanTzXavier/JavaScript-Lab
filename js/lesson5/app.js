var cheerio = require('cheerio');
var superagent = require('superagent');
var async = require('async');

// fetchUrl('http://baidu.com', function (err, content) {
//     //TODO something with content
// });

var concurencyCount = 0;
var fetchUrl = function (url, callback) {
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurencyCount ++;
    console.log('现在的并发数是', concurencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
    setTimeout(function () {
        concurencyCount --;
        callback(null, url + ' html content');
    }, delay);
};

var urls = [];
for (var i = 0;i < 30;i++) {
    urls.push('http://datasource_' + i);
} 

async.mapLimit(urls, 5, function (url, callback) {
    fetchUrl(url, callback);
}, function(err, result) {
    console.log('final:');
    console.log(result);
});
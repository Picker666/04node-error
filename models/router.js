var optFile = require ('./optFile');

var readAndOut = function (path, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8;'});
    optFile.readFile(path, function (data) {
        response.write(data);
        response.end('');
    });
}

module.exports = {
    login: function (response) {
        readAndOut('./models/login.html', response);
    },
    register: function (response) {
        readAndOut('./models/register.html', response);
    },
    writeFile: function (response) {
        var data = 'this is the content writeting on';
        optFile.writeFile('./file/writeFile.txt', data, function (content) {
            response.write(content);
            response.end('');
        });
    },
    showImg: function (response) {
        response.writeHead(200, {'Content-Type': 'image/jpeg'});
        optFile.readImg('./imgs/baidu.png', response);
    }
};
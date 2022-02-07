// const ApiImportUser = require('./apiImportUser.js')

// const {results} = require('./data-fake');
function ApiSendData(req, res) {
    res.send({1: 'handleTest'});
    res.status(200);
}


function devServer() {
  return {
    port: 8080,
    allowedHosts: [
    'zapiens.local',
    ],
  }
}

module.exports = devServer;
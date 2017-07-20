var grpc = require('grpc');

var services = require('../test_grpc_pb');
var messages = require('../test_pb');

const addr = 'localhost';
const port = '50051';

function main() {
  var client = new services.TestClient(addr + ':' + port, grpc.credentials.createInsecure());
  var call = client.streamFunc();
  call.on('data', function (res) {
    console.log('response : ' + res.getResid());
    console.log('restoreq : ' + res.getRestoreq());
    console.log('resbody : ' + res.getResbody());
  });

  call.on('end', function () {
    console.log('received response end. //');
  });

  var num = 0;
  // param : num, id, body, id, body
  if (process.argv.length >= 3) {
    num = process.argv[2];
  }
  for (var i = 0; i < num; i++) {
    var req = new messages.Req();
    req.setReqid(process.argv[3 + i * 2]);
    req.setReqbody(process.argv[4 + i * 2]);
    call.write(req);
  }
  call.end();

}

main();

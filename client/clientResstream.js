var grpc = require('grpc');

var services = require('../test_grpc_pb');
var messages = require('../test_pb');

const addr = 'localhost';
const port = '50051';

function main() {
  var client = new services.TestClient(addr + ':' + port, grpc.credentials.createInsecure());
  var req = new messages.Req();
  var reqid;
  var reqbody;
  if (process.argv.length >= 4) {
    reqid = process.argv[2];
    reqbody = process.argv[3];
  } else if (process.argv.length >= 3) {
    reqbody = 'body';
    reqid = process.argv[2];
  } else {
    reqid = 'id';
    reqbody = 'body';
  }

  req.setReqid(reqid);
  req.setReqbody(reqbody);

  var call = client.resStream(req);
  call.on('data', function (res) {
    console.log('response');
    console.log(res.getResid());
    console.log(res.getRestoreq());
    console.log(res.getResbody());
  });

  call.on('end', function () {
    console.log('response stream end.');
  });
}

main();

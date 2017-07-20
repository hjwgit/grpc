var grpc = require('grpc');
var _  = require('lodash');

var services = require('../test_grpc_pb');
var messages = require('../test_pb');

const addr = 'localhost';
const port = '50051';

const methodCover = {
  testFunc: funcA,
  resStream: ResStream,
  reqStream: ReqStream,
  streamFunc: StreamFunc,
};

function funcA(call, callback) {
  console.log('received request');
  console.log(call.request.getReqid());
  var res = new messages.Res();
  res.setResid('resid : 1');
  res.setRestoreq('restoreq : ' + call.request.getReqid());
  res.setResbody('this is body');
  callback(null, res);
}

function ResStream(call) {
  var ss = [];
  var num = call.request.getReqbody();

  for (var i = 0; i < parseInt(num); i++) {
    var res = new messages.Res();
    res.setResid('Id : ' + i);
    res.setRestoreq('restoreq:' + call.request.getReqid());
    res.setResbody('thisisbody');
    call.write(res);
  }

  call.end();
}

function ReqStream(call, callback) {
  var res = new messages.Res();
  var count = 0;
  var reqid = [];
  call.on('data', function (req) {
    count += parseInt(req.getReqbody());
    reqid.push(req.getReqid());
  });
  call.on('end', function () {
    console.log('received request stream end.');
    res.setResid('1');
    var idstr = '';
    for (var item in reqid) {
      idstr += reqid[item] + '|';
    }
    res.setRestoreq('from req :' + idstr);
    res.setResbody('body : ' + count);
    callback(null, res);
  });
}

function StreamFunc(call) {
  var resId = 0;
  var sum = 0;
  var count = 0;
  var reqid = [];

  /* end res stream when req stream end.  
  call.on('data', function (req) {
    console.log('received request from : ' + req.getReqid());
    var res = new messages.Res();
    res.setResid(req.getReqid());
    res.setRestoreq('restoreq:' + req.getReqid());
    res.setResbody('thisisresbody');
    call.write(res);
  });

  call.on('end', function () {
    call.end();
  });
  */

  call.on('data', function (req) {
    console.log('received request');
    sum++;
    count += parseInt(req.getReqbody());
    reqid.push(req.getReqid());
    if (sum === 2) {
      resId++;
      var res = new messages.Res();
      res.setResid('resid:' + resId);
      var idstr = '';
      for (var item in reqid) {
        idstr += reqid[item] + ' | ';
      }
      res.setRestoreq('from req :' + idstr);
      res.setResbody('body : ' + count);
      sum = 0;
      count = 0;
      call.write(res);
    }
  });
  call.on('end', function () {
    call.end();
  });

}

function main() {
  var server = new grpc.Server();
  server.addService(services.TestService, methodCover);
  server.bind(addr + ':' + port, grpc.ServerCredentials.createInsecure());
  server.start();
}

main();

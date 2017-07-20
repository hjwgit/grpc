// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var test_pb = require('./test_pb.js');

function serialize_test_Req(arg) {
  if (!(arg instanceof test_pb.Req)) {
    throw new Error('Expected argument of type test.Req');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_test_Req(buffer_arg) {
  return test_pb.Req.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_Res(arg) {
  if (!(arg instanceof test_pb.Res)) {
    throw new Error('Expected argument of type test.Res');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_test_Res(buffer_arg) {
  return test_pb.Res.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestService = exports.TestService = {
  testFunc: {
    path: '/test.Test/TestFunc',
    requestStream: false,
    responseStream: false,
    requestType: test_pb.Req,
    responseType: test_pb.Res,
    requestSerialize: serialize_test_Req,
    requestDeserialize: deserialize_test_Req,
    responseSerialize: serialize_test_Res,
    responseDeserialize: deserialize_test_Res,
  },
  resStream: {
    path: '/test.Test/ResStream',
    requestStream: false,
    responseStream: true,
    requestType: test_pb.Req,
    responseType: test_pb.Res,
    requestSerialize: serialize_test_Req,
    requestDeserialize: deserialize_test_Req,
    responseSerialize: serialize_test_Res,
    responseDeserialize: deserialize_test_Res,
  },
  reqStream: {
    path: '/test.Test/ReqStream',
    requestStream: true,
    responseStream: false,
    requestType: test_pb.Req,
    responseType: test_pb.Res,
    requestSerialize: serialize_test_Req,
    requestDeserialize: deserialize_test_Req,
    responseSerialize: serialize_test_Res,
    responseDeserialize: deserialize_test_Res,
  },
  streamFunc: {
    path: '/test.Test/StreamFunc',
    requestStream: true,
    responseStream: true,
    requestType: test_pb.Req,
    responseType: test_pb.Res,
    requestSerialize: serialize_test_Req,
    requestDeserialize: deserialize_test_Req,
    responseSerialize: serialize_test_Res,
    responseDeserialize: deserialize_test_Res,
  },
};

exports.TestClient = grpc.makeGenericClientConstructor(TestService);

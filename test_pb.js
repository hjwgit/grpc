/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.test.Req', null, global);
goog.exportSymbol('proto.test.Res', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.test.Req = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.test.Req, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.test.Req.displayName = 'proto.test.Req';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.test.Req.prototype.toObject = function(opt_includeInstance) {
  return proto.test.Req.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.test.Req} msg The msg instance to transform.
 * @return {!Object}
 */
proto.test.Req.toObject = function(includeInstance, msg) {
  var f, obj = {
    reqid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reqbody: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.test.Req}
 */
proto.test.Req.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.test.Req;
  return proto.test.Req.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.test.Req} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.test.Req}
 */
proto.test.Req.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReqid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReqbody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.test.Req.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.test.Req.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.test.Req} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.test.Req.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReqid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReqbody();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string reqId = 1;
 * @return {string}
 */
proto.test.Req.prototype.getReqid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.test.Req.prototype.setReqid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string reqBody = 2;
 * @return {string}
 */
proto.test.Req.prototype.getReqbody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.test.Req.prototype.setReqbody = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.test.Res = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.test.Res, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.test.Res.displayName = 'proto.test.Res';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.test.Res.prototype.toObject = function(opt_includeInstance) {
  return proto.test.Res.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.test.Res} msg The msg instance to transform.
 * @return {!Object}
 */
proto.test.Res.toObject = function(includeInstance, msg) {
  var f, obj = {
    resid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    restoreq: jspb.Message.getFieldWithDefault(msg, 2, ""),
    resbody: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.test.Res}
 */
proto.test.Res.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.test.Res;
  return proto.test.Res.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.test.Res} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.test.Res}
 */
proto.test.Res.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRestoreq(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResbody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.test.Res.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.test.Res.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.test.Res} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.test.Res.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRestoreq();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResbody();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string resId = 1;
 * @return {string}
 */
proto.test.Res.prototype.getResid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.test.Res.prototype.setResid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string resToReq = 2;
 * @return {string}
 */
proto.test.Res.prototype.getRestoreq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.test.Res.prototype.setRestoreq = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string resBody = 3;
 * @return {string}
 */
proto.test.Res.prototype.getResbody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.test.Res.prototype.setResbody = function(value) {
  jspb.Message.setField(this, 3, value);
};


goog.object.extend(exports, proto.test);

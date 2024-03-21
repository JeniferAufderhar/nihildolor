// source: flow/entities/transaction.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var flow_entities_event_pb = require('../../flow/entities/event_pb.js');
goog.object.extend(proto, flow_entities_event_pb);
goog.exportSymbol('proto.flow.entities.Transaction', null, global);
goog.exportSymbol('proto.flow.entities.Transaction.ProposalKey', null, global);
goog.exportSymbol('proto.flow.entities.Transaction.Signature', null, global);
goog.exportSymbol('proto.flow.entities.TransactionStatus', null, global);
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
proto.flow.entities.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flow.entities.Transaction.repeatedFields_, null);
};
goog.inherits(proto.flow.entities.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flow.entities.Transaction.displayName = 'proto.flow.entities.Transaction';
}
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
proto.flow.entities.Transaction.ProposalKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flow.entities.Transaction.ProposalKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flow.entities.Transaction.ProposalKey.displayName = 'proto.flow.entities.Transaction.ProposalKey';
}
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
proto.flow.entities.Transaction.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flow.entities.Transaction.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flow.entities.Transaction.Signature.displayName = 'proto.flow.entities.Transaction.Signature';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flow.entities.Transaction.repeatedFields_ = [2,7,8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.flow.entities.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.flow.entities.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flow.entities.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    script: msg.getScript_asB64(),
    argumentsList: msg.getArgumentsList_asB64(),
    referenceBlockId: msg.getReferenceBlockId_asB64(),
    gasLimit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    proposalKey: (f = msg.getProposalKey()) && proto.flow.entities.Transaction.ProposalKey.toObject(includeInstance, f),
    payer: msg.getPayer_asB64(),
    authorizersList: msg.getAuthorizersList_asB64(),
    payloadSignaturesList: jspb.Message.toObjectList(msg.getPayloadSignaturesList(),
    proto.flow.entities.Transaction.Signature.toObject, includeInstance),
    envelopeSignaturesList: jspb.Message.toObjectList(msg.getEnvelopeSignaturesList(),
    proto.flow.entities.Transaction.Signature.toObject, includeInstance)
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
 * @return {!proto.flow.entities.Transaction}
 */
proto.flow.entities.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flow.entities.Transaction;
  return proto.flow.entities.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flow.entities.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flow.entities.Transaction}
 */
proto.flow.entities.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScript(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addArguments(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReferenceBlockId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGasLimit(value);
      break;
    case 5:
      var value = new proto.flow.entities.Transaction.ProposalKey;
      reader.readMessage(value,proto.flow.entities.Transaction.ProposalKey.deserializeBinaryFromReader);
      msg.setProposalKey(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayer(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addAuthorizers(value);
      break;
    case 8:
      var value = new proto.flow.entities.Transaction.Signature;
      reader.readMessage(value,proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader);
      msg.addPayloadSignatures(value);
      break;
    case 9:
      var value = new proto.flow.entities.Transaction.Signature;
      reader.readMessage(value,proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader);
      msg.addEnvelopeSignatures(value);
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
proto.flow.entities.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flow.entities.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flow.entities.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScript_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getArgumentsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
  f = message.getReferenceBlockId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getGasLimit();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getProposalKey();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.flow.entities.Transaction.ProposalKey.serializeBinaryToWriter
    );
  }
  f = message.getPayer_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getAuthorizersList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      7,
      f
    );
  }
  f = message.getPayloadSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.flow.entities.Transaction.Signature.serializeBinaryToWriter
    );
  }
  f = message.getEnvelopeSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.flow.entities.Transaction.Signature.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.flow.entities.Transaction.ProposalKey.prototype.toObject = function(opt_includeInstance) {
  return proto.flow.entities.Transaction.ProposalKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flow.entities.Transaction.ProposalKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.Transaction.ProposalKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    keyId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sequenceNumber: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.flow.entities.Transaction.ProposalKey}
 */
proto.flow.entities.Transaction.ProposalKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flow.entities.Transaction.ProposalKey;
  return proto.flow.entities.Transaction.ProposalKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flow.entities.Transaction.ProposalKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flow.entities.Transaction.ProposalKey}
 */
proto.flow.entities.Transaction.ProposalKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKeyId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceNumber(value);
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
proto.flow.entities.Transaction.ProposalKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flow.entities.Transaction.ProposalKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flow.entities.Transaction.ProposalKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.Transaction.ProposalKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKeyId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.Transaction.ProposalKey.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.flow.entities.Transaction.ProposalKey.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.flow.entities.Transaction.ProposalKey.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.Transaction.ProposalKey} returns this
 */
proto.flow.entities.Transaction.ProposalKey.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint32 key_id = 2;
 * @return {number}
 */
proto.flow.entities.Transaction.ProposalKey.prototype.getKeyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.flow.entities.Transaction.ProposalKey} returns this
 */
proto.flow.entities.Transaction.ProposalKey.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 sequence_number = 3;
 * @return {number}
 */
proto.flow.entities.Transaction.ProposalKey.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.flow.entities.Transaction.ProposalKey} returns this
 */
proto.flow.entities.Transaction.ProposalKey.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.flow.entities.Transaction.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.flow.entities.Transaction.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flow.entities.Transaction.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.Transaction.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    keyId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    signature: msg.getSignature_asB64()
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
 * @return {!proto.flow.entities.Transaction.Signature}
 */
proto.flow.entities.Transaction.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flow.entities.Transaction.Signature;
  return proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flow.entities.Transaction.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flow.entities.Transaction.Signature}
 */
proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKeyId(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
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
proto.flow.entities.Transaction.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flow.entities.Transaction.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flow.entities.Transaction.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.Transaction.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKeyId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.Transaction.Signature.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.flow.entities.Transaction.Signature.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.flow.entities.Transaction.Signature.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.Transaction.Signature} returns this
 */
proto.flow.entities.Transaction.Signature.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint32 key_id = 2;
 * @return {number}
 */
proto.flow.entities.Transaction.Signature.prototype.getKeyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.flow.entities.Transaction.Signature} returns this
 */
proto.flow.entities.Transaction.Signature.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes signature = 3;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.Transaction.Signature.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes signature = 3;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.flow.entities.Transaction.Signature.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.flow.entities.Transaction.Signature.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.Transaction.Signature} returns this
 */
proto.flow.entities.Transaction.Signature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes script = 1;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.Transaction.prototype.getScript = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes script = 1;
 * This is a type-conversion wrapper around `getScript()`
 * @return {string}
 */
proto.flow.entities.Transaction.prototype.getScript_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScript()));
};


/**
 * optional bytes script = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScript()`
 * @return {!Uint8Array}
 */
proto.flow.entities.Transaction.prototype.getScript_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScript()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.setScript = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated bytes arguments = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.flow.entities.Transaction.prototype.getArgumentsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes arguments = 2;
 * This is a type-conversion wrapper around `getArgumentsList()`
 * @return {!Array<string>}
 */
proto.flow.entities.Transaction.prototype.getArgumentsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getArgumentsList()));
};


/**
 * repeated bytes arguments = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getArgumentsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.flow.entities.Transaction.prototype.getArgumentsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getArgumentsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.setArgumentsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.addArguments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.clearArgumentsList = function() {
  return this.setArgumentsList([]);
};


/**
 * optional bytes reference_block_id = 3;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.Transaction.prototype.getReferenceBlockId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes reference_block_id = 3;
 * This is a type-conversion wrapper around `getReferenceBlockId()`
 * @return {string}
 */
proto.flow.entities.Transaction.prototype.getReferenceBlockId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReferenceBlockId()));
};


/**
 * optional bytes reference_block_id = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReferenceBlockId()`
 * @return {!Uint8Array}
 */
proto.flow.entities.Transaction.prototype.getReferenceBlockId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReferenceBlockId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.setReferenceBlockId = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint64 gas_limit = 4;
 * @return {number}
 */
proto.flow.entities.Transaction.prototype.getGasLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.setGasLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional ProposalKey proposal_key = 5;
 * @return {?proto.flow.entities.Transaction.ProposalKey}
 */
proto.flow.entities.Transaction.prototype.getProposalKey = function() {
  return /** @type{?proto.flow.entities.Transaction.ProposalKey} */ (
    jspb.Message.getWrapperField(this, proto.flow.entities.Transaction.ProposalKey, 5));
};


/**
 * @param {?proto.flow.entities.Transaction.ProposalKey|undefined} value
 * @return {!proto.flow.entities.Transaction} returns this
*/
proto.flow.entities.Transaction.prototype.setProposalKey = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.clearProposalKey = function() {
  return this.setProposalKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flow.entities.Transaction.prototype.hasProposalKey = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes payer = 6;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.Transaction.prototype.getPayer = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes payer = 6;
 * This is a type-conversion wrapper around `getPayer()`
 * @return {string}
 */
proto.flow.entities.Transaction.prototype.getPayer_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayer()));
};


/**
 * optional bytes payer = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayer()`
 * @return {!Uint8Array}
 */
proto.flow.entities.Transaction.prototype.getPayer_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayer()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.setPayer = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * repeated bytes authorizers = 7;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.flow.entities.Transaction.prototype.getAuthorizersList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * repeated bytes authorizers = 7;
 * This is a type-conversion wrapper around `getAuthorizersList()`
 * @return {!Array<string>}
 */
proto.flow.entities.Transaction.prototype.getAuthorizersList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getAuthorizersList()));
};


/**
 * repeated bytes authorizers = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAuthorizersList()`
 * @return {!Array<!Uint8Array>}
 */
proto.flow.entities.Transaction.prototype.getAuthorizersList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getAuthorizersList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.setAuthorizersList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.addAuthorizers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.clearAuthorizersList = function() {
  return this.setAuthorizersList([]);
};


/**
 * repeated Signature payload_signatures = 8;
 * @return {!Array<!proto.flow.entities.Transaction.Signature>}
 */
proto.flow.entities.Transaction.prototype.getPayloadSignaturesList = function() {
  return /** @type{!Array<!proto.flow.entities.Transaction.Signature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flow.entities.Transaction.Signature, 8));
};


/**
 * @param {!Array<!proto.flow.entities.Transaction.Signature>} value
 * @return {!proto.flow.entities.Transaction} returns this
*/
proto.flow.entities.Transaction.prototype.setPayloadSignaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.flow.entities.Transaction.Signature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flow.entities.Transaction.Signature}
 */
proto.flow.entities.Transaction.prototype.addPayloadSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.flow.entities.Transaction.Signature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.clearPayloadSignaturesList = function() {
  return this.setPayloadSignaturesList([]);
};


/**
 * repeated Signature envelope_signatures = 9;
 * @return {!Array<!proto.flow.entities.Transaction.Signature>}
 */
proto.flow.entities.Transaction.prototype.getEnvelopeSignaturesList = function() {
  return /** @type{!Array<!proto.flow.entities.Transaction.Signature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flow.entities.Transaction.Signature, 9));
};


/**
 * @param {!Array<!proto.flow.entities.Transaction.Signature>} value
 * @return {!proto.flow.entities.Transaction} returns this
*/
proto.flow.entities.Transaction.prototype.setEnvelopeSignaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.flow.entities.Transaction.Signature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flow.entities.Transaction.Signature}
 */
proto.flow.entities.Transaction.prototype.addEnvelopeSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.flow.entities.Transaction.Signature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flow.entities.Transaction} returns this
 */
proto.flow.entities.Transaction.prototype.clearEnvelopeSignaturesList = function() {
  return this.setEnvelopeSignaturesList([]);
};


/**
 * @enum {number}
 */
proto.flow.entities.TransactionStatus = {
  UNKNOWN: 0,
  PENDING: 1,
  FINALIZED: 2,
  EXECUTED: 3,
  SEALED: 4,
  EXPIRED: 5
};

goog.object.extend(exports, proto.flow.entities);
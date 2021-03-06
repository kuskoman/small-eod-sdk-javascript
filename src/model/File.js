/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.File = factory(root.SmallEodClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The File model module.
   * @module model/File
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>File</code>.
   * @alias module:model/File
   * @class
   * @param path {String} Path to file.
   * @param name {String} Name of file.
   */
  var exports = function(path, name) {
    var _this = this;

    _this['path'] = path;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/File} obj Optional instance to populate.
   * @return {module:model/File} The populated <code>File</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('downloadUrl')) {
        obj['downloadUrl'] = ApiClient.convertToType(data['downloadUrl'], 'String');
      }
      if (data.hasOwnProperty('letter')) {
        obj['letter'] = ApiClient.convertToType(data['letter'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Path to file.
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * Name of file.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} downloadUrl
   */
  exports.prototype['downloadUrl'] = undefined;
  /**
   * @member {Number} letter
   */
  exports.prototype['letter'] = undefined;



  return exports;
}));



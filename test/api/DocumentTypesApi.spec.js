/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SmallEodClient);
  }
}(this, function(expect, SmallEodClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SmallEodClient.DocumentTypesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DocumentTypesApi', function() {
    describe('documentTypesCreate', function() {
      it('should call documentTypesCreate successfully', function(done) {
        //uncomment below and update the code to test documentTypesCreate
        //instance.documentTypesCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('documentTypesDelete', function() {
      it('should call documentTypesDelete successfully', function(done) {
        //uncomment below and update the code to test documentTypesDelete
        //instance.documentTypesDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('documentTypesList', function() {
      it('should call documentTypesList successfully', function(done) {
        //uncomment below and update the code to test documentTypesList
        //instance.documentTypesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('documentTypesPartialUpdate', function() {
      it('should call documentTypesPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test documentTypesPartialUpdate
        //instance.documentTypesPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('documentTypesRead', function() {
      it('should call documentTypesRead successfully', function(done) {
        //uncomment below and update the code to test documentTypesRead
        //instance.documentTypesRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('documentTypesUpdate', function() {
      it('should call documentTypesUpdate successfully', function(done) {
        //uncomment below and update the code to test documentTypesUpdate
        //instance.documentTypesUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

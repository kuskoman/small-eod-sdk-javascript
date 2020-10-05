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


import ApiClient from "../ApiClient";
import Collection from '../model/Collection';
import Event from '../model/Event';
import InlineResponse2004 from '../model/InlineResponse2004';
import InlineResponse2005 from '../model/InlineResponse2005';
import InlineResponse2006 from '../model/InlineResponse2006';
import InlineResponse2007 from '../model/InlineResponse2007';
import InlineResponse2008 from '../model/InlineResponse2008';
import Letter from '../model/Letter';
import ModelCase from '../model/ModelCase';
import Note from '../model/Note';
import TokenSet from '../model/TokenSet';

/**
* Collections service.
* @module small_eod/CollectionsApi
* @version 1.0.4
*/
export default class CollectionsApi {

    /**
    * Constructs a new CollectionsApi. 
    * @alias module:small_eod/CollectionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
     */
    collectionsCasesEventsListWithHttpInfo(casePk, collectionPk, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesEventsList");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesEventsList");
      }

      let pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer', 'CollectionToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2006;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/events/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
     */
    collectionsCasesEventsList(casePk, collectionPk, opts) {
      return this.collectionsCasesEventsListWithHttpInfo(casePk, collectionPk, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */
    collectionsCasesEventsReadWithHttpInfo(casePk, collectionPk, id) {
      let postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesEventsRead");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesEventsRead");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesEventsRead");
      }

      let pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer', 'CollectionToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Event;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/events/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */
    collectionsCasesEventsRead(casePk, collectionPk, id) {
      return this.collectionsCasesEventsReadWithHttpInfo(casePk, collectionPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */
    collectionsCasesLettersListWithHttpInfo(casePk, collectionPk, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesLettersList");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesLettersList");
      }

      let pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer', 'CollectionToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2007;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/letters/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */
    collectionsCasesLettersList(casePk, collectionPk, opts) {
      return this.collectionsCasesLettersListWithHttpInfo(casePk, collectionPk, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */
    collectionsCasesLettersReadWithHttpInfo(casePk, collectionPk, id) {
      let postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesLettersRead");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesLettersRead");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesLettersRead");
      }

      let pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer', 'CollectionToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Letter;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/letters/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */
    collectionsCasesLettersRead(casePk, collectionPk, id) {
      return this.collectionsCasesLettersReadWithHttpInfo(casePk, collectionPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    collectionsCasesListWithHttpInfo(collectionPk, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesList");
      }

      let pathParams = {
        'collection_pk': collectionPk
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer', 'CollectionToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2005;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    collectionsCasesList(collectionPk, opts) {
      return this.collectionsCasesListWithHttpInfo(collectionPk, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2008} and HTTP response
     */
    collectionsCasesNotesListWithHttpInfo(casePk, collectionPk, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesNotesList");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesNotesList");
      }

      let pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer', 'CollectionToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2008;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/notes/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2008}
     */
    collectionsCasesNotesList(casePk, collectionPk, opts) {
      return this.collectionsCasesNotesListWithHttpInfo(casePk, collectionPk, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Note} and HTTP response
     */
    collectionsCasesNotesReadWithHttpInfo(casePk, collectionPk, id) {
      let postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesNotesRead");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesNotesRead");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesNotesRead");
      }

      let pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer', 'CollectionToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Note;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/notes/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Note}
     */
    collectionsCasesNotesRead(casePk, collectionPk, id) {
      return this.collectionsCasesNotesReadWithHttpInfo(casePk, collectionPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelCase} and HTTP response
     */
    collectionsCasesReadWithHttpInfo(collectionPk, id) {
      let postBody = null;
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesRead");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesRead");
      }

      let pathParams = {
        'collection_pk': collectionPk,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer', 'CollectionToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelCase;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelCase}
     */
    collectionsCasesRead(collectionPk, id) {
      return this.collectionsCasesReadWithHttpInfo(collectionPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */
    collectionsCreateWithHttpInfo(data) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling collectionsCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Collection;
      return this.apiClient.callApi(
        '/collections/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */
    collectionsCreate(data) {
      return this.collectionsCreateWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    collectionsDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/collections/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    collectionsDelete(id) {
      return this.collectionsDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    collectionsListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/collections/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    collectionsList(opts) {
      return this.collectionsListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */
    collectionsPartialUpdateWithHttpInfo(id, data) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling collectionsPartialUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Collection;
      return this.apiClient.callApi(
        '/collections/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */
    collectionsPartialUpdate(id, data) {
      return this.collectionsPartialUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */
    collectionsReadWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsRead");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer', 'CollectionToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Collection;
      return this.apiClient.callApi(
        '/collections/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */
    collectionsRead(id) {
      return this.collectionsReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} collectionPk 
     * @param {module:model/TokenSet} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenSet} and HTTP response
     */
    collectionsTokensCreateWithHttpInfo(collectionPk, data) {
      let postBody = data;
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsTokensCreate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling collectionsTokensCreate");
      }

      let pathParams = {
        'collection_pk': collectionPk
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TokenSet;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/tokens/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} collectionPk 
     * @param {module:model/TokenSet} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenSet}
     */
    collectionsTokensCreate(collectionPk, data) {
      return this.collectionsTokensCreateWithHttpInfo(collectionPk, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */
    collectionsUpdateWithHttpInfo(id, data) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling collectionsUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Collection;
      return this.apiClient.callApi(
        '/collections/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */
    collectionsUpdate(id, data) {
      return this.collectionsUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

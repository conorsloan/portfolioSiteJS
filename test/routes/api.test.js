/**
 * Created by conor on 19/10/2014.
 */

var api = require('../../routes/api.js');
var assert = require('assert');
var sinon = require('sinon');

describe('api', function(){

    var requestStub, responseStub, dbStub, dbCollectionStub, mailStub, jsonStreamResponseStub;

    before(function() {

    });

    afterEach(function() {

    });

    describe('#projectInfo()', function(){
        it('should return project info from the database', function(){

            requestStub = sinon.stub();
            responseStub = sinon.stub();
            dbStub = sinon.stub();
            jsonStreamResponseStub = sinon.stub();
            mailStub = sinon.stub();
            dbCollectionStub = sinon.stub();


            var theApi = api(jsonStreamResponseStub, dbStub, mailStub);
            dbStub = sinon.stub("collection");
            dbStub.onCall(0).returns(dbCollectionStub);
            theApi.projectInfo(requestStub, responseStub);
        });
    });


})
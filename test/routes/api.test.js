/**
 * Created by conor on 19/10/2014.
 */

var api = require('../../routes/api.js');
var assert = require('assert');
var sinon = require('sinon');

describe('api', function(){

    var requestStub, responseStub, dbStub, dbCollectionStub, mailStub;

    before(function() {
        requestStub = sinon.stub();
        responseStub = sinon.stub();
        dbStub = sinon.stub();
        mailStub = sinon.stub();
        dbCollectionStub = sinon.stub();
    });

    afterEach(function() {
        requestStub.reset();
        responseStub.reset();
        dbCollectionStub.reset();
        dbStub.reset();
        mailStub.reset();
    });

    describe('#projectInfo()', function(){
        it('should return project info from the database', function(){

        });
    });


})
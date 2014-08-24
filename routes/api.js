/**
 * Created by conor on 24/08/2014.
 */
/*
 * Serve JSON to our AngularJS client
 */
var JSONStream = require('JSONStream');

module.exports = function(db) {
    return {

        projectInfo: function (req, res) {
            var projectCollection = db.collection('projectInfo');
            projectCollection.find({}).pipe(JSONStream.stringify()).pipe(res);
        },

        projects: function (req, res) {
            var projectCollection = db.collection('projects');
            projectCollection.find({}).pipe(JSONStream.stringify()).pipe(res);
        },

        project: function (req, res) {
            var projectName = req.params.projectName;
            var projectCollection = db.collection('projects');
            projectCollection.find({id: projectName}).pipe(JSONStream.stringify()).pipe(res);
        }
    }
}


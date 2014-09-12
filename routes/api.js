/**
 * Created by conor on 24/08/2014.
 */
/*
 * Serve JSON to our AngularJS client
 */
var JSONStream = require('JSONStream');




module.exports = function (db, mailTransporter) {

    "use strict";

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
            var projectName = req.params.projectName,
                projectCollection = db.collection('projects');

            projectCollection.find({id: projectName}).pipe(JSONStream.stringify()).pipe(res);
        },

        aboutMe : function (req, res) {
            res.send('About me!');
        },

        // Send an email message, given the message submitted on the site
        sendMessage : function (req, res) {
            var mailOptions = {
                from: req.body.name + ' (' + req.body.email + ')', // sender address
                to: 'c.sloan7597@googlemail.com', // list of receivers
                subject: req.body.subject, // Subject line
                text: req.body.message // plaintext body
            };

            // send mail with defined transport object
            mailTransporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    res.json({status: 'ERROR', message: String(error)});
                } else {
                    res.json({status: 'SUCCESS', message: 'Message sent successfully!'});
                }
            });
        }
    };
};


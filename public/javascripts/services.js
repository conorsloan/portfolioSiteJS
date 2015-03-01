/**
 * Created by conor on 23/08/2014.
 */

var services = angular.module('portfolioSite.services', []);

services.factory('projectService', ['$http', function ($http) {

    'use strict';

    return {
        getProjectInfo: function (callback) {
            $http.get('/api/projectinfo').success(callback);
        },

        getAllProjects: function (callback) {
            $http.get('/api/projects').success(callback);
        },

        getProject: function (name, callback) {
            $http.get('/api/project/' + name).success(callback);
        }
    };
}]);

services.factory('aboutService', ['$http', function ($http) {

    'use strict';

    return {
        getAboutMe: function (callback) {
            $http.get('/api/about').success(callback);
        }
    };
}]);

services.factory('cvService', ['$http', function ($http) {

    'use strict';

    return {
        getJobs: function (callback) {
            $http.get('/api/cv/jobs').success(callback);
        },

        getTechUsed : function (callback) {
            $http.get('/api/cv/tech').success(callback);
        },

        getAtAGlanceContent: function (callback) {
            $http.get('/api/cv/atAGlanceContent').success(callback);
        }
    };
}]);
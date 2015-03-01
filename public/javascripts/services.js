/**
 * Created by conor on 23/08/2014.
 */

var services = angular.module('portfolioSite.services', []);

services.factory('projectService', ['$http', function ($http) {

    'use strict';

    return {
        getProjectInfo: function (callback) {
            $http.get('/api/projectinfo', {cache: true}).success(callback);
        },

        getAllProjects: function (callback) {
            $http.get('/api/projects', {cache: true}).success(callback);
        },

        getProject: function (name, callback) {
            $http.get('/api/project/' + name, {cache: true}).success(callback);
        }
    };
}]);

services.factory('aboutService', ['$http', function ($http) {

    'use strict';

    return {
        getAboutMe: function (callback) {
            $http.get('/api/about', {cache: true}).success(callback);
        }
    };
}]);

services.factory('cvService', ['$http', function ($http) {

    'use strict';

    return {
        getJobs: function (callback) {
            $http.get('/api/cv/jobs', {cache: true}).success(callback);
        },

        getTechUsed : function (callback) {
            $http.get('/api/cv/tech', {cache: true}).success(callback);
        },

        getAtAGlanceContent: function (callback) {
            $http.get('/api/cv/atAGlanceContent', {cache: true}).success(callback);
        }
    };
}]);
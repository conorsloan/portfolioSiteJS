/**
 * Created by conor on 23/08/2014.
 */

var services = angular.module('portfolioSite.services', []);

services.factory('projectService', ['$http', function($http) {

    return {

        getProjectInfo : function(callback) {
            $http.get('/api/projectinfo').success(callback);
        }

    };
}]);
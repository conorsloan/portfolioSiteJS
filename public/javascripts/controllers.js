/**
 * Created by conor on 23/08/2014.
 */

'use strict';
/* Page Controllers */
var pageControllers = angular.module('portfolioSite.controllers', []);

pageControllers.controller('HomeController', ['$scope', function($scope) {
    console.log('Controller: Home');
}]);
pageControllers.controller('AboutController', ['$scope', function($scope) {
    console.log('Controller: About');
}]);
pageControllers.controller('ProjectsController', ['$scope', 'projectService', function($scope, projectService) {
    console.log('Controller: Projects');
    projectService.getAllProjects(function(projects) {
        console.log('In the get all projects controller');
        $scope.projects = projects;
    });
}]);
pageControllers.controller('ProjectController', ['$scope', '$location', 'projectService', function($scope, $location, projectService) {
    console.log('Controller: Project '+$location.path());
    var name = $location.path().split('/').slice(-1)[0];
    projectService.getProject(name, function(projects) {
        console.log('in the callback'+ JSON.stringify(projects));
       $scope.project = projects[0];
    });
}]);
pageControllers.controller('CvController', ['$scope', function($scope) {
    console.log('Controller: CV');
}]);
pageControllers.controller('ContactController', ['$scope', '$http', function($scope, $http) {
    console.log('Controller: Contact');

    $scope.send = function(message) {

        // Send (don't bother with a whole service just for this... TODO)
        console.log('Lets pretend im sending a message');
        console.log('MESSAGE EMAIL: '+message.email);

        $http.post('/api/contact/sendMessage', message)
            .success(function(response) {
               if (response.status === 'SUCCESS') {
                   $scope.successMessage = response.message;
                   $scope.message = {};
               } else if (response.status == 'ERROR') {
                   $scope.errorMessage = response.message;
               }
            });
    };

}]);




/** Function representing standalone header controller **/
function HeaderController($scope, $location, projectService)
{
    // Allow correct navbar item to be selected
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    // Asynchronously update project details
    projectService.getProjectInfo(function(projects) {
        $scope.projects = projects;
    });

}
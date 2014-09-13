/**
 * Created by conor on 23/08/2014.
 */


/* Page Controllers */
var pageControllers = angular.module('portfolioSite.controllers', []);

pageControllers.controller('HomeController', ['$scope', function ($scope) {
    'use strict';
    console.log('Controller: Home');
}]);

pageControllers.controller('AboutController', ['$scope', 'aboutService', function ($scope, aboutService) {
    'use strict';
    console.log('Controller: About');
    aboutService.getAboutMe(function (aboutMe) {
        console.log('About Me');
        $scope.aboutMe = aboutMe.content || ["Data not found, sorry!"];
    });
}]);

pageControllers.controller('ProjectsController', ['$scope', 'projectService', function ($scope, projectService) {
    'use strict';
    console.log('Controller: Projects');
    projectService.getAllProjects(function (projects) {
        console.log('In the get all projects controller');
        $scope.projects = projects;
    });
}]);

pageControllers.controller('ProjectController', ['$scope', '$location', 'projectService', function ($scope, $location, projectService) {
    'use strict';
    console.log('Controller: Project ' + $location.path());
    var name = $location.path().split('/').slice(-1)[0];
    projectService.getProject(name, function (projects) {
        $scope.project = projects[0];
    });
}]);

pageControllers.controller('CvController', ['$scope', 'cvService', function ($scope, cvService) {
    'use strict';
    console.log('Controller: CV  ');
    cvService.getJobs(function (response) {
        $scope.jobs = response.jobs;
    });
    cvService.getTechUsed(function (response) {
        $scope.techsUsed = response.techs;
    });
}]);

pageControllers.controller('ContactController', ['$scope', '$http', function ($scope, $http) {
    'use strict';
    console.log('Controller: Contact');
    $scope.send = function (messageForm) {
        if (messageForm.$valid) {
            $http.post('/api/contact/sendMessage', $scope.message)
                .success(function (response) {
                    if (response.status === 'SUCCESS') {
                        $scope.successMessage = response.message;
                        $scope.errorMessage = null;
                        $scope.message = {};
                    } else if (response.status === 'ERROR') {
                        $scope.errorMessage = response.message;
                    }
                });
        } else {
            $scope.errorMessage = 'Error: Invalid form input - see messages for details';
        }
    };
}]);

/** Function representing standalone header controller **/
function HeaderController($scope, $location, projectService) {
    'use strict';

    // Allow correct navbar item to be selected
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    // Asynchronously update project details
    projectService.getProjectInfo(function (projects) {
        $scope.projects = projects;
    });
};
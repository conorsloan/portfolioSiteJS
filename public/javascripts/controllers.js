/**
 * Created by conor on 23/08/2014.
 */


/* Page Controllers */
var pageControllers = angular.module('portfolioSite.controllers', []);

pageControllers.controller('HomeController', ['$scope', 'projectService', 'cvService',
    function ($scope, projectService, cvService) {
        'use strict';
        console.log('Controller: Home');

        // Configure Carousel
        $scope.myInterval = 5000;
        $scope.slides = [];
        $scope.addSlide = function (name, url, tagline) {
            $scope.slides.push({
                image: url,
                title: name,
                text: tagline
            });
        };

        projectService.getAllProjects(function (projects) {
            console.log('In the get all projects controller');
            $scope.projects = projects;
            projects.forEach(function (project) {
                $scope.addSlide(project.name, project.smallImage, project.tagLine);
            });
        });

        // Configure 'at a glance'
        $scope.atAGlanceItem = false;
        cvService.getAtAGlanceContent(function (atAGlanceContent) {
            $scope.atAGlanceItems = atAGlanceContent.items;
            $scope.showAtAGlanceContent = function (contentId) {
                $scope.atAGlanceItem = contentId === -1 ? false : $scope.atAGlanceItems[contentId];
            };
        });
    }]);

pageControllers.controller('AboutController', ['$scope', 'aboutService', function ($scope, aboutService) {
    'use strict';
    console.log('Controller: About');

    // Configure Carousel
    $scope.myInterval = 5000;

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

    // Carousel
    $scope.myInterval = 5000;

    var name = $location.path().split('/').slice(-1)[0];
    projectService.getProject(name, function (projects) {
        $scope.project = projects[0];
        $scope.techUsed = $scope.project.techUsed.split(",");
    });
}]);

pageControllers.controller('CvController', ['$scope', 'cvService', function ($scope, cvService) {
    'use strict';
    console.log('Controller: CV ');

    // Configure accordion
    /**
     * Career
     * Technology Experience
     * Education
     * CV
     */
    $scope.oneAtATime = true;
    $scope.status = {
        isCareerOpen: true,
        isTechExpOpen: false,
        isEducationOpen: false,
        isFullCvOpen: false
    };

    cvService.getJobs(function (response) {
        $scope.jobs = response.jobs.sort(function (a, b) {
            if (a.position > b.position) {
                return -1;
            }
            if (a.position < b.position) {
                return 1;
            }
            return 0;
        });
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

    $scope.navbarCollapsed = true;

    $scope.$on('$routeChangeStart', function (next, current) {
        $scope.navbarCollapsed = true;
    });

    // Allow correct navbar item to be selected
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    // Asynchronously update project details
    projectService.getProjectInfo(function (projects) {
        $scope.projects = projects;
    });


}
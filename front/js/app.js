var SuiteCRM = angular.module('SuiteCRM', ['ngRoute']);

SuiteCRM.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'front/view/listview.html'}).
            when("/:mod/:page", {
                templateUrl: function(params) {
                    return 'front/view/' + params.page + '.html';
                },
                controller: 'SuiteView'
            }).
            when("/:mod/:page/:id", {
                templateUrl: function(params) {
                    return 'front/view/' + params.page + '.html';
                },
                controller: 'SuiteView'
            }).
            otherwise({redirectTo: '/'});
    }]);

SuiteCRM.controller('SuiteView', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('cache/modules/'+$routeParams.mod+'/'+$routeParams.page+'.json').success(function(data) {
            $scope.panels = data.panels;
        });
    }]);

angular.module('CrudApp', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'front/tpl/editview.html', controller: ListCtrl}).
            when('/editView', {templateUrl: 'front/tpl/editview.html', controller: editView}).
            otherwise({redirectTo: '/'});
    }]);
function ListCtrl($scope, $http) {
    $http.get('api/delete_user').success(function(data) {
        $scope.users = data;
    });
}
function editView($scope, $http) {
    $http.get('cache/modules/Accounts/EditView.json').success(function(data) {
        console.log(data);
        $scope.panels = data.panels;
    });
}

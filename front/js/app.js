var SuiteCRM = angular.module('SuiteCRM', ['ngRoute']);

SuiteCRM.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
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
        $scope.module = $routeParams.mod;
        $http.get('cache/modules/'+$routeParams.mod+'/'+$routeParams.page+'.json').success(function(data) {
            $scope.panels = data.panels;
            $scope.record = {};
            $scope.language = {
                'LBL_BILLING_ADDRESS_STREET':'Billing Address Street',
                'LBL_BILLING_ADDRESS' : 'Billing Address',
                'LBL_SHIPPING_ADDRESS_STREET':'Shipping Address Street',
                'LBL_SHIPPING_ADDRESS':'Shipping Address',
                'LBL_NAME':'Name',
                'LBL_PHONE_OFFICE':'Phone Office',
                'LBL_WEBSITE':'Website',
                'LBL_EMAIL':'Email',
                'LBL_DESCRIPTION':'Description',
                'LBL_TYPE':'Type',
                'LBL_INDUSTRY':'Industry',
                'LBL_ANNUAL_REVENUE':'Annual Revenue',
                'LBL_FAX':'Fax',
                'LBL_EMPLOYEES':'Employees',
                'LBL_CAMPAIGN':'Campaign',
                'LBL_ASSIGNED_TO':'Assigned User',
                'LBL_MEMBER_OF':'Member Of',
                'LBL_ACCOUNT_INFORMATION':'Account Information',
                'LBL_PANEL_ADVANCED':'Advanced',
                'LBL_PANEL_ASSIGNMENT' : 'Other',
                'LBL_DATE_ENTERED' : 'Date Created',
                'LBL_DATE_MODIFIED' : 'Date Modified'
            }


        });
        //$http.get('cache/modules/'+$routeParams.mod+'/'+$routeParams.page+'.json').success(function(data) {

        //});
    }]);

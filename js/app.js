var angularStore = angular.module('AngularStore', ['ngRoute']);



angularStore.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/yonghu', {
            templateUrl: '/partials/yonghu.html',
            controller: 'yonghuController'
        })
        .when('/gongsi', {
            templateUrl: '/partials/gongsi.html',
            controller: 'gongsiController'
        })
        //这个地方注意格式，中间有空格会报错
        .when('/person/:abc', {
            templateUrl: '/partials/person.html',
            controller: 'personController'
        })

    .when('./package/:mmm', {
            templateUrl: '/partials/package.html',
            controller: 'packageController'
        })
        .otherwise({
            redirectTo: '/yonghu'
        })
}]);


angularStore.controller('yonghuController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    $http({
        method: 'GET',
        url: '/mock/yonghu.json'
    }).then(function successCallback(response) {

        // console.log(response.data.data);
        $scope.messages = response.data.data;
    }, function errorCallback(response) {
        console.log("失败了");
    });

    console.log($rootScope);
}]);

angularStore.controller('gongsiController', ['$scope', '$http', function($scope, $http) {

    $http({
        method: 'GET',
        url: '/mock/gongsi.json'
    }).then(function successCallback(response) {

        // console.log(response.data.data);
        $scope.messagestwo = response.data.data;
    }, function errorCallback(response) {
        console.log("失败了");
        gongsiController
    });


}]);

angularStore.controller('personController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    console.log($routeParams.abc);
    $http({
            url: '../mock/yonghu.json',

            params: {
                id: $routeParams.abc
            },
            method: 'get'
        })
        .then(function(res) {
            // $scope.employee = res.data.data[0];
            // console.log(res);
            console.log(res.data.data[$routeParams.abc - 1]);
            $scope.people = res.data.data[$routeParams.abc - 1];
        })
}]);


angularStore.directive('searchShow', function() {

    return {
        restrict: 'E',
        templateUrl: './partials/searchShow.html',
        scope: true,
        controller: function($rootScope, $scope) {
          
        }

    }
});

angularStore.controller('packageController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    console.log($routeParams.abc);
    $http({
            url: '../mock/yonghu.json',

            params: {
                id: $routeParams.mmm
            },
            method: 'get'
        })
        .then(function(res) {
            // $scope.employee = res.data.data[0];
            // console.log(res);
            console.log(res.data.data[$routeParams.abc - 1]);
            $scope.people = res.data.data[$routeParams.abc - 1];
        })
}]);

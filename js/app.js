var app = angular.module('shieldsPhoto', ['ngRoute']);

// Router
app.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'HomeCTRL'
  })
  
  .when('/seniors', {
    templateUrl: 'pages/seniors.html',
    controller: 'SeniorsCTRL'
  })

  .when('/weddings', {
    templateUrl: 'pages/weddings.html',
    controller: 'WeddingsCTRL'
  })

  .when('/engagement', {
    templateUrl: 'pages/engagement.html',
    controller: 'EngagementCTRL'
  })

  .when('/portraits', {
    templateUrl: 'pages/portraits.html',
    controller: 'PortraitCTRL'
  })

  .when('/family', {
    templateUrl: 'pages/family.html',
    controller: 'FamilyCTRL'
  })
  
  .when('/investment', {
    templateUrl: 'pages/investment.html',
    controller: 'InvestCTRL'
  })

  .when('/contact', {
    templateUrl: 'pages/contact.html',
    controller: 'ContactCTRL'
  })

  // .otherwise({redirectTo: '/'});  
});

// Controllers

app.controller('HomeCTRL', function($scope){
  $scope.message = 'Hello From Home Controller';
});

app.controller('SeniorsCTRL', function($scope){
  $scope.message = 'Hello From Seniors Controller';
});

app.controller('WeddingsCTRL', function($scope){
  $scope.message = 'Hello From Weddings Controller';
});

app.controller('EngagementCTRL', function($scope){
  $scope.message = 'Hello From Engagement Controller';
});

app.controller('PortraitCTRL', function($scope){
  $scope.message = 'Hello From Portrait Controller';
});

app.controller('FamilyCTRL', function($scope){
  $scope.message = 'Hello From Family Controller';
});

app.controller('InvestCTRL', function($scope){
  $scope.message = 'Hello From Investment Controller';
});
app.controller('ContactCTRL', function($scope){
  $scope.message = 'Hello From Contact Controller';
});


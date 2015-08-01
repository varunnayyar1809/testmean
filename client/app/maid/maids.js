'use strict';

angular.module('woobeeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('maids', {
        url: '/maids',
        authenticate: true,
        title:'WootBee | Maids',
        views: {
				"header": { templateUrl: 'components/navbar/header.html'},
				"body":   { templateUrl: 'app/maid/maids/maids.html',
							controller: 'MaidsCtrl'}
			}
      })
      .state('maids.manageMaids', {
        url: '/manage',
        authenticate: true,
        title:'WootBee | Manage Maids',
        templateUrl: 'app/maid/maids/manageMaids.html',
		controller: 'ManageMaidsCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        authenticate: true,
        title:'WootBee | Dashboard',
        views: {
				"header": { templateUrl: 'components/navbar/header.html'},
				"body":   { templateUrl: 'app/maid/dashboard/dashboard.html',
							controller: 'DashboardCtrl'}
			}
      });
  });

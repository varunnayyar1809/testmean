'use strict';

angular.module('woobeeApp')
	.config(function ($stateProvider) {
		$stateProvider
		.state('maids', {
			url: '/maids',
			authenticate: true,
			role: 'admin',
			title: 'WootBee | Maids',
			views: {
				"header": {templateUrl: 'components/navbar/header.html'},
				"body": { templateUrl: 'app/admin/maids/maids.html',
						  controller: 'MaidsCtrl'}
			}
		})
		.state('maids.manageMaids', {
			url: '/manage/:id',
			authenticate: true,
			title: 'WootBee | Manage Maids',
			role: 'admin',
			templateUrl: 'app/admin/maids/manageMaids.html',
			controller: 'ManageMaidsCtrl',
			resolve: {
				getMaidData: function($stateParams, MaidSer, $state){
					var id = $stateParams.id;
					if(id) {
						return	MaidSer.get({id:id},
							function(res){
								return res;
							},
							function(err) {
								$state.go('maids');
							}
						);
					}
				}
			}
		})
		.state('dashboard', {
			url: '/dashboard',
			authenticate: true,
			title: 'WootBee | Dashboard',
			role: 'admin',
			views: {
				"header": {templateUrl: 'components/navbar/header.html'},
				"body": {templateUrl: 'app/admin/dashboard/dashboard.html',
					controller: 'DashboardCtrl'}
			}
		});
});

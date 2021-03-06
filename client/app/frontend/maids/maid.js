'use strict';


angular.module('woobeeApp')
	.config(function ($stateProvider) {
		$stateProvider
		.state('maids_front', {
			url: '/search_maids',
			authenticate: true,
			title: 'WootBee | Maids',
			views: {
				"header": {templateUrl: 'components/navbar/header.html'},
				"body": {templateUrl: 'app/frontend/maids/maids.html',
						controller: 'maidsFrontCtrl'}
			}
			
		});
	});

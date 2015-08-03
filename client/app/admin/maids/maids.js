'use strict';


angular.module('woobeeApp')
        .config(function ($stateProvider) {
            $stateProvider
                    .state('maids', {
                        url: '/maids',
                        authenticate: true,
                        title: 'WootBee | Maids',
                        views: {
                            "header": {templateUrl: 'components/navbar/header.html'},
                            "body": {templateUrl: 'app/admin/maids/maids.html',
                                controller: 'MaidsCtrl'}
                        }
                    })
                    .state('maids.manageMaids', {
                        url: '/manage',
                        authenticate: true,
                        title: 'WootBee | Manage Maids',
                        templateUrl: 'app/admin/maids/manageMaids.html',
                        controller: 'ManageMaidsCtrl'
                    })
                    .state('tst', {
                        url: '/search_maids',
                        authenticate: true,
                        title: 'WootBee | Maids',                       
                        views: {
                            "header": {templateUrl: 'components/navbar/header.html'},
                            "body": {templateUrl: 'app/admin/maids/searchMaids.html',
                                controller: 'MaidsCtrl'}
                        }
                    })
                    .state('dashboard', {
                        url: '/dashboard',
                        authenticate: true,
                        title: 'WootBee | Dashboard',
                        views: {
                            "header": {templateUrl: 'components/navbar/header.html'},
                            "body": {templateUrl: 'app/admin/dashboard/dashboard.html',
                                controller: 'DashboardCtrl'}
                        }
                    });
        });

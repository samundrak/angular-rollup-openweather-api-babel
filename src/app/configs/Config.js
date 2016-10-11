import app from '../app';
export default function () {
    app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            controller: 'homeController',
            templateUrl: 'home.html'
        })
            .state('ask', {
                url: '/ask',
                controller: 'askController',
                templateUrl: 'ask.html'
            })
            .state('weather', {
                url: '/weather',
                controller: 'weatherController',
                templateUrl: 'weather.html'
            });
    }
    ]).config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('WeatherApp')
            .setStorageType('localStorage');
    });
}
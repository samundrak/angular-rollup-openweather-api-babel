import app from '../app';
import Location from '../Location';
import Weather from '../Core/Weather/index';

export default function () {


    app.controller('homeController', ['$scope', 'User', '$state', function ($scope, User, $state) {
        Object.assign($scope, {
            canAccessGeoApi: false
        });

        let location = new Location();
        location.ask(success => {
            User.set('coordinates', success.coords);
            $state.go('weather');
        }, error => {
            $state.go('ask');
        });

    }])
        .controller('askController', ['$scope', '$state', 'User', function ($scope, $state, User) {
            Object.assign($scope, {
                applyCoordinates: function () {
                    if (!$scope.location.zip
                        && !$scope.location.country
                    ) {
                        return $scope.error = {
                            type: 'danger',
                            message: 'Please enter valid Location'
                        };
                    }

                    User.set('coordinates', $scope.location);
                    $state.go('weather');
                }
            }, {
                error: {
                    error: false,
                    message: '',
                },
                location: {
                    zip: 0,
                    country: 'Nepal'
                },
            });
        }]).controller('weatherController', ['$scope', '$state', 'User', '$http', 'localStorageService', function ($scope, $state, User, $http, localStorageService) {
        Object.assign($scope, {
            coordinates: User.get('coordinates'),
            forecast: localStorageService.get('forecast'),
        }, {
            fetchWeather (){
                const weather = new Weather.interface(Weather.provider.OpenWeather);
                const weatherApiResponse = weather.setHttpClient($http)
                    .getWeather($scope.coordinates || {});
                weatherApiResponse.success(response => {
                    const forecast = Object.assign(response, {
                        updated: Date.now()
                    })
                    localStorageService.set('forecast', forecast);

                    $scope.forecast = forecast;
                }).error(() => {
                    alert('Some Error occured with internet connection');
                    $state.go('ask');
                });
            },
            isTimeUp(){
                if ($scope.forecast && $scope.forecast.updated - Date.now() <= (10 * 60 * 1000)) {
                    return false;
                }

                return true;
            }
        });

        if (!$scope.coordinates) {
            return $state.go('home');
        }

        if (!$scope.forecast || $scope.isTimeUp()) {
            return $scope.fetchWeather();
        }
    }]);
}
;
import app from '../app';

export default function AppService() {
    app.service('User', ['$rootScope', function ($rootScope) {
        return {
            set(key, value){
                $rootScope[key] = value;
            },
            get(key){
                return $rootScope[key];
            }
        };
    }]);
}
;
import {$, jQuery} from '../bower_components/jquery/dist/jquery.min';
import {} from '../bower_components/bootstrap/dist/js/bootstrap.min';
import {} from '../bower_components/angular/angular.min';
import {} from '../bower_components/angular-local-storage/dist/angular-local-storage.min';
import {} from '../bower_components/angular-ui-router/release/angular-ui-router.min';

import AppConfig from './app/configs/Config';
import AppService from './app/services/Service';
import AppController  from './app/controllers/Controller';

AppConfig();
AppService();
AppController();
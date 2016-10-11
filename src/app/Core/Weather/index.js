import OpenWeather from './Providers/OpenWeather/index';

class Weather {

    constructor(provider) {
        provider.init();
        this.provider = provider.get();
    }

    getWeather(location) {
        return this.provider.getWeather(location);
    }

    setHttpClient($http) {
        this.provider.setHttpClient($http);
        return this;
    }

}
export default {
    interface: Weather,
    provider: {
        OpenWeather
    }
}
import WeatherProvider from '../index';

const weatherProvider = new WeatherProvider();
weatherProvider.extend({
    init(){
        this.apiKey = 'ad497de2cfe19a60b4f74fc5754a7317';
        this.api = 'http://api.openweathermap.org/data/2.5/weather';
    },

    getWeather(location){
        return this.$http.get(this.buildApi(location));
    },

    buildApi(location){
        let api = '?';
        if (location.longitude && location.latitude) {
            api += `lat=${location.latitude}&lon=${location.longitude}&`;
        }

        if (location.zip || location.country) {
            location.zip = location.zip || '';
            location.country = location.country || '';
            api += `zip=${location.zip},${location.country}&`;
        }

        return `${this.api}${api}appid=${this.apiKey}`;
    }
})
;

export default weatherProvider;

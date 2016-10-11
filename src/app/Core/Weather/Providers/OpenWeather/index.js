import WeatherProvider from '../index';

const weatherProvider = new WeatherProvider();
weatherProvider.extend({
    init(){
        this.apiKey = 'ad497de2cfe19a60b4f74fc5754a7317';
        this.api = 'http://api.openweathermap.org/data/2.5/weather';
    },

    getWeather(location){
        console.log(this)
        return this.$http.get(this.buildApi(location));
    },

    buildApi(location){
        let api = '?';
        if (location.longitude && location.latitude) {
            api += `lat=${location.latitude}&lon=${location.longitude}&`;
        }

        if (location.zip) {
            api += `zip=${location.zip}&`;
        }

        if (location.country) {
            api += `country=${location.country}&`;
        }

        return `${this.api}${api}appid=${this.apiKey}`;
    }
})
;

export default weatherProvider;

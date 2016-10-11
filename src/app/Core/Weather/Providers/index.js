export default class {
    constructor() {
        this.props = ['init', 'getWeather'];
    }

    get() {
        return this;
    }

    setHttpClient($http) {
        this.$http = $http;
    }

    extend(options) {
        Object.assign(this, options);
        this.props.forEach(item => {
            if (!options[item]) throw new Error(`${item} is not available`);
        });
    }
}
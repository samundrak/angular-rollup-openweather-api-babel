export default class Location {
    constructor() {
        this.positions = {
            coords: {
                longitude: 0.0,
                latitude: 0.0,
            },
        };
        this.canAccessLocationApi = false;
    }

    ask(successCb, errorCb) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.setPositions(successCb),
                this.exception(errorCb)
            );
        } else {
            this.canAccessLocationApi = false;
            errorCb()
        }
    }

    setPositions(onSuccess) {
        return position => {
            this.positions = position;
            onSuccess(position);
        };
    }

    isLocationApiAvailable() {
        return this.canAccessLocationApi;
    }

    exception(onError) {
        return  error => {
            switch (error.code) {
                case error.TIMEOUT:
                case error.POSITION_UNAVAILABLE:
                case error.PERMISSION_DENIED:
                case error.UNKNOWN_ERROR:
                    this.canAccessLocationApi = false;
                    onError('Error occured', error);
                    break;
            }
        }
    };

}
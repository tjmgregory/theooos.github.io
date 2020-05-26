import moment from 'moment-timezone';
export class TimeFactory {
    constructor(timezome) {
        this.timezome = timezome;
    }
    now() {
        return moment.tz(this.timezome);
    }
}
//# sourceMappingURL=TimeFactory.js.map
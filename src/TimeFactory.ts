import moment from 'moment-timezone'

export interface ITimeFactory {
    now(): moment.Moment
}

export class TimeFactory implements ITimeFactory {
    constructor(private readonly timezome: string) {}

    now(): moment.Moment {
        return moment.tz(this.timezome)
    }
}

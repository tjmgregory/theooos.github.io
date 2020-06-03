import moment from 'moment-timezone'

export interface ITimeFactory {
    utc(): moment.Moment
}

export class TimeFactory implements ITimeFactory {
    utc(): moment.Moment {
        return moment.utc()
    }
}

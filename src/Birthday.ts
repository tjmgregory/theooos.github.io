import moment from 'moment'

export class Birthday {
    private readonly _birthday: moment.Moment

    constructor(date: string, timezone: string) {
        this._birthday = moment.tz(date, timezone)
    }

    utc(): moment.Moment {
        return this._birthday.clone().utc()
    }
}
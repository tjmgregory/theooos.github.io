import moment from 'moment'
import { ITimeFactory } from './TimeFactory'

export interface IAgeCalculator {
    calculateAge(dateOfBirth: moment.Moment): number
}

export class AgeCalculator implements IAgeCalculator {
    constructor(private readonly timeFactory: ITimeFactory) {}

    calculateAge(dateOfBirth: moment.Moment): number {
        const currentTime = this.timeFactory.now()
        return currentTime.diff(dateOfBirth, 'years')
    }
}

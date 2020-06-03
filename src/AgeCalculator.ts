import { ITimeFactory } from './TimeFactory'
import { Birthday } from './Birthday'

export interface IAgeCalculator {
    calculateAge(dateOfBirth: Birthday): number
}

export class AgeCalculator implements IAgeCalculator {
    constructor(private readonly timeFactory: ITimeFactory) {}

    calculateAge(dateOfBirth: Birthday): number {
        const currentTime = this.timeFactory.utc()
        return currentTime.diff(dateOfBirth.utc(), 'years')
    }
}

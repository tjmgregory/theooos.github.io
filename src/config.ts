import { ITimeFactory, TimeFactory } from './TimeFactory'
import { IAgeCalculator, AgeCalculator } from './AgeCalculator'

let _timeFactory: ITimeFactory
export function timeFactory(): ITimeFactory {
    return _timeFactory || (_timeFactory = new TimeFactory('Europe/London'))
}

let _ageCalculator: IAgeCalculator
export function ageCalculator(): IAgeCalculator {
    return _ageCalculator || (_ageCalculator = new AgeCalculator(timeFactory()))
}

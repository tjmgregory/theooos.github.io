import { TimeFactory } from './TimeFactory';
import { AgeCalculator } from './AgeCalculator';
let _timeFactory;
export function timeFactory() {
    return _timeFactory || (_timeFactory = new TimeFactory('Europe/London'));
}
let _ageCalculator;
export function ageCalculator() {
    return _ageCalculator || (_ageCalculator = new AgeCalculator(timeFactory()));
}
//# sourceMappingURL=config.js.map
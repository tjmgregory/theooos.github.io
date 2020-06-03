import { AgeCalculator, IAgeCalculator } from '../src/AgeCalculator'
import { makeTimeFactoryMock } from './TestFactories'
import moment from 'moment-timezone'
import { Birthday } from '../src/Birthday'

describe('AgeCalculator', () => {

    let ageCalculator: IAgeCalculator

    const timeFactoryMock = makeTimeFactoryMock()

    beforeEach(() => {
        jest.resetAllMocks()
        ageCalculator = new AgeCalculator(timeFactoryMock)
    })

    describe('calculateAge', () => {
        it('calculates age correctly', () => {
            // Given the current date
            givenTheDate('2020-06-01')

            // and the birthday
            const birthday = new Birthday('1996-04-05', 'Europe/London')

            // when we get the age
            const age = ageCalculator.calculateAge(birthday)

            // it is correct
            expect(age).toBe(24)
        })
    })

    function givenTheDate(date: string, timezone = 'Europe/London'): void {
        const _date = moment.tz(date, timezone)
        timeFactoryMock.utc.mockReturnValue(_date)
    }
})
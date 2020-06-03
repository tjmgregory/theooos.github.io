import {AgeCalculator, IAgeCalculator} from "../src/AgeCalculator";
import {makeTimeFactoryMock} from "./TestFactories";
import moment from 'moment-timezone'

describe('AgeCalculator', () => {

    let ageCalculator: IAgeCalculator

    const timeFactoryMock = makeTimeFactoryMock()

    beforeEach(() => {
        jest.resetAllMocks()
        ageCalculator = new AgeCalculator(timeFactoryMock)
    })

    describe('calculateAge', () => {
        test('calculates a birthday', () => {
            // Given the birthday
            const birthday = moment.tz('1996/04/05', 'YYYY/MM/DD', 'Europe/London')

            // and the current date
            const date = moment.tz('2020/06/01', 'Europe/London')
            timeFactoryMock.now.mockReturnValue(date)

            // when we get the age
            const age = ageCalculator.calculateAge(birthday)

            // it is correct
            expect(age).toBe(24)
        })
    })
})
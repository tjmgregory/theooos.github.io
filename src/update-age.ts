import moment from 'moment-timezone'
import { ageCalculator } from './config'

function run(): void {
    const dateOfBirth = moment.tz('1996/04/05', 'YYYY/MM/DD', 'Europe/London')
    const age = ageCalculator().calculateAge(dateOfBirth)
    const ageField = document.getElementById('age')
    if (ageField) {
        ageField.innerHTML = `${age}`
    }
}

// @ts-ignore
run()

import moment from 'moment-timezone'
import { ageCalculator } from './config'

const DOB = moment.tz('1996/04/05', 'YYYY/MM/DD', 'Europe/London')

function updatePage(age: number) {
    const ageField = document.getElementById('age')
    if (ageField) {
        ageField.innerHTML = `${age}`
    }
}

function getAge() {
    return ageCalculator().calculateAge(DOB)
}

function run(): void {
    const age = getAge()
    updatePage(age)
}

run()

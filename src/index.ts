import { ageCalculator } from './config'
import { Birthday } from './Birthday'

const DOB = new Birthday('1996-04-05', 'Europe/London')

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

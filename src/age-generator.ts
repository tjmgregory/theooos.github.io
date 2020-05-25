// import moment from 'moment'

function calculateAge(): number {
    return 23
}

function run(): void {
    const age = calculateAge()
    document.getElementById('age')!.innerHTML = `${age}`
}

// @ts-ignore
run()

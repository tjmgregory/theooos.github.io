export class AgeCalculator {
    constructor(timeFactory) {
        this.timeFactory = timeFactory;
    }
    calculateAge(dateOfBirth) {
        const currentTime = this.timeFactory.now();
        return currentTime.diff(dateOfBirth, 'years');
    }
}
//# sourceMappingURL=AgeCalculator.js.map
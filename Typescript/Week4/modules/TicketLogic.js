import { GST_RATE, CONVENIENCE_FEE } from './Constants.js';
export class Ticket {
    passenger;
    baseFare;
    trainNumber;
    constructor(passenger, baseFare, trainNumber) {
        this.passenger = passenger;
        this.baseFare = baseFare;
        this.trainNumber = trainNumber;
    }
    calculateTotalFare() {
        const taxAmount = this.baseFare * GST_RATE;
        return this.baseFare + taxAmount + CONVENIENCE_FEE;
    }
    printTicketDetails() {
        console.log('---E-Ticket Confirmed---');
        console.log(`Passenger: ${this.passenger.name}(${this.passenger.age})`);
        console.log(`Train Number: ${this.trainNumber}`);
        console.log(`Total Fare: ${this.calculateTotalFare()}`);
        console.log(`Berth Preference: ${this.passenger.berthPreference ?? 'No Preference'}`);
    }
}

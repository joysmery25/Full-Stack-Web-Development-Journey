import {GST_RATE,CONVENIENCE_FEE} from './Constants.js';
import {Passenger} from './Passenger.js';
export class Ticket{
    constructor(
        public passenger:Passenger,
        public baseFare:number,
        public trainNumber: number
    ){}
    public calculateTotalFare():number{
        const taxAmount=this.baseFare*GST_RATE;
        return this.baseFare+taxAmount+CONVENIENCE_FEE;
    }
    public printTicketDetails():void{
        console.log('---E-Ticket Confirmed---');
        console.log(`Passenger: ${this.passenger.name}(${this.passenger.age})`);
        console.log(`Train Number: ${this.trainNumber}`);
        console.log(`Total Fare: ${this.calculateTotalFare()}`);
        console.log(`Berth Preference: ${this.passenger.berthPreference??'No Preference'}`);
    }
}
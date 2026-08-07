import {Ticket} from './TicketLogic.js';
import {Passenger} from './Passenger.js';
const traveller:Passenger={
    name:"Joys Mery",
    age:19,
    berthPreference:"Side Lower"
};
const myTicket=new Ticket(traveller,1200,12626);
myTicket.printTicketDetails();
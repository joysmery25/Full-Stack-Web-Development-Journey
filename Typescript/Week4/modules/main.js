import { Ticket } from './TicketLogic.js';
const traveller = {
    name: "Joys Mery",
    age: 19,
    berthPreference: "Side Lower"
};
const myTicket = new Ticket(traveller, 1200, 12626);
myTicket.printTicketDetails();

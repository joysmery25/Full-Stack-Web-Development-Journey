function getFirstPackage<T>(items: T[]): T {
    return items[0];
}
function wrapInBox<T>(item: T):{ parcel: T; timestamp:Date } {
    return {
        parcel: item,
        timestamp: new Date()
    };
}
const cities=["Mumbai","Chennai","Kolkata"];
const firstCity=getFirstPackage(cities);
console.log(`First City: ${firstCity}`);
const pincodes=[400001,600001,700001];
const firstPincode=getFirstPackage(pincodes);
console.log(`First Pincode: ${firstPincode}`);
interface Electronic{
    brand:string;
    model:string;
}
const phone: Electronic={brand:"Apple",model:"iPhone 14"};
const packedPhone=wrapInBox<Electronic>(phone);
console.log('Packed item: ${packedPhone.parcel.brand} at ${packedPhone.timestamp}');
const autoCity=getFirstPackage(cities);
"use strict";
function getFirstPackage(items) {
    return items[0];
}
function wrapInBox(item) {
    return {
        parcel: item,
        timestamp: new Date()
    };
}
const cities = ["Mumbai", "Chennai", "Kolkata"];
const firstCity = getFirstPackage(cities);
console.log(`First City: ${firstCity}`);
const pincodes = [400001, 600001, 700001];
const firstPincode = getFirstPackage(pincodes);
console.log(`First Pincode: ${firstPincode}`);
const phone = { brand: "Apple", model: "iPhone 14" };
const packedPhone = wrapInBox(phone);
console.log('Packed item: ${packedPhone.parcel.brand} at ${packedPhone.timestamp}');
const autoCity = getFirstPackage(cities);

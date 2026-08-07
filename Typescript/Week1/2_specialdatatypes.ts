let flexibleValue: any=10;
flexibleValue="Now I am a string";
flexibleValue=true;
let MysteryValue:unknown="Hello Vishnu";
if(typeof MysteryValue==="string"){
    console.log("Length of unknown string:"+MysteryValue.length);
}
function logNotification(message:string):void{
    console.log("ALERT: "+message);
}
logNotification("Environment Setup is completed successfully");
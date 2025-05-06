
// Never, Nullabe, Unknown types

{
    
// nullable type (manei holo null)
const searching = (value: string | null)=>{
    if (value) {
        console.log('searching!');
    } else {
        console.log('there is no nothing to search');
    }
}
searching('Meraj'); // correct
searching(null);    // if pass null then it says u assign string but pass null so error, therefore we need to union OR string or null to it



// Unknown type (bortomane atar type shomporke jani na tobe runtime e jeye(ba jokhon data pass korbo tokhon) kichukhon por atar type ta jante parbo )
// In JavaScript and TypeScript, typeof always returns a string —>
//  like 'string', 'number', 'boolean', 'object', 'undefined', etc. So you must compare with those string values.

const getSpeedInMeterPerSecond = (value: unknown)=>{
    // typeof e amra 'number'/'string', '' diyei check kori
    if (typeof value === 'number') {
        const convertedIntoSpeed = (value * 1000) / 3600;
        console.log(`The Speed is ${convertedIntoSpeed}`);
    }

    if (typeof value === 'string') {
        console.log(value);  // 1000 kmh^-1 //if i want only the number first part so make it number first
        // destructuring the array
        const [result, unit] = value.split(' ');
        // console.log(result); // becomes a array now print only the first part/index
        // console.log(typeof result); // '1000' akhono string lets make it number
        // const stringToNumber = Number(result); | or parseIn(result);
        // console.log(stringToNumber); // 1000
        const convertedIntoSpeed = (parseInt(result) * 1000) / 3600;
        console.log(`The Speed is ${convertedIntoSpeed}`);
    }
}
getSpeedInMeterPerSecond(1000);
// if we pass string then we have to do some work to print only number part from the whole string
getSpeedInMeterPerSecond(`1000 kmh^-1`);



// never type (jodi amon kono situation hoy j shee kokhonoi kono type return korbe na use this)
// ekhane throw error korate ata kono type return korbe na that means it return never(we can also define this our own)
const throwError = (msg: string): never =>{
    throw new Error(msg);
}
throwError('Gulti shee error');


}
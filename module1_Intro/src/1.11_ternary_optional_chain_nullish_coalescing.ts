

{

// ternary operator (for decision making ?);   // condition ? expressionIfTrue : expressionIfFalse;
// optional chaining (akta jinish ache nki sheta check kori err na ashar jonno) // clg(user.name?.first);
// nullish coalescing operator ((jodi null/undefined r opor depend kore kono akta (default value set korte hoy)decision nite hoy))


// ternary operator 
const age : number = 18;
const adult = age >= 18 ? 'adult' : 'not-adult';
console.log(`answer is ${adult}`); 



// nullish coalescing operator (jodi null/undefined) r opor depend kore kaj kore kono akta decision nite hoy)
const isAuthenticated = undefined;  
// const isAuthenticated = null; (or null dileo same result ashbe 'guest')
// const isAuthenticated = '';  // tahole kaj korbe na ja ache print korbe ?? use korle

const result1 = isAuthenticated ?? 'Guest';  // shudhu kaj korbe jokhon isAuthenticated = null/unf hobe else ja ache print korbe
console.log(result1);  
// obj r moddhe rekhe print korle (variable name : result) soho print hobe
console.log({result1});





// optional chaining

// data type decalared for the obj
type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?:string;
        // here parmanetaddress is not required
    }
}
// here is the obj
const user : User = {
    name: 'Meraj',
    address: {
        city: 'DHK',
        road: 'Awesome',
        presentAddress: 'DHK',
    }
}
//optional chaining (address?.user) ta use korle error ta ashbe na but kichu na thakle undefined ashbe
 const permanentAddress = user?.address?.permanentAddress;
 console.log({permanentAddress});
 // answer is undefined coz in my obj there is no permanentAddress


// now lets use nullish coalescing here if undefined found then show something here;
// if its found undefined then print not-found here to avoid undefined using nullish coalescing.
const permanentAddress2 = user?.address?.permanentAddress ?? 'No Parmanent Address';
console.log({permanentAddress2});

}
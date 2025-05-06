{
    // Interface (type alias r jat-bhai)
    // (shokol primitive r khetre amra type alias bebohar korbo, 
    // non-primitive r khetre type + interface 2tai use korte parbo)
    // chaile amra interface r sathe type add(extend) korte parbo + interface keo type hishebe use korte parbo
    // type alis k extend korbo & diye, interface k extend korbo extends diye!!
    // (interface e shob obj r vhitore aktu diff bhabe likhbo) compararing to type alias

    // declaring type using type alias
    type User1 = {
        name : string ;
        age: number;
    }
    // declaring type using Interface (which is for non-primitive (obj, array)
    interface User2 {
        name: string;
        age: number;
    }


    // const user1 : User2 = {   // we can also use User2 interface here
    const user1 : User1 = {
        name: 'sobuj',
        age: 100,
    }

    // bcoz we can create type like this for primitive but for obj, arr we cant do like this
    type RollNumber = number;
    // interface RollNumber {
    // }
    // we cant do like this bcoz interface is a obj (for non-primitive data type obj,arr) 




    // another exmple using type and extended that type with another attribute 
    // type alias kore obj e kono akta property barate chaile (& intersection) use korte hoy
     type User = {
        name : string ;
        age: number;
    }
    // we can add more type attr to it (extended type) User + {role:string}
    type UserwithRole = User & {role? : string};

    // now declare value here for this extended type
    const UserData : UserwithRole  = {
        name : 'Sobuj',
        age: 100,
        role: 'admin',
    }


    
    // as like this we can do this using interface as like this extended type alias!!
    // interface User2 {
    //     name: string;
    //     age: number;
    // }
    // ai interface r nam dilam UserwithRole2 and externd korlam User2(jeta arekta interface) + 
    // + add korlam arekta property
    interface UserwithRole2 extends User2 {
        role: string;
    }
    // now we can use this extended interface here
     const Userdata : UserwithRole2  = {
        name : 'Sobuj',
        age: 100,
        role: 'guest',
    }



    // amra chaile type keo extend kore interface e use korte pari, here is how
    type Userdata = {
        name : string ;
        age: number;
    }
    interface UserDataInterface extends Userdata {
        role : string;
    }

    // now we can assign value/use that interface here
    const UserdatawithRole : UserDataInterface = {
        name : 'sobuj',
        age: 100,
        role: 'admin',
    }






    // interface -> (non-primitive) object, array, function
    // now we will see how we can use interface in array also

    // declare type using type alias (Now interface for Array)
    type Roll1 = number[];
    const numberArray : Roll1 = [1,2,3,4];
    
    // we can do this using interface also in array.
    // index gula nije number obhiously :  index gula hold o kortece number 
    interface Roll2 {
        [index : number] : number;
    }
    const numberArray2 : Roll2 = [1,2,3,4];
                               // 0 1 2 3

                               


    // now interface for function how we use it
    // how we do it using type alias (parameter gula number hobe, return o korbe number)
    type Add = (num1: number, num2: number) => number;
    const add : Add = (num1, num2)=> num1 + num2;

    // WE can also do this using iterface istead of type alias. (interface e shob obj r vhitore aktu diff bhabe likhbo)
    interface Add2 {
        (num1: number, num2 : number) : number;
        // jehetu interface akta obj tai etake (item : item) ebhabe colon diyei likhte hobe. 
    }
    const add2 : Add2 = (num1, num2)=> num1 + num2;
    // like this we can use it here 

}
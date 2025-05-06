{

// generic type (type k parameter hishebe recieve korbo atai kaj!!) (generic mane holo generalize kora fela)
// (generally kora/dynamic kora, amrdr moto type toyri korte pari -> sheta re-use korte pari)
// ekhane type toyri krochi generic type r shahajje (interface r maddhomeo generic type create kora jay next e ache)
// (generic type holo akta special type jetay amra type pass korte pari)

// example of array generic type 
const rollNumbers : number[] = [1,2,3,4,5];
// we can also declare this like this generic type using (Array<typeName>) here is general type
const rollNumbers2 : Array<number> = [1,2,3,4,5];



// now we want dynamic this and re-use this.
type GenericArray = Array<number>;
// const rollNumbers2 : Array<number> = [1,2,3,4,5];
const rollNumbers3 : GenericArray = [1,2,3,4,5];
// then we can use it here like this 

type GenericArray2 = Array<string>;
const rollNumbers4 : GenericArray2 = ['1','2','3'];
// here if write  Array<string>  we can use that type into that type of array



// NOTE: BEST practice is to name this as (GenericArray3<T> = Array<T>) karon parameter hishebe type padhacchi
// (Array<string>)tobe amra just ai jinish ta k dynamic korle atake shob jaygay use korte pari like this
// now we can pass the param & use it anywhere
type GenericArray3<param> = Array<param>;
const DynamicTypeArray : GenericArray3<number> = [1,2,3,4];
// GenericArray3<number> number k pass korlam, str, boolean shob pass kore use korbo

// just call the generic type and pass as our expected type
type GenericArray4<T> = Array<T>;
const dynamicArray : GenericArray4<string> = ['1','2','3'];




// array of object type create using generic type
// type GenericTypeExample = string[];  // instead of this create this
type GenericTypeExample<T> = Array<T>;  // instead of that create this both side take param/T

// now use this dynamic generic type in your data (direct obj likhe jay, gd practice to specify each property)
// but best practice is specify all the properties type
// const user: GenericTypeExample<object> = [
const user: GenericTypeExample<{name:string,age:number }> = [
    {
        name: 'Sobuj',
        age: 100,
    },
    {
        name: 'Meraj',
        age: 100,
    },
    // {
    //     role: 'admin',
    // }
]




// generic tuple; 
// now create tuple using generic
// here is the normal tuple
const manush : [string,string] = ['X','Y'];
             // tuple (type r prottekta k array index onujayi define kore dibo)


// generic tuple
// now lets generalize this, create generic type for this tuple ([string,string]) [tuple,tuple]
// 2ta parameter recieve korbe nam dilam X,Y (ai tuple ta k amra re-use korte parbo 2ta param pass kore)
type GenericTuple<X,Y> = [X,Y];
const manusName : GenericTuple<string,string> = ['X','Y'];

// anther xmple
// const UserWithID: GenericTuple<number, object> = [1,2,3, {name: 'sobuj', email: 'a@gmail.com'}];

// to be more specefic with the object property ebhabe hobe (explicit kore likhlam)
const UserWithID: GenericTuple<number, {name: string, email: string}> = [123, {name: 'sobuj', email: 'a@gmail.com'}];



}
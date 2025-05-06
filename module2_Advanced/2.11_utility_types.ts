{

    // Utility type
    // Pick type (pick utility -> tule niye asha)
    // Omit type (Omit utility -> pick r ulta(bad dewya))
    // specific kono akta type theke kono akta property k tule niye asha hoy pick diye
    // bole dite hobe kar kach theke ki pick korba.

    type Person = {
        name : string,
        age: number,
        email?: string,
        contactNo: string;
    }
    // now pick a specefic type's property using pick.
    type Name = Pick<Person, 'name'>
    // multiple attr k pick korte chaile ebhabe | dite pari.
    type NameAge = Pick<Person, 'name' | 'age'>



    // Omit type (jokhon kono type theke kichu attr bad dite chaibo tokhon use korbo)->name,age bad
    type contactInfo = Omit<Person, 'name' | 'age'>;
    


    // Required Utility type(jokhon amra chaibo akta type r shob attr niye new akta type hok)
    // and shob optional thakuk/required thakuk shob property k required kore dibe
    type PersonRequired = Required<Person>;



    // Partial Utility type (jekhane amra chaile akta type shob attr k optional(not required kore dite pari))
    type OptionalPartial = Partial<Person>;


    // Readonly (jokhon mone hobe kono akta obj r kono akta change kora jabe na tokhn use korbo)
    const person1 : Person = {
        name: 'sobuj',
        age: 20,
        contactNo: '123',
    }
    person1.name = 'meraj';
    // akta obj value amra change korte partechi amra chai (ata kora jabe na then user Readonly)
    type ReadonlyObj = Readonly<Person>
    // Person r attr gulake Readonly korlam akhn r change kora jabe na.
    const person2 : ReadonlyObj = {
        name: 'sobuj',
        age: 20,
        contactNo: '123',
    }
    person2.name = 'meraj';   // cant do that



    // Record type (jokhon amra dynamically akta obj r key r type, key value type declare korbo)
    // <string,string>  // name: 'sobuj'  // obj r key gula string hoy alwys // array key gula hoy number
    type MyObj = Record<string,string>
    const obj1 : MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 6,         // cant do that shudhu string bole dichi record e
    }
    // ebhabe amra Record use kore key:value gula ki type hobe bole dite pari
    

    // NOTE: !imporatan -> to make it dynamical, amra jani j obj niye kaj korte gele obj r key gula string hoy must,
    // tai Record r prothom ta string hobe must second ta amra unknown use korte pari tahole jekono string: jekono value (num,string,boolean) hishebe use korte parbo
    // tokhon ai obj key:value (obj r key gula alws string hoy jani, porer ta jani na jah dibo nibo)
    const EmptyObj : Record<string,unknown> = {};
    // ebhabe jokono value use korte parbo shei obj e
    const EmptyOb2 : Record<string,unknown> = {
        a: 'sobuj',
        b: 234,
        c: true,
    };
}
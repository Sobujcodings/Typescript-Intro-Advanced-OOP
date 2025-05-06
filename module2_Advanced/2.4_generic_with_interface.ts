{

// generic with interface (generic type holo akta special type jetay amra type pass korte pari)

// array of object type create using generic type. (type GenericTypeExample = string[]);  
type GenericTypeExample<T> = Array<T>;  // instead of that create this both side take param/T


//here this portion onk boro obj o hote pare tai atake amra akta interface type baniyeo felte pari
interface User {
    name : string;
    age: number;
}

// now use this dynamic generic type in your data (direct obj likhe jay, gd practice to specify each property)
// const user: GenericTypeExample<{name:string,age:number }> = [  (instead of this)
const user: GenericTypeExample<User> = [
    {
        name: 'Sobuj',
        age: 100,
    },
    {
        name: 'Meraj',
        age: 100,
    },
]



// another main example of interface -> generic 
// 2nd arg keo na padhale default value hishebe null dhore nibe tahole r na padhale err dibe na
interface Developer<T, X = null> {
    name : string;
    computer: {
        brand: string;
        model : string;
        realeaseYear: number;
    };
    // this parameter only using for smartWatch;
    smartWatch: T;  // type ta pore dibo dynamically when we insert the value we will pass it here
    // smartWatch: {brand: string, model: string, display: string}; //pass korar por ai jinish ta amon hoye jabe (akhn dynamic ache jodio only T)
    bike?: X;
}

// here we will pass that T params to that interface when we assign the type to it.
// if we use that params only for smartwatch then only pass what smartwatch propertys type is.
// jehetu bike r data parameter e ache kintu pass kortechi na tai null diye dibo apadoto
const poorDeveloper : Developer<{brand: string, model: string, display: string}, null> = {
    name: 'X',
    computer: {
        brand: 'Asus',
        model: 'abc',
        realeaseYear: 2013,
    },
    smartWatch: {
        brand: 'Emilab',
        model: 'abc',
        display: 'OLED',
    }
}

// here is the type we pass for smartwatch therefor pass those type only
const richDeveloper: Developer<{brand: string,model:string,display:string,refreshRate:string}> = {
    name: 'X',
    computer: {
        brand: 'Asus',
        model: 'abc',
        realeaseYear: 2013,
    },
    smartWatch: {
        brand: 'Apple',
        model: 'abc',
        display: 'OLED',
        refreshRate: '120hz'
    },
}




// for more clean code, we can optimize the previous obj using type or interface
// {brand: string,model:string,display:string,refreshRate:string}
// we can declare type/interface for this and use this here
type EmilabWatch = {
    brand: string,
    model:string,
    display:string,
    refreshRate:string
};

// we can also create interface instead of type alias for this lets do it
interface EmilabWatchInterface {
    brand: string,
    model:string,
    display:string,
    refreshRate:string
}

// bike r attribute gula arg hishebe pass korte hobe but beshi text boro howar karone type dec kore likhe dei
type Yamahabike = {
    model: string;
    engine: string;
}

// const richDeveloper2: Developer<{brand: string,model:string,display:string,refreshRate:string}> = {   // normal obosthay jamon dekhay
// const richDeveloper2: Developer<EmilabWatch> = {          // using type alias
const richDeveloper2: Developer<EmilabWatchInterface, Yamahabike> = {    // using interface type
    name: 'X',
    computer: {
        brand: 'Asus',
        model: 'abc',
        realeaseYear: 2013,
    },
    smartWatch: {
        brand: 'Apple',
        model: 'abc',
        display: 'OLED',
        refreshRate: '120hz'
    },
    bike: {
        model: 'Yamaha',
        engine: '100cc'
    }
}


}
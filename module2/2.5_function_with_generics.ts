{

    // function with generics

    // parameter nibe string, return o korbe string (but ata static ekhane shudhu string e ashbe
    // atake dynamic korte hole dynamically ai type k assign korte hobe using generics !!)
    const createArray = (params : string) : string[] =>{
        return [params];
    }
    const result1 = createArray('Bangladesh');
    // works correctly




    // if we want to dynamic this using generics (so that this function can take any type not just string)
    // <T> bracket diye receive korbo, param r nam dibo recieve T kei, return korbe shei T r array
    // const createArray = (params : string) : string[] =>{
    const GenericType = <T> (param : T): T[] =>{
        return [param];
    }

    const result2 = GenericType('Bangladesh');
    // just bracket a arg r age shei type ta diye dibo <string>
    const result3 = GenericType(<string>('Bangladesh'));
    const result4 = GenericType(<boolean>(true));


    // for clean code (dont use just object, mention all the attr:type also)
    type User = {
        id: number;
        name: string;
    }
    // !!passing obj to that gereric function (for that dynamic characteristic we can pass anything now just pass type and value)
    const resGenericObj = GenericType<User>({id: 123, name: 'sobuj'});
    // but its not a good approach, object dile amra jekono obj dite pari, chile aro data add o korte pari, err dibe na so ata hobe na fixed kore dibo ki ki type thakbe ai obj e




    // creating another example using tuple (passing different type of data in the generic function)
    // const GenericType = <T> (param : T): T[] =>{
    const GenericTypeTuple = <T,Q> (param1: T, param2 : Q): [T,Q] =>{
        return [param1, param2];
    }

    // now we can pass 2 arg, with different type like for 1st arg its string, for 2nd its a obj also
    const resultGenerics = GenericTypeTuple('Bangladesh', 1971);
    // explicitly bole dite pari j kon args r kon type hobe fix kore
    const resultGenerics2 = GenericTypeTuple<string,number>('Bangladesh', 1971);
    // 2nd arg e amra chaile obj o padhate pari ebhabe.
    const resultGenerics3 = GenericTypeTuple<string,object>('Bangladesh', {name: 'BD'});
    // ebhabe obj likhata gd practice nah, explicit kore explain kore diba ki type hobe attr gula
    const resultGenerics4 = GenericTypeTuple<string,{name: string}>('Bangladesh', {name: 'BD'});
    




    // another exmaple with function (T mane type -> dynamic type)
    const addCourseToStudent = <T>(student: T)=> {
        const course = 'Next level Web development';
        return {...student, course};
    }
    const student1 = addCourseToStudent({name: 'X', email: 'a@gmail.com', devType: 'NLWD'})
    const student2 = addCourseToStudent({name: 'X', email: 'a@gmail.com', hasWatch: 'Apple'})

}
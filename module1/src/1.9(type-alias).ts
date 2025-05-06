{
  // name Alias (akta variable k arekta nam dite pari, topic discussed in previous file)
  // type Alias (bar bar ak same attr na likhe akta jaygay(type likhe) ai attr gula bar bar use korte pari)

  // create a type. 1st letter is capital(convention) (so that we can use that anywhere)
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };


  // instead of the type assigning again n again we can assign it once then use it anywhere
  const student1: //   {
  //     name: string;
  //     age: number;
  //     gender: string;
  //     address: string;
  //   }
  Student = {
    name: "Sobuj",
    age: 40,
    gender: "male",
    address: "DHK",
  };


  // as well as for student 2,3 n all
  const student2: //  {
  //   name: string;
  //   age: number;
  //   gender: string;
  //   contactNo: string;
  //   address: string;
  // }
  Student = {
    name: "Meraj",
    age: 50,
    gender: "male",
    contactNo: "0170000000",
    address: "Dhaka",
  };

  // not just for the obj, we can use this type alias for string, number, boolean n all
  // just create a type then use it mulpletimes
  type UserName = string;
  type IsAdmin = boolean;
  // const userName : string = 'Sobuj'; (instead of this)
  const userName: UserName = "Sobuj";
  const isAdmin: IsAdmin = true;

  
  // here is how we can use this type alias in obj, function,string, number anywhere
  type NumberType = number;
  const func = (num1: NumberType, num2: NumberType): NumberType => num1 + num2;

  // also we can do like this for declaring function type (this is recomended,efficient)
  type add = (num1: number,num2:number)=> number;      // return o korbe number (structure is here)
  const Function: add = (num1, num2) => num1 + num2;  // tokhon amra kichui dibo na r declare korar drkr nai just likhbo atar full func'r type hobe add
}

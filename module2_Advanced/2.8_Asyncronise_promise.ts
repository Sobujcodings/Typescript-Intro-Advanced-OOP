{
  // promise

  // create a custom made promise (createPromise func ta resolve,reject return korbe)
  // but createPromise akhn unknown type return kortece, atake specfic korte chaile we can use generic type(where i know better what to be declared here)
  // const createPromise = () => {
  // promise string korar por ekhaneo bole dite pari j tmi akta (promise string) type return korba,not a normal string
  // Promise<{something: 'something'}>
  const createPromise = (): Promise<string> => {
    // return new Promise((resolve, reject) => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      // we can also return object here (tokhon Promise<{something: 'something'}>) airokom type hobe string na hoye
      // const data: { something: string } = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to laod data");
      }
    });
  };

  // calling the promise function from here(one way to call it using ->  .then.catch/async await)
  // we can also decalare type here which Promise string type
  //   const showData = async () => {
  // Promise<{something: 'something'}>
  const showData = async (): Promise<string> => {
    const data = await createPromise();
    // console.log(data);
    return data;
  };

  showData();

  // amra ekhane ato gula type // Promise<{something: 'something'}> use na kore akta type
  // baniye niye barbar atake re-useable korte pari (instead of the full obj again declare)
  type something = { something: string };
  Promise<something>;

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };




  // fetch kore server theke data ene dekhabo akhn.
  // response.json() r agee await use na korle pending dekhabe result.
  // const getTodo: () => Promise<void> (promise ta void return kortece tai atake ki return korbe ki ki attr and type sheta baniye use korte pari)
  // tokhon shee promise todo type ta return korbe
  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
    // console.log(data);
  };

  // getTodo itself is a promise so you have await here (karon oi puratai akta promise return kortece so we have to wait)
  const run = async () => {
    const data = await getTodo();
    console.log(data);
  };
  run();



}

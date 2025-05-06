// function
// Normal function
// Arrow function

// jate same variable onno file e likhle error na ashe(karon akhn she shob ts k globally chinta kortece)
// tai akta scope r moddhe rekhe dilm prottek ta file k
{
  // no data type added so we can pass any data type to it
  function add(num1, num2) {
    return num1 + num2;
  }
  add(2, true);
  // thats not typescript has created for here is why (:number) that means ata return o korbe number
  // num2: number = 10 thats the default value
  function addvalue(num1: number, num2: number = 10): number {
    return num1 + num2;
  }
  addvalue(1, 3);


  // Arrow function
  // (default num2 value is 1) (this function also return number type)
  const addArrow = (num1: number, num2: number = 1): number => num1 + num2;
  addArrow(1, 5);


  // object --> function = method (kono obj r vhitore funtion thakle shetake amra method boli)
  const poorUser = {
    name: "Sobuj",
    balance: 0,
    // addBalance(balance){
    //     return this.balance + balance;
    // }
    addBalance(balance: number): string {
      return `My New Balance is: ${this.balance + balance}`;
    },
  };
  const balance = poorUser.addBalance(20);
  console.log("balance", balance);

  
  // Array (map traversal)
  const arr: number[] = [1, 3, 10];
  // (return korbe number ==> prottek ta hote hobe number)
  const newArray = arr.map((element: number): number => element * element);
}

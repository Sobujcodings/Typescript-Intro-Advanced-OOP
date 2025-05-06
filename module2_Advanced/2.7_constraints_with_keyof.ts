{
  // generic constraints uisng keyof (mane Union jkono akta value hobe)
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  // manully (jkonota) creating a owner type that has the Vahicle type attributes by manullay
  type Owner = "bike" | "car" | "ship";

  // we can do this by the keyword (keyof) (tahole vehicle r shob key niye o type baniye nibe)
  // tobe keyof use korle union hobe mane vehicle r key gular jkono tar jonno ami value assing korte parbo
  type Owner2 = keyof Vehicle;

  // use this type here (using it also for mannual type)
  const person1: Owner = "car";

  // bike name a value assign korlam shei dedicated key diye. (Owner2 mane jokono vahicle r key k ami use korte parbo ekhane)
  const person2: Owner2 = "bike";   // key ta k string diye likhte hobe
  console.log("person2", person2);



  // akhn amra chai akta function likhbo sekhene akta obj,key padhiye dibo she amke shei obj r key ta return korbe dynamically
  const user = {
    name: "Sobuj",
    age: 26,
    address: "DHK",
  };
  // we can get it like this
  //   user['name']
  //   user.name

  // using function we can do it too(pass a obj and key it will return that key)
  // Y e (jekono akta) jei attr thakte parbe tar option dilam, and X r moddhe Y r key r type ta thakte hobe
  // Y ta hobe X r key gular akta must
  // const getPropertyValue = (obj : object, key : string) => {
  // const getPropertyValue = <X , Y extends "name" | "age" | "address">(
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    // ebhabe hobe na karon ami to akta wrong key o padhate pari jeta user e nai
    // tai decalar generic type & shekane fixed kore deo j agular jkono akta attr thaktei hobe must(using constraints)
    return obj[key];
  };

  getPropertyValue(user, "name");
  //   getPropertyValue(user, "abc"); tokhon ekhane ulta palta kno property boshate parbo na
}

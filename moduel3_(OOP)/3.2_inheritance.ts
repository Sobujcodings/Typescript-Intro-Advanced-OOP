{
  // ✅ inheritance in oop using ts.
  // ✅ def: kono akta cls r kono akta property/method onno akta cls pele (jei cls theke pay- > parent class, je recieve kore she child cls)
  // tobe child class constructor dewa lagbe noyto parameter recieve korbe kihabe.
  // child k extend korbo parent theke. (tokhon main property gula parent cls e rakhlei hobe, child e just sheigulai use korbo constructor diye call kore ene initialize kore)
  // tobe child cls r constructor e age super call korte hobe (karon parent r constructor k age call korte hobe taholei parent e data gulo initiailize hobe then child sheta use korte parbe tai age parent constructor k call koro then tmr kaj) aijonno super use kori child e
  // ✅ The child class must call the parent’s constructor first to initialize the parent’s part of the object.
  // Before the child object can exist properly, the parent’s internal setup must be completed — this setup is done via the parent’s constructor.

  // ✅ Because the parent constructor needs them to do its job (set name, age, etc.)
  // Is it “passing data to parent”?	Not exactly. It's more like giving the parent constructor what it requires to function.
  // parent theke initialize hoye ashtece (tahole r bar bar initialize kora laglo na child k akbar parent likhe shekahne iniatialize kore bar bar extend kore use korlie parbo)
  // ✅ tahole aro shubidha hobe jei kaj gula tmr common shob gulatei lagbe shegula tmi parent e kore rakhab reusebale korar jonno r jegula alada shegulo alada child cls baniye korba tahole chaile shei global parent r property, method gulao tmi child cls e use korte partecho + child cls eo tmi alada property + method use korte partecho
  // like hiring a base employee before creating a specialized manager.
  // parent k property gula initialize korar jonno,child theke super(name,age,address) call kore child r property gula padhiye dibo parent e
  // ✅ karon amra child k onek shomoy alada kore call korbo but child to parent r theke initliaze hoye ashtece tai tai parent e padhabo inistailize hoye ashbe tarpor sheta niye ami kaj korbo
  // ✅ kono property jodi child e ache kintu parent e nai shetar jonno super to call korboi common gular jonno + jeta nai shetake alada kore initialize kore dibo normllay this.name = name ebhabe


  // oop - inheritence
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }


  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("Mr. student", 20, "Uganda");
  // student1.



  class Teacher extends Person {
    designation: string;
    
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }
  const teacher = new Teacher("Mr. teacher", 40, "Uganda", "professor");
  // teacher.
  //
}

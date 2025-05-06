{
  // ✅ Core Principles of OOP:
  // Encapsulation
  // Group data and behavior together into objects.
  
  // Abstraction
  // Hide complex details and expose only the necessary parts.
  
  // Inheritance
  // Create new objects from existing ones (e.g., Dog inherits from Animal).
  
  // Polymorphism
  // Objects can take on multiple forms (e.g., a makeSound() method works differently for Dog and Cat).


  // OOP -> class
  // cls jokhon likhba tokhon constructor call kore value gula dite hobe must
  // instance(object)
  // properties (variables) & methods (functions)
  // class r property k amra this diye(this.something) diye mention korbo.


  // this part below animal is for ts only type declaration
  class animal {
    // jehetu ai property gulai pura class e globally thakbe access korte parbo tai aguloke explicitly alada kore public likhe dilei pari na korleo hobe bujhar shubidharte ar ki
    public name: string;
    public species: string;
    public sound: string;
    // cls e constructor(a speacial method/function) call korte hoy sekhane paramter gulo pass kore this.someting mane initialize korte hoy parms guloke
    // constructor used to initialize the object's properties. (automatically called)
    // 3ta paramter recieve kore globally set kore dilo, this.name,sepecies,sound diye.
    // !!ekhane animal cls k new animal likhe call korle(new instance obj toyri korle) constructor shei data recieve kore globally this diye shei parameter gulo set kore dey( name: string; species: string; sound: string; ekhanae set kore dibe agulai ekhane this k refer kore)
    constructor(name: string, species: string, sound: string) {
      this.name = name; 
      this.species = species;
      this.sound = sound;
    }

    // lets create method(function for this animal cls) where we may add logic to it.
    // ekhane normal function use korte hobe karon arrow fuction e this kaj kore na.
    makeSound(){
        console.log(`THE ${this.name} says ${this.sound}`);
    }
  }


  // akhn ai cls theke kichu object(instance) toyri korbo
  // class k use kore instance(obj) create korte hoy tar jonno new use korte hobe
  const dog = new animal('Gernam shepard', 'Dog', 'Ghew Ghew');
  console.log(dog);
  // animal cls(blueprint) use kore new akta object toyri kore fellam. output hobe amon  // animal { name: 'Gernam shepard', species: 'Dog', sound: 'Ghew Ghew' }


  // makesound() method k call kore use korbo from animal class
  // (cat nam e arekta instance/obj banalam using that blueprint/class so that property is same behaibour is diff)
  const cat = new animal('Persian bhai', 'cat', 'meaw meaw');
  cat.makeSound();
  dog.makeSound();
  // from that cat/dog cls calling the makesound() method to print or get logic from that too.



  // !!important using (parameter propertys) (more opptimized way to write class now in ts is)
  // cls r property define o kora lagbe na + constructor e initialize r kaj o kore dibe.
  class animal2 {
    // parameter property use korle (constructor e call r shomoy use korle r alada kore agulo define kora lagbe na atai necher property gula and this.name=name agulo o kora lagbe na)
    // public name: string;
    // public species: string;
    // public sound: string;

    // tokhon onekta easy,clean hoye jay ato property define kora lagbe na just use public and parameter & type
    constructor(public name: string,public species: string,public sound: string) {
    //   this.name = name; 
    //   this.species = species;
    //   this.sound = sound;
    }
   }


}

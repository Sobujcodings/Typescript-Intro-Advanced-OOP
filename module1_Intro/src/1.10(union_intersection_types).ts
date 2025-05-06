{
  // union types (OR | ). js e or ditam 2ta ||, ts e akta |
  // intersection mane holo shob property gula (AND && property)

  // strign use korle shetake bolbo (string literal type)
  // !!ekhane amra data type o dite pari ba iccha moto string o likhte pari,(data type dile shetai maintain korte hobe, r value dile shei value exact milte hobe else err)
  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  // tar mane newDeveloper r value shudhu matro 2tar akta hote parbe.
  const newDeveloper: FrontendDeveloper = "fakibazDeveloper";
  
  // atar data type o fixed kore dite pari
  type FrontendDeveloper2 = string | number;
  // const newDeveloper2 : FrontendDeveloper2 = null;   // null dile err dibe karon ami bolchi str/num hobe
  const newDeveloper2 : FrontendDeveloper2 = 2802;



  // another example
  type User = {
    name: string;
    email?: string;
    gender: 'male' | 'female' ;
    bloodGroup: 'O+' | 'A+' | 'AB+' ;
  }
  // akhn ai same type ta amra use korbo, kono value/type r sathe amdr obj r type/value na millei error dibe
  const user1 : User = {
    name: 'Sobuj',
    gender: 'male',
    bloodGroup: 'A+' ,
  }


  // amra chaile 2ta type eo or | hishebe use korte pari, je ai type noyto ai type r value holei hobe
  type Frontend = "fakibazDeveloper" | "juniorDeveloper";
  type Fullstack = "frontendDeveloper" | "expertDeveloper";

  // 2ta type k use kore arekta type baniye felte pari
  type Developer = Frontend | Fullstack;




  // Intersection (shob property gula aksathe chole ashbe) AND & hoye
  type FrontendEnginner = {
    skills: string[];
    designation1: 'Frontend Developer';
  }
  type BeckendEnginner = {
    skills: string[];
    designation2: 'Beckend Developer';
  }
  type FullstackDeveloper = FrontendEnginner & BeckendEnginner;

  // now use this type in a variable (mane frontend,beckend 2tar shob characteristic gulo thakte hobe)
  const FullstackEngineer : FullstackDeveloper = {
    skills:  ["Html",'CSS', 'EXPRESS'],
    designation1: 'Frontend Developer',
    designation2: "Beckend Developer",
  }

}
{
  // generic constraint (mane holo force kora, jokokhn tmi akta role/kono akta kichu force korba)
  // extend kore atake constaints(fixed) kore dilam atai holo constraints.

   // exmaple of generics type with function (T mane type -> dynamic type)
   // ekhane amra chaile constraints use kore bole dite pari j atay must 3ta(beshi padhaleo shomossa nai)attr thakbe ai obj e.
   // const addCourseToStudent = <T>(student: T) => {
  const addCourseToStudent = <T extends {id: number; name: string; email:string}>(student: T)=>{
    const course = "Next level Web development";
    return { ...student, course };
  };

  // here the prblm is we can decalare any obj to this generic type X (no fixed obj attr provided)
  // which isnt ok,therefore std must have these 3 qualities (if we inforce this we need constraints)
  const student3 = addCourseToStudent({emni: 'emni'});

  const student1 = addCourseToStudent({
    id: 1,
    name: "X",
    email: "a@gmail.com",
    devType: "NLWD",
  });
  
  const student2 = addCourseToStudent({
    id: 1,
    name: "X",
    email: "a@gmail.com",
    hasWatch: "Apple",
  });
}

// object destructuring
// array destructuring

// object destructuring
{
  const user = {
    id: 241,
    name: {
      firstName: "",
      MiddleName: "",
      lastName: "",
    },
    contactNo: "01620230948",
    address: "Uganda",
  };

  // lets destruct data from thsi obj
  const {
    contactNo,
    name: { firstName },
  } = user;

  // tobe ekhene amra type declare korte parbo na, ekhane kichu : declare kora mane shetake arekta variable e assign kora
  // ekhane ts automatically detect kore ney j contactNo, firstName ki type hobe
  // const { contactNo : string , name: {firstName : string } } = user;  XXX

  // we can assign this into a variable like this (where the variable name is changed)
  const {
    contactNo: contack,
    name: { firstName: first },
  } = user;


  
  // Array destructuring
  const myFriends = ["chandler", "joey", "ross", "rachel", 'phoebe'];

  const [a,b,c,d] = myFriends;                   // we can destructure like this
  const [, , c] = myFriends;                    // we can destructure like this too if we only want 3rd number item
  const [, , bestfriend, ...rest] = myFriends; // we wanna destruct 3rd and rest after the 3rd item
}

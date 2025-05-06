// Reference type --> object

// jei attr gula type e thakbe shegula required field
const user: {
  // jodi amra kono fixed value chai je ai attr e ai data tai thakte hobe fixed else show error
  readonly company: "Programming Hero"; // --> (literal types).now Programming Hero becomes a fixed type. (readonly is immutable)
  firstName: string;
  middleName?: string; //question mark means optional(if its found then its string else undefined)
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Meraj",
  // middleName: "Islam",
  lastName: "Sobuj",
  isMarried: false,
};

// user.company = 'mi'  X (read-only property)
console.log("companyName", user.company);

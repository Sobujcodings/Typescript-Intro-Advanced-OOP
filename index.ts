// 1 (done -> final check)
function formatString(input: string, toUpper?: boolean) {
  if (toUpper === true || toUpper === undefined) {
    const lowerCase = input.toUpperCase();
    console.log(lowerCase);
    return lowerCase;
  } else {
    const upperCase = input.toLowerCase();
    console.log(upperCase);
    return upperCase;
  }
}

// 2 (done -> final check)
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  // console.log(items);
  items.forEach((element) => {
    if (element.rating >= 4) {
      console.log(element);
      return element;
    }
  });
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// 3 (do it) generic function
function concatenateArrays<T>(...arrays: T[][]) {
  let result: T[] = [];
  for (const array of arrays) {
    result = result.concat(array);
  }
  console.log(result);
  return result;
}

// 4
class Vehicle {
  private make: string;
  private year: number;
  getInfo() {
    console.log(`"Make: ${this.make}, Year: ${this.year}"`);
  }
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
}
class Car extends Vehicle {
  private model: string;
  getModel() {
    console.log(`"Model: ${this.model}"`);
  }
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");

// 5
function processValue(value: string | number): number {
  if (typeof value === "string") {
    console.log(value.length);
    return value.length;
  } else if (typeof value === "number") {
    console.log(value * 2);
    return value * 2;
  } else {
    throw new Error("Invalid Input: should be a string or number");
  }
}

// 6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let maxProduct = products[0];

  products.forEach((product) => {
    if (product.price > maxProduct.price) {
      maxProduct = product;
    }
  });
  console.log(maxProduct);
  return maxProduct;
}

// 7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

// 8
async function squareAsync(params: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (params < 0) {
      return reject(new Error("Negative number not allowed"));
    } else {
      setTimeout(() => {
        const squareNumber = params * params;
        resolve(squareNumber);
      }, 1000);
    }
  });
}

function formatString(input: string, toUpper?: boolean) {
  if (toUpper === true || toUpper === undefined) {
    const lowerCase = input.toUpperCase();
    return lowerCase;
  } else {
    const upperCase = input.toLowerCase();
    return upperCase;
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredItems = items.filter((item) => item.rating >= 4);
  return filteredItems;
}

function concatenateArrays<T>(...arrays: T[][]) {
  let result: T[] = [];
  for (const array of arrays) {
    result = result.concat(array);
  }
  return result;
}

class Vehicle {
  private make: string;
  private year: number;
  getInfo() {
    return `"Make: ${this.make}, Year: ${this.year}"`;
  }
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
}
class Car extends Vehicle {
  private model: string;
  getModel() {
    return `"Model: ${this.model}"`;
  }
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    throw new Error("Invalid Input: should be a string or number");
  }
}

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  let max = products[0];
  products.forEach((product) => {
    if (product.price > max.price) {
      max = product;
    }
  });
  return max;
}

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

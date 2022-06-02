// const person: {
//   age: number;
//   name: string;
// } = {
// const person: {
//   age: number;
//   name: string;
//   hobbies: string[];
//   role: [number, string]; // bu tuple type deyiladi har bir array elementiga type berish mumkin
// } = {
//   age: 20,
//   name: "Maximilian",
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// let favoriteActiveities: string[];
// bu array ga faqatgina string tipidagi malumotlarni kirgazish kerak
//  boshqa tipdagi malumotlarni qabul qilamaydi
//  any tipida hohlagan tipdagi malumotni array ga kirgazish mumkin boladi
// let favoriteActiveities: any[];
// favoriteActiveities = ["Sports", 1];

// person.role.push("admin");
// console.log(person.role);
// console.log(person.name);

// person.role[1] = 10;

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

// class Greeter {
//   greeting: string;

//   constructor(message: string) {
//     this.greeting = message;
//   }

//   greet(): string {
//     return this.greeting;
//   }
// }

// let greeter = new Greeter("Hello World");
// console.log(greeter.greet());

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  age: 20,
  name: "Maximilian",
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is author");
}

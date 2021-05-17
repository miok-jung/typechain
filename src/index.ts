class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const narin = new Human("Narin", 19, "female");

const sayHi = (person: Human): string => {
  return `Helo ${person.name}, you are ${person.age}, you are a ${person.gender}!!!`;
};
console.log(sayHi(narin));
export {};

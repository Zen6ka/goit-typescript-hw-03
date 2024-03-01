/*
  Ви створюєте гру, де є персонажі з різними ролями.
  Зараз ви працюєте над класом Wizard, який має реалізовувати два інтерфейси - ICharacter та ISpellCaster.

  Визначте інтерфейси ICharacter та ISpellCaster так, щоб вони відповідали вимогам класу Wizard. 
  Інтерфейс ICharacter повинен включати властивості name і level, і навіть метод introduce і levelUp. 
  Інтерфейс ISpellCaster повинен включати метод castSpell.
*/

// реалізація класу Wizard
// class Wizard implements ICharacter, ISpellCaster {
//   constructor(public name: string, public level: number) {
//     if (this.level < 1) {
//       throw new Error('Level too low');
//     }
//   }

//   introduce(phrase: string): void {
//     console.log(phrase + ', ' + this.name);
//   }

//   castSpell(): void {
//     console.log('Casting a spell, behold my power!');
//   }

//   levelUp(): void {
//     this.level++;
//     console.log(`Level up! New level is ${this.level}`);
//   }
// }

// // тестування класу
// const wizard = new Wizard('Merlin', 15);

// wizard.introduce('I am the mighty wizard');
// wizard.castSpell();
// wizard.levelUp();  // Level up! New level is 16

// export {};

class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

export {};


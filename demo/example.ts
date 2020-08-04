// Hello Dreamer! -> This is a Comment!

import data from "./example.json";

class Human {
  constructor() {
    console.log(`This is a Human with this ${data}`);
  }
}

class Hero extends Human {
  name: string;
  nationality: string;

  constructor(who, from) {
    super();
    this.name = who;
    this.nationality = from;
  }

  languages: Array<string> = [
    "Portuguese",
    "English",
    "Spanish",
    "German",
    "French",
  ];
}

const createHero = () => new Hero("The Great Dreamer", "Worldwide");

export const dreamer = createHero();

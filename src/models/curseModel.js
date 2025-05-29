export class Curse {
  constructor(name, email, type) {
    this.name = name;
    this.email = email;
    this.type = type;
    this.date = new Date().toISOString();
  }
}

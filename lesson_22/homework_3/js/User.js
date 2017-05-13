import Person from "./Person";

export default class User extends Person {
  constructor({firstName="John", lastName="Doe", age=0, gender="Male", signUpDate=0, id}) {
    super(firstName, lastName, age, gender);
    this.signUpDate = signUpDate;
    this.id = id;
  }
}

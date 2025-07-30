// მომხმარებლის კლასი უნიკალური ID-ით
export class User {
  constructor(name, email, password) {
    this.id = Date.now(); // უნიკალური ID
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = new Date().toISOString();
  }
}

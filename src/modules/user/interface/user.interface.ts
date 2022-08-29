export interface UserInterface {
  create({ name: name });
  findAll(): object;
  findByEmail(email: string);
}

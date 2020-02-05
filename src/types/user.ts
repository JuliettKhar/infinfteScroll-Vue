/**
 * Represents a user.
 * @constructor
 * create a model of users from incoming rest api data
 */
export class User {
  firstName: '';
  lastName: '';
  email: '';
  photo: '';
  id: '';

  constructor (user: any) {
    this.firstName = user.name.first;
    this.lastName = user.name.last;
    this.email = user.email;
    this.photo = user.picture.thumbnail;
    this.id = user.id.value;
  }
}
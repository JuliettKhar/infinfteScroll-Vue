/**
 * Represents a user.
 * @constructor
 * create a model of users from incoming rest api data
 */
export class User {
    firstName: string;
    lastName: string;
    email: string;
    photo: string;

    constructor () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.photo = '';
    }
}

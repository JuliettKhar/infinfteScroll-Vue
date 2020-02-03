/**
 * Represents a query.
 * return query to rest api with a given number of pages
 * @param { number } page - quantity of pages
 * @returns { Promise } - response
 */
class UserService {
    constructor () {
    }

    getUsers (page: number) {
        return fetch(`https://randomuser.me/api/?page=${page}&results=20`)
    }
}

export const userService = new UserService();

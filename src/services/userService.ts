class UserService {
  constructor () {};

   getUsers (page: number)  {
    return  fetch(`https://randomuser.me/api/?page=${ page }&results=20`)
  }
};

export const userService = new UserService();
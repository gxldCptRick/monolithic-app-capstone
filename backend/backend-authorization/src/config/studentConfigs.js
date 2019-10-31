import MongoDBTokenHandler from "../data-access/MongoDataAccess";
export const routeDefinitions = {
  getInfo: {
    path: "/",
    method: "get"
  },
  register: {
    path: "/",
    method: "post"
  },
  login: {
    path: "/login",
    method: "post"
  }
};

export const TokenHandler = new MongoDBTokenHandler();

import { baseEndpoint } from "./configurations/AppConfig";

export const DoTheDamnThing = ({ student }) => {
  return fetch(baseEndpoint).then(response => response.json());
};

export const isUniqueName = async username => {
  return fetch(baseEndpoint + "student");
};

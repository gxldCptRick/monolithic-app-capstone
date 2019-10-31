import { baseEndpoint } from "./configurations/AppConfig";

export const DoTheDamnThing = ({ student }) => {
  return fetch(baseEndpoint).then(response => response.json());
};

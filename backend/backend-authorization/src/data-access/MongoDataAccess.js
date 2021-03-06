import StudentRoleAccess from "./StudentRoleAccess";
import { MongoClient } from "mongodb";
import {
  connection_uri,
  database,
  rolesCollection
} from "../config/mongoConfig";

import { createLoginToken, validateLoginToken } from "../security/JWT";

export default class MongoDBTokenHandler {
  async createToken({ username }) {
    try {
      const roles = await this.fetchRolesForUser({ username });
      return await createLoginToken({ body: { username, roles } });
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async validateToken({ jwt }) {
    try {
      return await validateLoginToken({ jwt });
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async fetchRolesForUser({ username }) {
    try {
      var connection = await MongoClient.connect(connection_uri);
      const roles = connection.db(database);
      const studentRoles = await roles.collection(rolesCollection);
      const student = await studentRoles.findOne({ username });
      if (student) {
        return student.roles;
      } else {
        return Promise.reject(new Error("There was no student found"));
      }
    } catch (e) {
      return Promise.reject(e);
    } finally {
      connection.close();
    }
  }

  async addRoleToUser({ username, role }) {
    try {
      var client = await MongoClient.connect(connection_uri);
      const studentDb = client.db(database);
      const roles = await studentDb.collection(rolesCollection);
      const student = await roles.findOne({ username });
      let setOfRoles = new Set([role.toLowerCase()]);
      if (student) {
        student.roles.forEach(setOfRoles.add);
      }
      await roles.updateOne(
        { username },
        { $set: { roles: [...setOfRoles] } },
        { upsert: true }
      );
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    } finally {
      if (client) {
        client.close();
      }
    }
  }
}

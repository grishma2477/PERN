import { pool } from "../dbConnection.js";
import * as crud from "./dbMethods.js"


export const ModelManager = {
  createModel: (tableCreateQuery, tableName) => {
    // Optionally create table on first load
    pool.query(tableCreateQuery).catch(err => {
      console.error(`Error creating table "${tableName}":`, err);
    });

    return {
      find: (filters = {}) => crud.find(tableName, filters),
      findOne: (filters = {}) => crud.findOne(tableName, filters),
      create: (data) => crud.create(tableName, data),
      update: (filters, data) => crud.update(tableName, filters, data),
      delete: (filters) => crud.remove(tableName, filters)
    };
  }
};

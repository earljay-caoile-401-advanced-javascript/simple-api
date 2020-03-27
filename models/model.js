'use strict';

let uuid = require('uuid').v4;

class Model {
  constructor(schema, data) {
    this.schema = schema;
    data.id = uuid();
    Object.keys(this.schema.fields).forEach(key => {
      if (data[key]) {
        this[key] = data[key];
      }
    });
  }
}

module.exports = Model;

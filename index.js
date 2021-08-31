const mysql = require("mysql");

let connection = null;


function getMysqlConnection(hostname, username, password, database, callback) {
  connection = mysql.createConnection({
    host: hostname,
    user: username,
    password: password,
    database: database
  });

  connection.connect((err) => {
    if (!err) {
      callback(err, connection);
    }
    else {
      throw err;
    }
  })

}

function insertData(tableName = "", optains = {}, callback) {
  let keys = `( ${Object.keys(optains).map(key => `${key}`).join(', ')})`;
  let values = `(${Object.keys(optains).map(key => `"${optains[key]}"`)})`;
  let Insertsql = `INSERT INTO ${tableName} ${keys} VALUES ${values}`;

  connection.query(Insertsql, (error, result) => {
    if (error) {
      throw error;
    }
    else {
      return callback(error, result);
    }
  });
}
const insertAllData = (tableName = "", rows = ",", values = [], callback) => {
  let insertAllDatasql = `INSERT INTO ${tableName} (${rows}) VALUES ?`;
  connection.query(insertAllDatasql, [values], (error, res) => {
    if (error) {
      throw error;
    }
    else {
      callback(error, res);
    }
  })
}
function selectData(tableName = "", arry = [], select = ",", callback) {
  let selectsql = null;
  if (typeof arry === Object) {
    let selectdata = `${arry.map(key => `${key}`).join(', ')}`;
    selectsql = `SELECT ${selectdata} FROM ${tableName} WHERE ${select}`;
  }
  else {
    selectsql = `SELECT ${arry} FROM ${tableName} WHERE ${select}`;
  }


  connection.query(selectsql, (error, result, field) => {
    if (error) {
      throw error;
    }
    else {
      return callback(error, result, field);
    }
  });
}  

const selectAllData = (tableName = "", callback) => {
  let selectsql = `SELECT * FROM ${tableName}`;
  connection.query(selectsql, (error, result, field) => {
    if (error) {
      throw error;
    }
    else {
      return callback(error, result, field);
    }
  })
}

const deleteData = (tableName = "", condition = "", callback) => {
  let deletdatasql = `DELETE FROM ${tableName} WHERE ${condition}`;
  connection.query(deletdatasql, (error, result) => {
    if (error) {
      throw error;
    }
    else {
      return callback(error, result);
    }
  })
}
const deletdataAll = (tableName = "", callback) => {
  let deletdataAllsql = `DELETE FROM ${tableName}`;
  connection.query(deletdataAllsql, (err, res) => {
    if (err) {
      throw err;
    }
    else {
      return callback(err, res);
    }
  });
}
const updateData = (tableName = "", uptdata = `""`, where = "", callback) => {
  let updateDatasql = `UPDATE ${tableName} SET ${uptdata} WHERE ${where}`;
  connection.query(updateDatasql, (error, res) => {
    if (error) {
      throw error;
    }
    else {
      callback(error, res);
    }
  })
}
const getLimitData = (tableName, num, order = false, callback) => {
  let limitsql = null;
  if (order) {
    limitsql = `SELECT * FROM ${tableName} LIMIT ${num} ORDER BY ${order}`
  }
  else {
    limitsql = `SELECT * FROM ${tableName} LIMIT ${num}`;
  }
  connection.query(limitsql, (error, res, field) => {
    if (error) {
      throw error;
    }
    else {
      callback(error, res, field);
    }
  })
}
const getLimitDataByOne = (tableName = "", arry = [], condition = "", limit, order = false, callback) => {
  let rows = `${arry.map(key => `${key}`).join(', ')}`;
  let sql = null;
  if (order) {
    sql = `SELECT ${rows} FROM ${tableName} WHERE ${condition} LIMIT ${limit} ORDER BY ${order}`;
  }
  else {
    sql = `SELECT ${rows} FROM ${tableName} WHERE ${condition} LIMIT ${limit}`;
  }
  connection.query(sql, (error, res, fileds) => {
    if (error) {
      throw error;
    }
    else {
      callback(error, res, fileds);
    }
  });
}
const getOrderdDataAll = (tableName, order, limit = false, callback) => {
  const ordersql = null;
  if (limit) {
    ordersql = `SELECT * FROM ${tableName} ORDER BY ${order} LIMIT ${limit}`;
  }
  else {
  ordersql = `SELECT * FROM ${tableName} ORDER BY ${order}`;
  }
  connection.query(ordersql, (err, res, filed) => {
    if (err) {
      throw err;
    }
    else {
      callback(err, res, filed);
    }
  })
}
const getOrderdData = (tableName, fields, order,limit,callback) => {
  const ordersql = null;
  if(limit){
       ordersql = `SELECT ${fields} FROM ${tableName} ORDER BY ${order} LIMIT ${limit}`;
  }
  else{
   ordersql = `SELECT ${fields} FROM ${tableName} ORDER BY ${order}`;
  }
  connection.query(ordersql, (err, res, filed) => {
    if (err) {
      throw err;
    }
    else {
      callback(err, res, filed);
    }
  })
}
// export our functions in other modules
module.exports = { getMysqlConnection, insertData, selectData, selectAllData, deleteData, deletdataAll, updateData, insertAllData, getLimitData, getLimitDataByOne, getOrderdDataAll, getOrderdData };
# What is this ?

you can now use mysql CURD oparetion very easily

#### This project is pre-install `mysql` module

## installation

```bash
 $ npm i mysqlusequery
```
 
### Then..

## require mysql-query in your project

```javascript
const mysqlQuery = require("mysqlusequery");
```
## Let's get connection of mysql database

```javascript
mysqlQuery.getMysqlConnection();
```

## The _getMysqlConnection()_  function takes 5 parameter

* hostname
* username
* password
* databasename
* () callback function
  * (error,connection) callback function have also two parameter

like this...

```javascript
mysqlQuery.getMysqlConnection("localhost", "root", "3434", "test", (err, conn) => {
  if (err) {
    //code will be here
  }
  else {
    //code will be here
  }
  //connection variable is conn
});
```
## let's insert data in mysql using mysqlusequery

```javascript
mysqlQuery.insertData()
```

## this _insertData()_  function takes 3 parameter

* tablename of your database
* {} object form of your row and data formate
* () callback function
  * (error,res) res object is a parameter of callback function
 
like this...

```javascript
mysqlQuery.insertData("userdata", {
  "rows": "rowsdata",
  "name": "john dow",
  "email": "johndow@gmail.com"
}, (err, res) => {
  if (err) {
    //code will be here
  }
  else {
    //code will be here 
    console.log(res);
  }
});
```
## let's select a or more data from mysql table

```javascript
mysqlQuery.selectData();
```
## _selectData()_ function takes 4 parameter

* tablename of your database
* ["rowname","ohterrowname"] pass that rows name where you want to select
* Where condition like id=1,password="something"
* callback function()
  * The callback takes (err,results,field)

## let's select all data from mysql table

```javascript
mysqlQuery.selectAllData()
```

## The _selectAllData()_ function takes two parameter
* tablename tablename of your mysql database
* callback() function
  * callback function takes (err,results,field) 

## let's delete data form mysql table

```javascript
mysqlQuery.deleteData();
```

## The _deleteData()_ function takes 3 parameter

* tablename of your database
* condition of rows that you want to delete
* callback() function
  * callback function takes (error,results) 

## let's deleteAll data from your mysql table

```javascript
mysqlQuery.deletdataAll();
```

## The _deletdataAll()_ function takes 2 parameter
* tablename of your database
* callback() function
  * callback function takes (error,results);

## let's updata data's from mysql tables

``` javascript
mysqlQuery.updateData();
```
## The _updateData()_ function takes 4 parameter

* tablename of your database
* updatadata pass like a string 
* where condition
* callback() function
  * callback function takes (error,results);

## let's get _data by limit_ 

```javascript
mysqlQuery.getLimitData();
```
## the _getLimitData()_ function takes 4 parameter

* tablename of your database
* select data limit 
* pass row if your want to select data in order or pass false
* callback() function
  * callback function takes (error,results,field);

## let's get rows  data by _limit_ 

```javascript
mysqlQuery.getLimitDataByOne();
```

## the _getLimitDataByOne()_ function takes 6 parameter

* tablename of your database
* rows name in arry formate
* condition of rows those you want to select
* limit number
* pass row if your want to select data in order or pass false
* callback() function
  * callback function takes (error,results,field);

## get data by order 

```javascript
mysqlQuery.getOrderdDataAll();
```

## The _getOrderdDataAll()_ function takes 4 parameter

* tablename of your database
* order rows
* pass number of limit or don't want limit pass false;
* callback() function
  * callback function takes (error,results,field);

## let's get rows with order

```javascript
mysqlQuery.getOrderdData();
```
## The _getOrderdData()_ function takes 5 parameter

* tablename
* rows name
* order
* pass a nuber of limit or don't want it pass false
* callback() function
   * callback function takes (error,results,field);

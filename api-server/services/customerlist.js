const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getCustomerList(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, customername, customertype, address 
    FROM customers`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data
  }
}

async function createcustomer(customer){
    const result = await db.query(
      `INSERT INTO customers 
      (customername, customertype, address, outletarea, phonenumber, tinnumber) 
      VALUES 
      ('${customer.customername}', '${customer.customertype}', '${customer.address}', '${customer.outletarea}', '${customer.phonenumber}', '${customer.tinnumber}')`
    );
  
    let message = "customer error";
  
    if (result.affectedRows) {
      message = 'Customer created successfully';
    }
  
    return {message};
}

async function updateCustomer(id, customer) {
  const result = await db.query(`update customers set customername='${customer.customername}', customertype='${customer.customertype}', address='${customer.address}', outletarea='${customer.outletarea}', phonenumber='${customer.phonenumber}, tinnumber='${customer.tinnumber}'`);

  let message = "customer update error";

  if(result.affectedRows) {
    message = "customer updated successfully";
  }
}

module.exports = {
    getCustomerList,
    createcustomer,
    updateCustomer
}
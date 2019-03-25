const ServerError = require('../../lib/error');
/**
 * @param {Object} options
 * @param {Object} options.truck The truck to create.
 * @throws {Error}
 * @return {Promise}
 */


module.exports.postUpload = async (options) => {
  console.log(options)
  // const truckId = 1
  // const username = 'root'
  // const password = process.env.PASSWORD || ''
  // const config = {
  //   user: 'root',
  //   password: 'my-secret-pw',
  //   server: 'localhost',
  //   database: 'truckdatabase',
  //   port: 3306
  // }
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'my-secret-pw',
    database : 'TRUCKS',
    port: 3306
  });
  try {
    connection.connect();
    connection.query("INSERT INTO trucks(id, name, model, price, description, contact_info, favorited, location) VALUES (3, super truck3, super model3, 50000, a really really nice truck3,{ email: gonzalovazquez@gmail.com, phone_number: 4161234567 }, false, nigeria);",  (error, results, fields) => {
      if (error) throw error;
      const returnedQuery = JSON.parse(JSON.stringify(results))
      console.log(returnedQuery)
      return {
        status: 200,
        data: returnedQuery
      };
    });
  } catch(error) {
    return {
      status: 500,
      data: error
    };
  }
};
// module.exports.postUpload = async (options) => {
//   // options.truck = {id: 1, name: "Super Truck One", model: "Sport model", price: 5000, description: "a really nice truck"}
//   // connect to the database
//   // connect to the table
//   // update using truck object
//   // insert into databasename.tablename (fields) values (truck object)

//   return {
//     status: 200,
//     data: 'postUpload ok!'
//   };
// };





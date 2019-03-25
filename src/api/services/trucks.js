const sql = require('mssql')

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
  // get the truck id from options
  // connect to the database
  // connect to the table
  // find truck in table using truck id
  // select *  from databasename.tablename where truck.id = truck id
  // convert result to json
module.exports.getTrucks = async (options) => {
  // const truckId = 1
  // const username = 'root'
  // const password = process.env.PASSWORD || ''
  // const config = {
  //   domain: 'localhost',
  //   user: 'root',
  //   password: 'my-secret-pw',
  //   database : 'TRUCKS',
  //   port: 3306
  // }
  const config = {
    user: 'root',
    password: 'my-secret-pw',
    server: 'localhost',
    database: 'TRUCKS',
    port: 3306
  }

  try {
    console.log(config)
    await sql.connect('mssql://root:my-secret-pw@localhost:3306/TRUCKS')
    console.log('------>>>>')
    const result = await sql.query`SELECT * FROM trucks`
    console.log('------------------>>>>>')
    console.log(result)
    return {
      status: 200,
      data: result
    };
  } catch(error) {
    return {
      status: 500,
      data: error || 'Something bad happened'
    };
  }
};

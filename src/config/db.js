import mysql from "mysql2"

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_db'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

export default connection
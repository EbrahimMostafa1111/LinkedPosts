import mysql from 'mysql2'
//local database
// export const dbConnection = () => {
//     const conn = mysql.createConnection({
//         host: 'localhost',
//         database: 'linked_post',
//         user: 'root',
//         password: ''
//     })


//remote data base on clever server
export const dbConnection = () => {
    const conn = mysql.createConnection('mysql://ueblgck9uqmjbsxt:xOqFMYeAlDrT5qhsBrla@b3nyfa50tthuorrl65bz-mysql.services.clever-cloud.com:3306/b3nyfa50tthuorrl65bz')

    conn.connect((err) => {
        if (err) return console.log('database error');
        console.log('database connected succesfully..')
    })
    return conn
}
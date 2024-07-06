import { dbConnection } from "../../dbConnection.js";
import bcrypt from 'bcrypt'



const connection = dbConnection()

const singup = (req, res) => {

    connection.query(`insert into users set ?`, req.body)
    res.status(201).json({ message: 'users added succesfully' })
    // connection.execute(`insert into users (name,email,password) values ('${req.body.name}','${req.body.email}','${req.body.password}')`)

}

const signin = (req, res) => {
    connection.execute(`select id, email, password from users where email='${req.body.email}'`, (err, data) => {
        if (data.length != 0) {
            let match = bcrypt.compareSync(req.body.password, data[0].password)
            if (match) {
                res.json({ message: 'login...token', userID: data[0].id })
            } else {
                res.status(401).json({ message: 'password incorrect' })
            }
        } else {
            res.status(401).json({ message: 'acount is not found' })
        }
    })
}

export {
    singup,
    signin

}
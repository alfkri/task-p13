//import database 
const db = require("../config/database");

// buat model student 
class Student {
    static all() {
        return new Promise((resolve,reject)=>{
        // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM students";
            db.query(sql,(err,results)=> {
                resolve (results);
            });
        });
    }
    static findbyId(id) {
        return new Promise((resolve, reject) => {
            // melakukan query untuk mencari data berdasarkan id
            const sql = `SELECT * FROM students WHERE id = ${id}`;
            db.query(sql, (err, results) => {
                resolve(results);
            });
        });
    }
    static create(data){
        return new Promise((resolve,reject)=>{
            // melakukan query untuk insert data
            const sql = "INSERT INTO students SET ?";
            db.query(sql,data,(err,results)=>{
                if (err){
                    reject(err);
                }
                else{
                    resolve(this.findbyId(results.insertId));
                }      
            });
        });
    }
    static update(data){
        return new Promise((resolve,reject)=>{
            const sql = "UPDATE students ";
        });
    }
}

// export model
module.exports = Student;
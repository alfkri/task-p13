//import database 
const db = require("../config/database");
const students = require("../data/students");

// buat model student 
class Student {
    // Menampilkan seluruh data student
    static all() {
        return new Promise((resolve,reject)=>{
        // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM students";
            db.query(sql,(err,results)=> {
                resolve (results);
            });
        });
    }

    // Menambahkan data student
    static async create(data){
        const id = await new Promise((resolve,reject)=>{
            // melakukan query untuk insert data
            const sql = "INSERT INTO students SET ?";
            db.query(sql,data,(err,results)=>{
                resolve(results.insertId);
            });
        });

        const student = await this.find(id);
        return student;
    }

    // Mencari data student
    static find(id){
        return new Promise((resolve, reject)=>{
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, (err,results)=>{
                resolve(results[0]);
            });
        });  
    }

    // Mengedit data student
    static async update(id, data){
        new Promise((resolve,reject)=>{
            const sql = "UPDATE students SET ? WHERE id = ? ";
            db.query(sql, [data, id], (err, results)=>{
                resolve(results);
            });
        });

        const student = await this.find(id);
        return student;
    }

    static delete(id){
        return new Promise((resolve, reject)=>{
            const sql = "DELETE FROM students WHERE id = ?";
            db.query(sql,id, (err, results)=>{
                resolve(results);
            });
        });
    }
}

// export model
module.exports = Student;
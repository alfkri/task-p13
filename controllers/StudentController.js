// import model student
const Student = require("../models/Student");

// Import data students dari folder data/students.js
const students = require("../data/students.js");
const { find } = require("../models/Student");

// Membuat Class StudentController
class StudentController {
    async index(req, res) {
        // Tampilkan data students
        const students = await Student.all();
        const data = {
            message: "Menampilkkan semua student",
            data: students,
        };
           
        res.status(200).json(data);
    }

    async store(req, res) {
        const students = await Student.create(req.body);

        const data = {
            message: "Menambahkan data student",
            data: students,
        };
           
        res.status(201).json(data);
    }

    async update(req, res) {
        const {id} = req.params;
        
        const student = await Student.find(id);
       
        if (student){
            const StudentUpdated = await Student.update(id, req.body);
            
            const data = {
                message: "Mengedit data student",
                data: StudentUpdated,
            };
            res.status(200).json(data);
        }else{
            // kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };
            res.status(404).json(data);
        }
    }

    async destroy(req, res) {
        const { id } = req.params;

        // cari data berdasarkan id
        const students = await Student.find(id);

        if (students){
            await Student.delete(id);
            const data = {
                message: "Menghapus data student",
            };
            res.status(200).json(data);
        } else{
            const data = {
                message: "Data tidak ada",
            };
            res.status(404).json(data);
        }
    }

    async show(req,res){
        const {id} = req.params;
        const student = await Student.find(id);
        if (students){
            const data = {
                message: "Menampilkan detail data student",
                data: student,
            };
            res.status(200).json(data);
        } else{
            const data = {
                message: "Data tidak ada",
            };
            res.status(404).json(data);
        }
    }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;

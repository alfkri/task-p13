// import model student
const Student = require("../models/Student");

// Import data students dari folder data/students.js
const students = require("../data/students.js");

// Membuat Class StudentController
class StudentController {
    async index(req, res) {
    // Tampilkan data students
        const students = await Student.all();
        const data = {
            message: "Menampilkkan semua students",
            data: students,
        };
        
        res.status(200).json(data);
    }

    async store(req, res) {
        const students = await Student.create(req.body);
        // Tambahkan data students
        const data = {
            message: "Menambahkan data student",
            data: students,
        }

        res.status(201).json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

    // Update data students
        students[id] = nama;
        const data = {
            message: `Mengedit student id ${id}, nama ${nama}`,
            data: students,
        };

        res.json(data);
  }

    destroy(req, res) {
        const { id } = req.params;

        // Hapus data students
        students.splice(id,1);
        const data = {
            message: `Menghapus student id ${id}`,
            data: students,
        };

        res.json(data);
    }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;

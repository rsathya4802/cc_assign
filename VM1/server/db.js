//Require Mongoose
const { connect, Schema, model } = require('mongoose');


connect('mongodb://127.0.0.1:27017/student', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//Define a schema
var StudentSchema = new Schema({
    rollno: String,
    name: String
});

const Stud_data = model('stud_data', StudentSchema, 'stud_data');

// module.exports.saveStudent = function (rollno, name) {
//     stud_data = new Stud_data({ rollno: rollno, name: name });
//     stud_data.save();
// }

module.exports.getStudentDetails = function (rollno) {
    try {
        return Stud_data.findOne({ rollno: rollno }, { '_id': 0, '__v': 0 }).lean();
    }
    catch (e) {
        return null;
    }
}
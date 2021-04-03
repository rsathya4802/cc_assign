const db = require('./db')

module.exports = function (app) {
    app.get('/stud_data/:rollno', async function (req, res) {
        let data = await db.getStudentDetails(req.params.rollno)
        res.json(data)
    })
}
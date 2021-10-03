const course = require('./models/Course');


class SiteController {

    // [GET] /new
    index(req, res) {

        course.find({}, function (err, course) {
            if (!err) {
                res.json(course);
            } else {
                res.status(400).json({error: 'ERROR'});
            }
        });
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
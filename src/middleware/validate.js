const validator = require('./validator');

const saveBook = (req, res, next) => {
    const validationRule = {
        title: 'required|string',
        author: 'required|string',
        genre: 'required|string',
        isbn: 'required|string',
        publisher: 'required|string',
        publishedDate: 'required|string',
        summary: 'required|string',
        pageCount: 'required|integer'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(400).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveAuthor = (req, res, next) => {
    const validationRule = {
        firstName: 'required|string',
        lastName: 'required|string',
        birthDate: 'required|string',
        nationality: 'required|string',
        bio: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(400).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveBook,
    saveAuthor
};

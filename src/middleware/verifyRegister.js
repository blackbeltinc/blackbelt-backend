const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: 'Erro! E-mail já está em uso.'
            });
            return;
        }

        next();
    });
};

checkRoleExists = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: 'Erro. Função não existe: ' + req.body
                });
                return;
            }
        }
    }

    next();
};

const verifyRegister = {
    checkDuplicateEmail: checkDuplicateEmail,
    checkRoleExists: checkRoleExists
};

module.exports = verifyRegister;
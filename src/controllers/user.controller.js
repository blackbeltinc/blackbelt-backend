exports.allAccess = (req, res) => {
    res.status(200).send('Acesso público');
};

exports.userBoard = (req, res) => {
    res.status(200).send('Acesso de usuário');
};

exports.adminBoard = (req, res) => {
    res.status(200).send('Acesso de administrador');
};
const authService = require('../services/auth.service');

exports.register = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        const data = await authService.register(name, email, password, role);
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        console.log("EMAIL:", email);
        console.log("PASSWORD:", password);

        const data = await authService.login(email, password);
        res.json(data);
    } catch (err) {
        next(err);
    }
};
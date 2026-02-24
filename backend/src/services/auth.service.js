const bcrypt = require('bcryptjs');
const userRepo = require('../repositories/user.repository');
const { generateToken } = require('../utils/jwt');

exports.register = async (name, email, password, role) => {
    const existingUser = await userRepo.findByEmail(email);
    if (existingUser) throw { status: 400, message: 'User already exists' };

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userRepo.createUser(
        name,
        email,
        hashedPassword,
        role
    );

    const token = generateToken(user);

    return { user, token };
};

exports.login = async (email, password) => {
    const user = await userRepo.findByEmail(email);
    if (!user) throw { status: 400, message: 'Invalid credentials' };

    console.log("User from DB:", user);

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) throw { status: 400, message: 'Invalid credentials' };
    console.log("Password match:", isMatch);

    const token = generateToken(user);


    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role_name
        },
        token
    };
};
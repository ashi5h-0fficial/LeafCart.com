import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'ASHISH',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        cropSelection: '',
        isAdmin: true
    },
    {
        name: 'aman',
        email: 'aman@gmail.com',
        password: bcrypt.hashSync('1234', 10),
        cropSelection: '',
        isAdmin: false
    },

    {
        name: 'Test User',
        email: 'Test@example.com',
        cropSelection: 'fruits',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
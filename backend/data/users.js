import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jim halpert',
    email: 'jim@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Pam Beasley',
    email: 'pam@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users

const db = require('../db/connection')
const User = require('../models/users')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        {
            "firstName": "Julia",
            "lastName": "Garner", 
            "email": "jgarner@gmail.com",
            "password": "iwonanemmy",
            "imgURL": "https://res.cloudinary.com/dkhiieq9p/image/upload/v1589318542/silhouette-of-people-1824684_yivb9a.jpg"
        },
        {
            "firstName": "John",
            "lastName": "Galeazzi", 
            "email": "john.galeazzi@gmail.com",
            "password": "olivia8",
            "imgURL": "https://res.cloudinary.com/dkhiieq9p/image/upload/v1594915928/Screen_Shot_2020-07-16_at_12.11.19_PM_sc8xst.png"
        }
    ]

    await User.insertMany(users)
    console.log('Created users!')
}

const run = async () => {
    await main()
    db.close()
}

run()


const jwt = require("jsonwebtoken")


const login = async (req, res) => {
    const id = new Date().getDate()

    const { username, password } = req.body

    if (!username || !password) {
        throw new Error("username and password are required !!!")
    }

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    res.status(201).json({ msg: "user created", token })
}


const dashboard = async (req, res) => {
    try {
        const luckyNumber = Math.floor(Math.random() * 100)
        res.status(200).json({ msg: `hi, ${req.user.username}`, secret: `here is your authorized data this is your lucky number ${luckyNumber}` })
    } catch (error) {
        res.redirect("/")
    }

}

module.exports = {
    login,
    dashboard
}
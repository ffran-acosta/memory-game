const controller = {
    home: (req, res) => {
        res.render("home/home")
    },
    exit: (req, res) => {
        res.redirect("http://localhost:7000/")
    }
}

module.exports = controller
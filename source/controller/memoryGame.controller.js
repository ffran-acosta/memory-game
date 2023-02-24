const controller = {
    home: (req, res) => {
        res.render("home/home")
    },
    exit: (req, res) => {
        res.redirect("https://ffran-acosta.up.railway.app/")
    }
}

module.exports = controller
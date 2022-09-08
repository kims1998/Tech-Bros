const router = require("express").Router();

router.get("/", async (req, res) => {
    
    try {
        if(req.session.logged_in){
            res.redirect("/dashboard");
            return;
        };
        res.render("loginPage");
    } catch (error) {
        res.status(500).json(error, "An error has occurred.");
    };
});

module.exports = router;
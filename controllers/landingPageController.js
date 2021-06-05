module.exports = {
    getIndexData(req, res) {
        return res.render('landingPage', {title: 'Welcome to Artisan\'s Toolkit'});
    },
};
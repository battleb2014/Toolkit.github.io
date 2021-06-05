module.exports = {
    getIndexData(req, res) {
        return res.render('index', {title: 'Welcome to Artisan\'s Toolkit'});
    },
};
exports.home = (req, res, next) => {
    res.render('home.ejs', {
        pageTitle: 'Home'
    })
}
exports.anime = (req, res, next) => {
    res.render('anime.ejs', {
        pageTitle: 'Anime'
    })
}

exports.fanimation = (req, res, next) => {
    res.render('fanimation.ejs', {
        pageTitle: 'Fanimation'
    })
}

exports.amv = (req, res, next) => {
    res.render('amv.ejs', {
        pageTitle: 'AMV'
    })
}

exports.item = (req, res, next) => {
    res.render('item.ejs', {
        pageTitle: 'Item'
    })
}

exports.manga = (req, res, next) => {
    res.render('manga.ejs', {
        pageTitle: 'Manga'
    })
}

exports.merch = (req, res, next) => {
    res.render('merch.ejs', {
        pageTitle: 'Merch'
    })
}

exports.ost = (req, res, next) => {
    res.render('ost.ejs', {
        pageTitle: 'OST'
    })
}

exports.hentai = (req, res, next) => {
    res.render('hentai.ejs', {
        pageTitle: 'Hentai'
    })
}

exports.Admincontroller = (req, res, next) => {
    res.render('admin_controller.ejs', {
        pageTitle: 'Admin'
    })
}
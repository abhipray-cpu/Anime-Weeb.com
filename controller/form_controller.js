exports.amv = (req, res, next) => {
    res.render('./forms/addAmv.ejs', {
        pageTitle: 'Add AMV'
    })
}

exports.anime = (req, res, next) => {
    res.render('./forms/addAnime.ejs', {
        pageTitle: 'Add Anime'
    })
}

exports.manga = (req, res, next) => {
    res.render('./forms/addManga.ejs', {
        pageTitle: 'Add Manga'
    })
}

exports.Fanimation = (req, res, next) => {
    res.render('./forms/addFanimation.ejs', {
        pageTitle: 'Add Fanimation'
    })
}

exports.hentai = (req, res, next) => {
    res.render('./forms/addHentai.ejs', {
        pageTitle: 'Add Hentai'
    })
}

exports.merch = (req, res, next) => {
    res.render('./forms/addMerch.ejs', {
        pageTitle: 'Add Mech'
    })
}
exports.ost = (req, res, next) => {
    res.render('./forms/addOst.ejs', {
        pageTitle: 'Add Ost'
    })
}

exports.login = (req, res, next) => {
    res.render('./forms/login.ejs', {
        pageTitle: 'Login'
    })
}

exports.signup = (req, res, next) => {
    res.render('./forms/signup.ejs', {
        placeholder: 'Signup'
    })
}

exports.admin = (req, res, next) => {
    res.render('./forms/admin.ejs', {
        placeholder: 'Admin Login'
    })
}
exports.form = (req, res, next) => {
    const type = req.body.type;
    if (type === 'login') {
        login();
    } else if (type === 'signup') {
        signup();

    }
    //if the admin is authenticated than render the admin controller the page 
    else if (type === 'admin') {
        admin();
    } else if (type === 'amv') {
        amv();
    } else if (type === 'anime') {
        anime();
    } else if (type === 'manga') {
        manga();
    } else if (type === 'fanimation') {
        fanimation();
    } else if (type === 'hentai') {
        hentai();
    } else if (type === 'merch') {
        merch();
    } else if (type === 'ost') {
        ost();
    }
}

function login() {
    console.log("login");
    // redirect to the home page in here
}

function signup() {
    console.log("signup")
}

function admin() {
    console.log("admin")
}

function amv() {
    console.log("amv")
}

function anime() {
    console.log("anime")
}

function manga() {
    console.log("manga")
}

function fanimation() {
    console.log("fanimation")
}

function hentai() {
    console.log("hentai")
}

function merch() {
    console.log("merch")
}

function ost() {
    console.log("ost")
}
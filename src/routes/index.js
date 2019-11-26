let express = require('express');
let router = express.Router();

let mongoose = require('../config/conexion');
let Persona = require('../models/persona');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/welcome', forwardAuthenticated, (req, res) => res.render('welcome.ejs'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
    res.render('dashboard.ejs', {
        user: req.user
    })
);

/* GET home page. */
router.get('/', ensureAuthenticated, (req, res, next) => {
    Persona.find((err, personas) => {
        //console.log(personas);
        if (err) throw err;
        res.render('index.hbs', { personas: personas });
    });
});

router.get('/persona/nuevo', (req, res, next) => {
    res.render('personaForm.hbs', {});
});

router.get('/persona/modificar/:id', (req, res, next) => {
    let idPersona = req.params.id;
    Persona.findOne({_id: idPersona }, (err, persona) => {
        //console.log(persona);
        if (err) throw err;
        res.render('personaForm.hbs', { persona: persona });
    });
});

router.get('/persona/eliminar/:id', (req, res, next) => {
    let idPersona = req.params.id;
    
    Persona.remove({_id: idPersona }, (err) => {
        if (err) throw err;
        //o llamar nuevamente a find() y res.render();
        res.redirect('/');
    });
});

module.exports = router;
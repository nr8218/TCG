const express = require('express')
const router = new express.Router()

router.get('/', async (req, res) => {
    res.render('index', {
        title: 'Home: TCG'
    })
})

module.exports = router
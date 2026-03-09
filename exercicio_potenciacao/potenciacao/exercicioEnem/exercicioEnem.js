const express = require('express')
const router = express.Router()

const exercicioEnem1_router = require('./exercicioEnem1.js')
const exercicioEnem2_router = require('./exercicioEnem2.js')
const exercicioEnem3_router = require('./exercicioEnem3.js')
const exercicioEnem4_router = require('./exercicioEnem4.js')
const exercicioEnem5_router = require('./exercicioEnem5.js')


router.use('/exercicioEnem', exercicioEnem1_router)
router.use('/exercicioEnem', exercicioEnem2_router)
router.use('/exercicioEnem', exercicioEnem3_router)
router.use('/exercicioEnem', exercicioEnem4_router)
router.use('/exercicioEnem', exercicioEnem5_router)


module.exports = router
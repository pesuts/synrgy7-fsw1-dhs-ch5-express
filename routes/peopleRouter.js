const router = require('express').Router()
const idChecker = require('../middleware/idChecker')
const { getPeople, getPeopleById, addPeople, deletePeopleById } = require('../services/peopleService')

router.get('/', getPeople)
router.get('/:id', idChecker, getPeopleById)
router.post('/', addPeople)
router.delete('/:id', idChecker, deletePeopleById)

// router.get('/views', getPeople)

module.exports = router
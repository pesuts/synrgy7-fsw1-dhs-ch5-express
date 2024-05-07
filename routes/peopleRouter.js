const router = require('express').Router()
const idChecker = require('../middleware/idChecker')
const { getPeople, getPeopleById, addPeople, deletePeopleById, renderPeople, uploadImagePeople } = require('../services/peopleService')
const upload = require('../middleware/uploadHandler')

router.get('/', getPeople)
router.get('/:id', idChecker, getPeopleById)
router.post('/', addPeople)
router.delete('/:id', idChecker, deletePeopleById)

router.get('/views/:id', renderPeople)

router.post('/uploads/', upload.single('image'), uploadImagePeople)

module.exports = router
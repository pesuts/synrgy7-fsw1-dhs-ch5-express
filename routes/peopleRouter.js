const router = require('express').Router()
const idChecker = require('../middleware/idChecker')
const { getPeople,
  getPeopleById,
  addPeople,
  deletePeopleById,
  renderPeople,
  uploadImagePeople,
  cdnUploadImagePeople,
  updatePeopleById } = require('../services/peopleService')
const upload = require('../middleware/uploadHandler')
const cdnUpload = require('../middleware/cdnUploadHandler')

router.get('/', getPeople)
router.get('/:id', idChecker, getPeopleById)
router.post('/', addPeople)
router.put('/:id', idChecker, updatePeopleById)
router.delete('/:id', idChecker, deletePeopleById)

router.get('/views/:id', renderPeople)

router.post('/upload/', upload.single('image'), uploadImagePeople)
router.post('/upload/cdn', cdnUpload.single('image'), cdnUploadImagePeople)

module.exports = router
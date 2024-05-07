const data = require('../people')

const getPeople = (req, res) => { 
  res.json({message: 'success', data: data})
}

const getPeopleById = (req, res) => { 
  const { id } = req.params

  res.json({message: 'success', data: data.find((row) => row.id === +id)})
}

const addPeople = (req, res) => { 
  const newData = req.body
  data.push(newData)

  res.json({ message: 'Data added successfully', data: data })
}

const deletePeopleById = (req, res) => { 
  const { id } = req.params;
  
  if (data.find((row) => row.id === +id) === undefined) { 
    res.status(404).json({ status: 'error', message: 'Id not found!' })
  }

  for (let i in data) { 
    if (data[i].id === +id) { 
      data.splice(i, 1)
    }
  }

  res.status(200).json({status: 'error', message: 'Data deleted', data: data})
}

const renderPeople = (req, res) => { 
  const { id } = req.params

  // res.render('index', { name: "cekson" })
  res.render('index', data.find((row) => row.id === +id))
}

const uploadImagePeople = (req, res) => { 
  const url = `/uploads/${req.file.filename}`

  res.status(200).json({message: 'Uploaded', url})
}

module.exports = {
  getPeople,
  getPeopleById,
  addPeople,
  deletePeopleById,
  renderPeople,
  uploadImagePeople
}
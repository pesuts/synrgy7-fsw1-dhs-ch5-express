const idChecker = (req, res, next) => { 
  const { id } = req.params;
  
  const newId = +id;

  if (newId > 0) next()
  else res.status(400).json({status: 'error', message: 'Id not valid!'})
}

module.exports = idChecker
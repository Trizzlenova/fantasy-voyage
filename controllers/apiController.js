function index(req, res) {
  res.json({
    message: 'Fantasy!',
    base_url: 'localhost:3000',
    endpoints: [{
      method: 'GET', path: '/api'
    }]
  });
}

module.epxorts = {
  index,
}

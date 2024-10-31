const { app } = require('./app');

const PORT = 443;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});


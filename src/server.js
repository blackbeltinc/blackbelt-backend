const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('../src/models');
const Role = db.role;

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081',
};

dotenv.config();

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

app.get('/', (req, res) => {
  return res.json({ message: 'BlackBelt Inc.' });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () =>
  console.log(`🔥 Server is running on http://localhost:${PORT}`),
);

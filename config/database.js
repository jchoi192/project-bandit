const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:abc1234@cluster0.tjd6s.mongodb.net/project-bandit?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
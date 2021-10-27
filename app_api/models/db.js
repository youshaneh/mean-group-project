const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://fooddb:fooddb@cluster0.tfuch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, {dbName: 'project'});
mongoose.connection.on('connected', () => console.log(`connected to ${dbURI}`));
mongoose.connection.on('error', err => console.log(`error: ${err}`));
mongoose.connection.on('disconnected', () => console.log('disconnected'));
 
const gracefulShutdown = (msg, calllback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected: ${msg}`);
    calllback();
  })
}

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  })
})

process.once('SIGINT', () => {
  gracefulShutdown('app terminate', () => {
    process.exit(0);
  })
})

require('./tasks');
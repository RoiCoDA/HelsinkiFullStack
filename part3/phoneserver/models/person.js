const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('Connecting to ', url);

mongoose.connect(url, {family: 4})
    .then( result => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch( error => {
        console.log('Error connecting to MongoDB: ', error.message);
    })

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 5,
        required: true
    },
    number: {
        type: String,
        required: true,
        minLength: 8,
        match: [/^\d{2,3}-\d+$/, 'Field must be in the format of {2-3 numbers}-{numbers}']
    }
})

personSchema.set('toJSON', {
    transform: ( document, returnedObject ) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)

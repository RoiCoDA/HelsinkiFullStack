const mongoose = require('mongoose')

if (process.argv.length < 3 ) {
    console.log("arguments missing - password, name or password.");
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://roishm83_db_user:${password}@cluster0.nvzxncn.mongodb.net/phonebookApp?appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url, {family: 4})

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
})


if ( process.argv.length === 5 )
{
    if ( process.argv[3] === null || process.argv[4] === null )
    {
        console.log("If you're trying to add a person, name or number can't be empty");
    }
    else
    {
        person.save().then(result => {
        console.log("Person saved! ", person);
        mongoose.connection.close()
        })
    }
}


if ( process.argv.length === 3 ) 
{
    Person.find({}).then( result => {
    console.log("Phonebook");
    result.forEach(person => {
        console.log(person.name, person.number);
        })
    mongoose.connection.close()
    })
}

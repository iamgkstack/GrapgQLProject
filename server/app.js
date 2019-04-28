const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');




//allow cross-origin request
app.use(cors());


//connect to mlab database
mongoose.connect('mongodb://gaurav:test123@ds233596.mlab.com:33596/gql-playlist', { useNewUrlParser: true });
//check mongoDB is connected or not
mongoose.connection.once('open',()=>{
    console.log('Connected to the Database!!')
});

//use middleware for implement graphql end point
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

const PORT = process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log("server started on the port number:- "+ PORT); 
});
const express = require('express');
//  const env = require('dotenv');
const app = express();
const port = 2000 ;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//routes 
const userRoutes = require('./routes/user');

//  env.config();



mongoose.connect(
    `mongodb+srv://brad1234:vjPslWCn5hKNKFAO@cluster0.wcavq.mongodb.net/planck?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        

        
    }
    
    ).then(()=> {
        console.log('Database connected');
    });



app.use(bodyParser());
app.use('/api', userRoutes);


app.listen(port, () => {
  console.log(`Planck-audio listening at port : ${port}`)
})
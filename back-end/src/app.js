const express = require('express');
//  const env = require('dotenv');
const app = express();
const port = 2000 ;
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');




// const bodyParser = require('body-parser')

//  env.config();



mongoose.connect(
    `mongodb+srv://brad1234:vjPslWCn5hKNKFAO@cluster0.wcavq.mongodb.net/planck?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
    }
    
    ).then(()=> {
        console.log('Database connected');
    });


    
    app.use(express.json());
    app.use('/api', authRoutes);
    app.use('/api', adminRoutes);
    app.use('/api', categoryRoutes);

app.listen(port, () => {
  console.log(`Planck-audio listening at port : ${port}`)
})
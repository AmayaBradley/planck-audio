const express = require('express');
//  const env = require('dotenv');
const app = express();
const port = 2000 ;
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');



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

// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: "Server Running"
//     });
// });


// app.post('/data', (req, res, next) => {
//     res.status(200).json({
//         message: req.body
//     });
// });

app.listen(port, () => {
  console.log(`Planck-audio listening at port : ${port}`)
})
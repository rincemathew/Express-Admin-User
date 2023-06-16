const express = require('express')
const { path } = require('express/lib/application')
const { render } = require('express/lib/response')
const app = express()
const port = 3000
const userRouter = require('./routers/userRoute')
const adminRouter = require('./routers/adminRoute')

const collection = require('./models/mongodb')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.use('/static',express.static(path.join(__dirname,'public')))
// app.use('/images',express.static(path.join(__dirname,'public/images')))


// app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')


app.use('/',userRouter);
app.use('/admin',adminRouter);


app.listen(3000,console.log(`app running at port ${port}`))

module.exports = app
const express = require('express')
const { path } = require('express/lib/application')
const { render } = require('express/lib/response')
const app = express()
const port = 3000
const userRouter = require('./routers/userRoute')
const adminRouter = require('./routers/adminRoute')

// app.use('/static',)

// app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')


app.use('/',userRouter)
app.use('admin',adminRouter)


app.get('/',(req,res) => {
    res.render('index')
    // res.send("<h1>hello</h1>")
})

app.listen(3000,console.log(`app running at port ${port}`))
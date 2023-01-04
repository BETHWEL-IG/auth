const express=require('express')
const app=express()
const cors=require('cors')
const usersRoutes=require('./routes/usersRoutes')


app.use(cors())
app.use(express.json())


app.listen(3001,()=>{
    console.log('listening to port 3000')
})

app.use('/api/users', usersRoutes)
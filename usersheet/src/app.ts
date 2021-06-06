import express from 'express'
import cors from 'cors'
import compositeRoot from '../compositeRoot'
import dotenv from 'dotenv'

dotenv.config()
compositeRoot.configure()
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT=3001
const router=express.Router()

app.use('/api/v1/user',compositeRoot.userRouter())



app.listen(PORT,()=>{
    console.log(`App Running of Port ${PORT}`)
})

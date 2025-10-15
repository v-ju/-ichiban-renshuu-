import express from 'express'
import prisma from '@repo/db/prisma'
import 'dotenv/config'
import router from './routes'

const app = express()
app.use(express.json())

app.use('/api/v1',router)

const PORT = process.env.PORT
console.log(PORT)

async function connectDB(PORT) {
    try{
        await prisma.$connect()
        console.log("DB connected")
        app.listen(PORT, ()=> {console.log(`Server running on ${PORT}`)})
    }catch(error){
        console.error('Failed to connect', error);
        process.exit(1);
    }
}

connectDB(PORT)

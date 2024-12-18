import "dotenv/config"
import express from 'express'
import cors from 'cors'
import { connentDB } from './config/db.js'
import productRouter from './routes/productsRoutes.js'
import userRouter from './routes/userRoutes.js'
import cartRouter from './routes/cartRoutes.js'
import orderRouter from './routes/orderRoutes.js'

// App Config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// DB conntented
connentDB();

// api endpoints
app.use('/api/products', productRouter)
app.use('/images', express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get('/', (req, res) => {
    res.send('API Is Working')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
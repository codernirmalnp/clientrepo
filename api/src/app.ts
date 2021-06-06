import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'
import CompositionRoot from './CompositionRoot'
import cookieParser from 'cookie-parser'
import {ac} from './acessControl'

dotenv.config()
CompositionRoot.configure()
console.log(ac)
const permission = ac.can('admin').createOwn('post');
console.log(permission.granted)
const PORT =3001

const app = express()
app.use('/public',express.static(path.join(__dirname, '../public')));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api/v1/auth', CompositionRoot.authRouter())
app.use('/api/v1/post',CompositionRoot.postRouter())
app.use('/api/v1/comment',CompositionRoot.commentRouter())
app.use('/api/v1/document',CompositionRoot.documentRouter())


app.listen(PORT, () => console.log(`listening on port ${PORT}`))
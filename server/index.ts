import express from 'express';
import postRoute from './routes/postRoute';

const app: express.Application = express();
const port: number = 7788;

app.use(express.json());
app.use("/api/post", postRoute);

app.get('/', (_req, _res) => {
    _res.send("TypeScript With Express");
});
 
app.listen(port, () => {
    console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});




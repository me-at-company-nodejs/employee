import express, { Application, Request, Response} from 'express';

const app: Application = express();
const port: number = 3001;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello emploeems');
});

app.listen(port, () => {
    console.log(`Connectted successfully on port ${port}`);
});

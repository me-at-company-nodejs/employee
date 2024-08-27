import express, { Application, Request, Response} from 'express';
import employeeRoute from './routes/employees.route';

const app: Application = express();
const port: number = 3001;

// Link orchestratorRoute with app
app.use('/employee', employeeRoute);

app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
});

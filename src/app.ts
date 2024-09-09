import express, { Application } from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import locationRoutes from './routes/location.routes';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Location routes
app.use('/location', locationRoutes);

sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});

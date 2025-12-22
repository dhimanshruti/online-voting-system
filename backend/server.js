const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => res.send('🗳️ Online Voting API Running...'));

// Routes

app.use('/api/results', require('./routes/resultRoutes')); 
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/elections', require('./routes/electionRoutes'));
app.use('/api/vote', require('./routes/voteRoutes'));
app.use('/api/candidates', require('./routes/candidateRoutes'));
 

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

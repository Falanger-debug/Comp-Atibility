import mysql2 from 'mysql2';

const con = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwqw',
});

con.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        throw err;
    }
    console.log('Connected to the database');
});

export default con;

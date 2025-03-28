const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const connection = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log('Listening...');
    connection.connect(function(err){
        if(err) console.log(err);
        else console.log("Connected to database");
    });
});

app.post('/bookings', (req, res) => {
    const { bikeName, pickupLocation, dropoffLocation, pickupDate, dropoffDate, fullName, email, phone, address } = req.body;

    const queryString = `
        INSERT INTO bookings (bikeName, pickupLocation, dropoffLocation, pickupDate, dropoffDate, fullName, email, phone, address)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(queryString, [bikeName, pickupLocation, dropoffLocation, pickupDate, dropoffDate, fullName, email, phone, address], (error, results, fields) => {
        if (error) {
            console.error('Error inserting booking:', error);
            res.status(500).json({ message: 'Error creating booking' });
        } else {
            console.log('Booking created!');
            // Reduce in-stock count by 1
            const carData = require('../frontend/src/components/CarData').CAR_DATA;
            const bike = carData.flat().find(bike => bike.name === bikeName);
            if (bike) {
                bike.InStock--;
            }
            res.status(201).json({ message: 'Booking created successfully' });
        }
    });
});

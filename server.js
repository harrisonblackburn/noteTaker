// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static(path.join(__dirname,'../assets/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/assets/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/assets/public/notes.html')));
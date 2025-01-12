const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

 app.get('/PaidStuff', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'paid_stuff.html'));
 });

 app.get('/FreeStuff', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'free_stuff.html'));
 });
 app.get('/PaidOptimization', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'paid_optimization.html'));
 });
 app.get('/PaidSensi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'paid_sensi.html'));
 });
 app.get('/BasicSensi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'basic_sensi.html'));
 });
 app.get('/AdvanceSensi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'advance_sensi.html'));
 });
 app.get('/SupremeSensi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'supreme_sensi.html'));
 });
 app.get('/BasicOptimization', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'basic_optimization.html'));
 });
 app.get('/AdvanceOptimization', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'advance_optimization.html'));
 });
 app.get('/SupremeOptimization', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'supreme_optimization.html'));
 });
 
 app.get('/Purchase', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'purchase.html'));
 });



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


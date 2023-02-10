// import exprexx
import express from "express";

// import router
import router  from "./routes/routes.js";

// init express
const app = express();

// // basic route
// app.get('/biodata', (req, res) => {
//     res.send(
//     'Nama : Muhammad Daffa Fauzan <br>'+
//     'kelas : XI RPL 1 <br>'+
//     'Jurusan : RPL (Rekayasa Perangkat lunak) <br>'+
//     'Sekolah : SMK Assalaam Bandung <br>'+
//     'Alamat Sekolah : JL.situtarate'
//     );
// });
// app.get('/1', (req, res) => {
//     res.send('saya daffa');
// });
// app.get('/2', (req, res) => {
//     res.send('saya fadli');
// });
// app.get('/3', (req, res) => {
//     res.send('saya saputra');
// });
// app.get('/4', (req, res) => {
//     res.send('saya memet');
// });
// app.get('/5', (req, res) => {
//     res.send('saya diktod');
// });

// use router
app.use(router);

// listen on port
app.listen(5000, () => console.log('Server Running at http://localhost:5000'));
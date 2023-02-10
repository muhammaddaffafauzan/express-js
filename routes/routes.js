// import express
import express from "express";

// init express router 
const router = express.Router();

// router geometri
// router.get('/biodata/:nama/:kelas/:jurusan/:sekolah/:alamat', (req, res) => {
//     res.send(
//     'Nama : '+ req.params.nama + '<br>'+
//     'kelas : '+ req.params.kelas + '<br>'+
//     'Jurusan : '+ req.params.jurusan + '<br>'+
//     'Sekolah : '+ req.params.sekolah + '<br>'+                          
//     'Alamat : '+ req.params.alamat
//     );
// });
// // penjumlahan
// router.get('/lingkaran/:jari1', (req, res) => {
//     var hasillingkaran = 3.14 * parseInt(req.params.jari1) * parseInt(req.params.jari1) ;
    
//       res.send(
//         '<h2>Lingkaran</h2>' +
//         'pi : 3.14'+'<br>' +
//         'jari-jari : '+ req.params.jari1 + '<br>' +
//         'hasil : '+ hasillingkaran
//       );
// });
// router.get('/persegipanjang/:panjang/:lebar', (req, res) => {
//     var hasilpersegipanjang = parseInt(req.params.panjang) * parseInt(req.params.lebar) ;
    
//       res.send(
//         '<h2>Persegi panjang</h2>' +
//         'panjang :'+ req.params.panjang +'<br>' +
//         'lebar : '+ req.params.lebar + '<br>' +
//         'hasil : '+ hasilpersegipanjang
//       );
// });
// router.get('/segitiga/:alas/:tinggi', (req, res) => {
//     var hasilsegitiga = 1/2 * parseInt(req.params.alas) * parseInt(req.params.tinggi) ;
    
//       res.send(
//         '<h2>Segitiga</h2>' +
//         'alas : '+ req.params.alas +'<br>' +
//         'tinggi : '+ req.params.tinggi + '<br>' +
//         'hasil : '+ hasilsegitiga
//       );
// });
// router.get('/persegi/:sisi', (req, res) => {
//     var hasilpersegi = parseInt(req.params.sisi) * 4 ;
    
//       res.send(
//         '<h2>Persegi</h2>' +
//         'Sisi : '+ req.params.sisi + '<br>' +
//         'hasil : '+ hasilpersegi
//       );
// });

// router.get('/penilaian/:nama/:nilai', (req, res) => {
//           if (req.params.nilai >= 80) {
//             var status = "lulus";
//           } else {
//             var status = "tidak lulus";
//           }

//            res.send(
//             'nama   :' + req.params.nama + '<br>' +
//             'nilai  :' + req.params.nilai + '<br>' +
//             'status :' + status);
// });

// router.get('/sekolah/:jurusan/:kelas', (req, res) => {
//           if (req.params.jurusan == "TKRO") {
//             if (req.params.kelas == "X TKRO") {
//               var a = "Selamat datang di kelas X TKRO";
//             } else if (req.params.kelas == "XI TKRO"){
//               var a = "Selamat datang di kelas XI TKRO";
//             } else if (req.params.kelas == "XII TKRO"){
//               var a = "Selamat datang di kelas XII TKRO";
//             }else{
//               var a = "tidak tersedia";
//             }
//           } else if (req.params.jurusan == "RPL"){
//             if (req.params.kelas == "X RPL") {
//               var a = "Selamat datang di kelas X RPL";
//             } else if (req.params.kelas == "XI RPL"){
//               var a = "Selamat datang di kelas XI RPL";
//             } else if (req.params.kelas == "XII RPL"){
//               var a = "Selamat datang di kelas XII RPL";
//             }else{
//               var a = "tidak tersedia";
//             }
//           } else if (req.params.jurusan == "TBSM"){
//             if (req.params.kelas == "X TBSM") {
//               var a = "Selamat datang di kelas X TBSM";
//             } else if (req.params.kelas == "XI TBSM"){
//               var a = "Selamat datang di kelas XI TBSM";
//             } else if (req.params.kelas == "XII TBSM"){
//               var a = "Selamat datang di kelas XII TBSM";
//             }else{
//               var a = "tidak tersedia";
//             }
//           }else{
//             var a = "tidak tersedia";
//           }

//            res.send(
//             'jurusan   :' + req.params.jurusan + '<br>' +
//             'kelas  :' + req.params.kelas + '<br>' +
//             'status :' + a);
// });
// router.get('/soal1/:nama/:jenispesanan/:menu/:jumlah', (req, res) => {
//        if (req.params.jenispesanan == "makanan") {
//         if (req.params.menu == "nasi goreng") {
//           var a = 10000;
//         } else if (req.params.menu == "mie goreng"){
//           var a = 20000;
//         }else if (req.params.menu == "ayam goreng"){
//           var a = 30000;
//         }else{
//           var a = null;
//         }
//        } else if (req.params.jenispesanan == "minuman") {
//         if (req.params.menu == "air mineral") {
//           var a = 5000;
//         } else if (req.params.menu == "fresh tea"){
//           var a = 10000;
//         }else if (req.params.menu == "jus"){
//           var a = 15000;
//         }else{
//           var a = null;
//         }
//        }else{
//           null;
//        }
//       //  perhitungan
//       var  total = a * parseInt(req.params.jumlah);
//       var potongan;
//     if (total >= 100000) {
//       potongan = 10000;
//     } else {
//       potongan = 0
//     } 
//     var bayar = total - potongan;
//            res.send(
//             '<div style="border-style: solid;">'+
//             '<legend><h1>SELAMAT DATANG DI WARKOP 4646</h1></legend>'+
//             '<table>'+
//             '<tr><td><h3><u>Struk Pembayaran</u></h3></td></tr>'+
//             '<tr><td>Nama Pemesanan</td><td>:&ensp;'+ req.params.nama +'</td></tr>'+
//             '<tr><td>Jenis Pesanan</td><td>:&ensp;'+ req.params.jenispesanan +'</td></tr>'+
//             '<tr><td>Menu</td><td>:&ensp;'+ req.params.menu +'</td></tr>'+
//             '</table>'+
//             '<hr>'+
//             '<table>'+
//             '<tr><td>Harga</td><td>:&ensp;'+ a +'</td></tr>'+
//             '<tr><td>Jumlah</td><td>:&ensp;'+ req.params.jumlah +'</td></tr>'+
//             '</table>'+
//             '<hr>'+
//             '<table>'+
//             '<tr><td>Total</td><td>:&ensp;'+ total +'</td></tr>'+
//             '<tr><td>Potongan</td><td>:&ensp;'+ potongan +'</td></tr>'+
//             '</table>'+
//             '<hr>'+
//             '<table>'+
//             '<tr><td><font size="5"><b>Total Bayar</b></font></td><td>:'+ bayar +'</td></tr>'+
//             '<tr><td><i>*Terima kasih Telah Datang Di Restoran Kami*</i></td></tr>'+
//             '</table>'+
//             '</div>'
//             );

// });

router.get ('/soal2/:nama/:jurusan/:kelas/:indo/:inggris/:mtk/:pk/:pai', (req, res) => {
var semua = parseInt(req.params.indo) + parseInt(req.params.inggris) + parseInt(req.params.mtk) + parseInt(req.params.pk) + parseInt(req.params.pai);
var rata = semua / 5;
if (rata >= 90) {
   var grade = "A";
} else if (rata >= 80){
  var grade = "B";
}  else if (rata >= 70){
  var grade = "C";
}  else if (rata >= 60){
  var grade = "D";
}else if (rata >= 0){
  var grade = "E";
}else{
  var grade = null;
}

if (grade == "A") {
  var ket = "sangat baik";
} else if (grade == "B"){
  var ket = "baik";
} else if (grade == "C"){
  var ket = "cukup";
} else if (grade == "D"){
  var ket = "kurang baik"; 
}else if (grade == "E"){
  var ket = "sangat kurang";
}else{
  var ket = null;
}

if (rata >= 80) {
  var status = "LULUS";
} else {
  var status = "TIDAK LULUS";
}
  res.send(
    '<fieldset>'+
    '<legend>'+
    '<h2>Raport SMA Kalam kudus</h2>'+
    '</legend>'+
    '<table>'+
    '<tr><td><b>Nama</b></td><td>:&ensp;'+ req.params.nama +'</td></tr>'+
    '<tr><td><b>Jurusan</b></td><td>:&ensp;'+ req.params.jurusan +'</td></tr>'+
    '<tr><td><b>Kelas</b></td><td>:&ensp;'+ req.params.kelas +'</td></tr>'+
    '<tr><td><b>Nilai bahasa indonesia</b></td><td>:&ensp;'+ req.params.indo +'</td></tr>'+
    '<tr><td><b>Nilai bahasa inggris</b></td><td>:&ensp;'+ req.params.inggris +'</td></tr>'+
    '<tr><td><b>Nilai matematika</b></td><td>:&ensp;'+ req.params.mtk +'</td></tr>'+
    '<tr><td><b>Nilai Produktif</b></td><td>:&ensp;'+ req.params.pk +'</td></tr>'+
    '<tr><td><b>Nilai PAI</b></td><td>:&ensp;'+ req.params.pai +'</td></tr>'+
    '<tr><td>rata-rata</td><td>:&ensp;'+ rata +'</td></tr>'+
    '<tr><td>Grade</td><td>:&ensp;'+ grade +'</td></tr>'+
    '<tr><td>Keterangan</td><td>:&ensp;'+ ket +'</td></tr>'+
    '<tr><td>status</td><td>:&ensp;'+ status +'</td></tr>'+
    '</table>'+
    '</fieldset>'
  );
});

// export default router
export default router;
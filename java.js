var jmangkot = 10;
var beroprasi = 6;
var noangkot = 1;
// while(noangkot <= beroprasi) {
//     console.log('Angkot no. ' + noangkot + ' beroperasi dengan baik.');
//     noangkot++;

// for (;noangkot <=jmangkot; noangkot++){
//     if (noangkot <= beroprasi ){
//         console.log( 'Angkot no '+noangkot + ' beroprasi dengan baik');
//     }else{
//         console.log('Angkot no '+noangkot +' sedang tidak beroprasi');
//     }
// }



// pengkondisina mengunakan if dan else
// var angka =prompt('masukan angka');
// if(angka % 2 == 0){
//     alert (angka + ' adala bilangan genap')
// }else{
// alert ( angka + ' adala bialangan ganjil')
// }

var angka =prompt('masukan angka');
if(angka % 2 == 0){
    alert (angka + ' adala bilangan genap')
}else if (angka % 2==1){
    alert ( angka + ' adala bialangan ganjil')
}else{
    alert ('yang anda masukan bukan angka')
}
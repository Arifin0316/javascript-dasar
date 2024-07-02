// pengulangan di ja
// var ulang = true

// while(ulang === true ){
//     console.log('halo');
//     ulang = confirm('lagi');
// }

// contoh pengulangan mengunakan while
// var nilaiAwal = 1;

// while(nilaiAwal <= 10 ){
//     console.log('haloo ' +  nilaiAwal +'x')
// nilaiAwal++;
// }

// jumlahAngkot = 10;
// var noAngkot = 1;

// while(noAngkot <= jumlahAngkot ){
//     console.log('angkot no. ' + noAngkot + ' beroprasi dengan baik.');
// noAngkot++;    
// }

// pengulangan memgunakan for 

// var noAngkot =1;
// var jlmAngkot =10;
// var angkotBr = 5;


// for (var noAngkot; noAngkot <= jlmAngkot ; noAngkot++){

// if( noAngkot <= angkotBr && noAngkot !==4 ){
//     console.log('angkot no. ' + noAngkot +' beroprasi dengan baik');
// }else if(noAngkot == 4 || noAngkot == 7 || noAngkot == 10){
//     console.log('angkot no. ' + noAngkot + ' sedang lembur')
// }
// else{
//     console.log('angkot no. ' + noAngkot + ' sedang di perbaiki');
// }
// }

// pengulangan bersarang 

// var s ='';
// var nilai = 5;
// for (var i = nilai; i >= 0; i--){
//     for(var j = 0; j <= i; j++ ){
//         s += " ";
//     }
//     for(var a = nilai; a >= i; a--){
//         s += '*'
//     } 
//     for(var p = nilai; p > i; p--){
//         s += '*'
//     }
//     s += '\n';
    
// }
// for (var i = 0; i <= nilai; i++){
//     for(var j = 0; j <= i; j++ ){
//         s += " ";
//     }
//     for(var a = nilai; a > i; a--){
//         s += '*'
//     } 
//     for(var p = nilai; p >= i; p--){
//         s += '*'
//     }
//     s += '\n';
    
// }
// console.log(s);
// for (var i = 15; i > 0; i--){
//     for(var j = 0; j <= i; j++ ){
//         s += "*";
//     }
//     s += '\n';
// }
// console.log(s)

// function 

// function jumlahVolumDuaKubus(a, b){
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB

//     return total;
// }

// console.log(jumlahVolumDuaKubus(8,3));

// peyerdehanakan var untuk funsion

// function jumlahVolumDuaKubus(a, b){

//     return a*a*a+b*b*b;
// }

// console.log(jumlahVolumDuaKubus(8,3));


// sudo elemen mengunakan arai argumens

function tambah(){
     var hasil= 0;
    for(i = 0; i < arguments.length; i++ ){
        hasil += arguments[i];
    
//     }
//     return hasil;
// }

// var coba = tambah(1,2,3,4,5,6,7,8,9);

// console.log(coba);

// base case untuk mberhentikan pemangilan rekursif

// function tampilKanAngka(n){
//     if(n === 0) return;

//         console.log(n);

//         return tampilKanAngka(n-1)

// }

// tampilKanAngka(10)

// fungsin expresion

// var tampilkanPesan = function(nama){
//     alert('halo '+ nama );
// }
// tampilkanPesan('arifin')


// mnupulsi aray

// var arr =['senin,selasa,rabu'];

// console.log(arr);
// menambah isi array
// var arr =[];

// arr[0] = "senin"
// arr[1] = "selasa"
// arr[2] = "rabu"
// arr[3] = "kamis"

// console.log(arr);

// menghapus isi arrey
// var arr = ['senin','selas','rabu'];
// arr[1]=undefined

// console.log(arr)

// menampilkan array
// var arr = ['senin','selas','rabu','kamis','jumat'];

// for(var i = 0; i < arr.length; i++)
//     console.log('hari ' + arr[i]+ " nomer " + (i+1))

var penumpang = [];
var tambahPenumpang = function(namaPenumpang,penumpang){
// jika angkot kosong
if( penumpang.lenght == 0 ){
    // tambah kan penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array dan keluar dari return
    return penumpang;
}else{
    // telusuri seluru kursi dari awal
    for(var i = 0; i < penumpang.lenght; i++ ){
        // jika ada kursi kosong
        if(penumpang[i] == undefined){
            // tambah penumpang di kursi tersebut
            penumpang[i]= namaPenumpang;
            // ke,balikan isi array dan keluar dari funsion
            return penumpang;
            
        }
    }
}


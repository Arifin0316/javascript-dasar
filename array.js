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


// method pada array


// 1 join
// console.log(arr.join(' - '));

// 2. push & pop
// push untuk mendorong elemen mnuju yang paling akhir
// arr.push('halo')

//pop untuk menghilangkan/menghapus elemen terakhir
// arr.pop();  
// arr.pop();  


// unsift & shift
// unsift kebalikan dari push
// arr.unshift('halo');

// shift kebalikan dari pop
// arr.shift();

// 4. splice 
// splice (index awal, mau dihapus berapa,element baru, elemeng baru2)
// arr.splice(1,2,'halo','yess')

// 5.slice
// slice(awal,akhir)
// var arr = ['senin','selas','rabu','kamis','jum,at'];

// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. forEach  sama seperti lupuning for

// var angka = [1,2,3,4,5,6,7,8];

// for(var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }

// angka.forEach (function (e) {
//     console.log(e)
// }) 

// 6. map sama sepert forEach tapi bisa mengembalikan nilai

// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){
//     return e * 2
// })

// console.log(angka2.join(' - '))

// 7. sort untuk mengurutkan angka

// var angka = [2,1,6,4,5,3,8,7];
// angka.sort();
// console.log(angka.join(' - '));

// 8.filter untuk menemukan nilai
// var angka = [2,1,6,4,10,5,3,20,8,7];
// var angka2 = angka.filter(function(x){
//     return x > 5;
// })
// console.log(angka2.join(' - '));

// 9.find seperti filter tapi hanya bisa 1 nilai

// var angka = [2,1,6,4,10,5,3,20,8,7];
// var angka2 = angka.find(function(x){
//     return x > 5;
// })
// console.log(angka2);


// objek di java scib
// objek seperti array tapi bisa menyimpan bayak variabel

// var mhs ={
//     nama : "arifin",
//     umur : 19,
//     ipk : [1,2,3,4,5],
//     alamat : {
//        jalan : "jalan merak no 33",
//        kota : "malang",
//        profinsi:"jawa timur",
//     }
// };

// menulis objek
// 1. objek literal

var mhs1 = {
    nama:'fin',
    umur: 12,
    id: '09877',
}
var mhs2 = {
    nama:'al',
    umur: 15,
    id: '393802',
}

// 2. mengunakan funsion deklaration

function buatObjekBaru (nama,umur,id){
    var mhs ={};
    mhs.nama = nama;
    mhs.unur = umur;
    mhs.id = id;
    return mhs;
}

var mhs3 =buatObjekBaru('fin',12,'098778');

// 3. mengunkan constructor
function Mahasiswa (nama,umur,id){
    this.nama = nama;
    this.unur = umur;
    this.id = id;
}

var mhs4 = new Mahasiswa ('fin',12,'098778');
var tanya = true
while ( tanya ) {

var p = prompt('pilih : gajah semut orang');

var comp = Math.random();
if(comp < 0.34){
    comp = 'gajah';
}else if (comp >= 0.34 && comp < 0.67 ){
    comp = 'orang';
}else{
    comp = 'semut';
}

console.log(comp);

var hasil ='';
if( p == comp ){
    hasil = 'seri';
}else if(p == 'gajah' ){
    hasil = (comp == 'orang') ? 'menang' : 'kalah';
}else if(p == 'orang'){
    hasil = (comp == 'gajah') ? 'kalah' : 'menang';
}else if(p == 'semut'){
    hasil = (comp == 'orang') ? 'kalah' : 'menang';
}else{
    hasil = 'memasukan pilihan yang salah';
}    

alert('kamu memila ' + p + ' dan komputer memilih '+ comp + " \n maka hasil nya: kamu " + hasil);

tanya = confirm('lagi')
}

alert('terima kasi suda bermain');


// tebak angka


alert('coba kalian tebak anka 1 - 10')
var comp = Math.random()

if(comp < 0.0){
    comp = '1';
}else if(comp >= 0.0 && comp <= 0.1){
    comp = '2';
}else if(comp >= 0.1 && comp <= 0.2){
    comp = '3';
}else if(comp >= 0.2 && comp <= 0.3){
    comp = '4';
}else if(comp >= 0.3 && comp <= 0.4){
    comp = '5';
}else if(comp >= 0.4 && comp <= 0.5){
    comp = '6';
}else if(comp >= 0.5 && comp <= 0.6){
    comp = '7';
}else if(comp >= 0.6 && comp <= 0.7){
    comp = '8';
}else if(comp >= 0.7 && comp <= 0.8){
    comp = '8';
}else if(comp >= 0.8 && comp <= 0.9){
    comp = '9';
}else{
    comp = '10';
}

for(i = 1; i <= 3; i++){
    var p = prompt('pili angka 1 sampai 10')
    var hasil = '';
    if( comp == p){
        hasil = 'benar'
    }else if(comp < p ){
        hasil = 'terlalu besar'
    }else if(comp > p ){
        hasil = 'terlalu kecil'
    }else{
        alert('angka yang anda masukan salah')
    }
    alert(hasil)
}
alert('jawaban nya adalah ' + comp + ' terima kasi')




// if(comp == 'orang'){
    //     hasil = 'menang';
    // }else{
    //     hasil = 'kalah';
    // }
    // mengunakan ternari

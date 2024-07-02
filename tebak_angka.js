

var p = prompt('pilih angka 1 sampaih 10')
var comp = (Math.random() );
var hasil = '';
var main = 3

if(comp <= 0.1){
    comp = '1'
}else if(comp <= 0.2){
    comp = '2'
}else if(comp <= 0.3){
    comp = '3'
}else if(comp <= 0.4){
    comp = '4'
}else if(comp <= 0.5){
    comp = '5'
}else if(comp <= 0.6){
    comp = '6'
}else if(comp <= 0.7){
    comp = '7'
}else if(comp <= 0.8){
    comp = '8'
}else if(comp <= 0.9){
    comp = '9'
}else{
    comp = '10'
}
console.log(comp)

if(p == comp){
    hasil = 'menang';
}else{
    hasil = 'kalah';
}



alert('kamu memilih angkah ' + p + ' dan computer memili angka ' + comp + '\n maka kamu ' + hasil)


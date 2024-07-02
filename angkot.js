var jmangkot =10;
var beroprasi =6;
var noangkot =1;

for (;noangkot <=jmangkot; noangkot++){

    if (noangkot <= beroprasi && noangkot!==5 ){
        console.log( 'Angkot no '+noangkot + ' beroprasi dengan baik');
    }else if (noangkot ===8 || noangkot ===10 || noangkot ===5){
        console.log ('angkot no '+ noangkot + ' sedang lembur')
    }else{
        console.log('Angkot no '+noangkot +' sedang tidak beroprasi');
    }
}
//  || arti nya atau
//  $$ arti nya dan
//  !== arti tidak samadengan atau tidak
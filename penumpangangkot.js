var penumpang = [];
var tambahPenumpang =function(namapenumpang,penumpang){
    // jika kosong
    if( penumpang.length == 0){
        // tambah penumpang di awal array
       penumpang.push(namapenumpang);
    //    kembalikan isi array dan keluar dari return
       return penumpang;
    }else{
        // tulusuri kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if(penumpang[i] == undefined){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namapenumpang
                // kembalikan array dan keluar dari funsion
                return penumpang;
            }
            // jika suda ada nama yang sama
            else if(penumpang[i] == namapenumpang){
            // tampilkan pesan kesalahan
            console.log(namapenumpang + 'suda ada di dalam angkot')
            // kembalikan isi array dan keluar dari funtion
            return penumpang;
            }
            else if( i == penumpang.length - 1){
                // tambahkan penumpang
                penumpang.push(namapenumpang);
                // kembalikan isi array dan keluar dari funsion
                return penumpang;
            }
        }
    }

}

var hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length == 0 ){
        console.log('angkot masi kosong')
    }else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            }else if(i == penumpang.length - 1){
                console.log(namaPenumpang + ' tidak ada di dalam angkot')
            }
        }
    }
    return penumpang;
}







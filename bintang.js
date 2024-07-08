var s ='';
for ( var i = 10; i > 0; i--){
   for ( var j = 0; j > i; j++){
    s += '*';
   }


    s += '\n'
}
console.log (s);

var s = '';
var pola = 10;
for(var i = 1; i <= pola; i++){

    for(var j = pola; j >= i; j-- ){
        s += ' ';
    }
    for(var k = 1; k <= i + (i - 1); k++){
        s += '*';
    }
    s += '\n'
}

for(var i = 1; i <= pola; i++){

    for(var j = 1; j <= i; j++ ){
        s += ' ';
    }
    for(var k = pola; k >= (2*i- pola); k--){
        s += '*';
    }
    s += '\n'
}
console.log(s)

var s = '';
var pola = 10;
for(var i = 1; i <= pola; i++){

    for(var j = 1; j <= i; j++ ){
        s += '*';
    }
    s += '\n'
}

for(var i = 1; i <= pola; i++){

    for(var j = pola; j >= i; j-- ){
        s += '*';
    }
    s += '\n'
}
console.log(s)

var s = '';
for(var i = 1; i <= 10; i++){
    for(var j = 1; j <= 10; j++){
        if(j % 2 == 0 && i % 2 == 0){
           s += '#'
        }else if(j % 2 == 1 && i % 2 == 1){
           s += '#'
        } else{
            s += ' '
        }
    }
    s += "\n"
}
console.log(s)

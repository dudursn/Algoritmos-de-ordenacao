/* Algoritmos de ordenação em javascript*/

var entrada = [16, 20, 12, 5, 8, 9, 17, 19, 7, 3];
var n = entrada.length;

function selectionSort(){
    var v = entrada.slice();
    var menor, i, j;
    for (i = 0; i < n; i++){
        menor = i;    
        for (j = i+1; j < n; j++){
            if(v[menor]> v[j]){
                menor = j;
            }
        }
        aux = v[i];
        v[i] = v[menor];
        v[menor] = aux;
    }
    return v;
}

function imprime(dados){
    console.log(dados);
}

function bubbleSort(){
    var v, aux, i, j;
    v = entrada.slice();
    for(i = 0; i < n-1; i++){
        for(j= i+1; j < n; j++){
            if(v[i]>v[j]){   
                aux = v[i];
                v[i] = v[j];
                v[j] = aux;
            }
        }
    }
    
    return v;
}


function insertSort(){
    var v = entrada.slice();
    var i, j, key;
    for(i = 1; i < n; i++){
        key = v[i];
        j = i-1;
        while(j>=0 && v[j]>key){
            v[j+1] = v[j];
            j-=1;
        }
        v[j+1] = key;
    }
    return v;
}
function shellSort(){
    var i , j , key;
    var h = 1;
    var v = entrada.slice();
    while(h < n) {
        h = 3*h+1;
    }
    while ( h > 1) {
        h = parseInt(h/3);
        //A partir daqui é algo parecido com o InsertSort, sendo que quando h =1 é o próprio InsertSort
        for(i = h; i < n; i++) {
            key = v[i];
            j = i - h;
            while (j >= 0 && key < v[j]) {
                v [j + h] = v[j];
                j = j - h;
            }
            v [j + h] = key;
        }
        console.log("h = "+h);
    }
    return v;
}

/*
function mergeSort(v, esq, dir){
    //esq = 0; dir = n-1;
    var vetAux = []
    var v= entrada.slice();
    var meio;
    if(esq < dir){
        meio = (esq+dir)/2;
        mergeSort(v, 0, meio);
        mergeSort(v, meio+1, dir);
        v= merge(v, vetAux, esq, meio+1, dir);
    }
    return v;
}
function merge(v, vetAux, posEsq, posDir, fimDir){
    var fimEsq = posDir -1, i;
    var posTemp = posEsq;
    var numElem = fimDir - fimEsq + 1;
    while(posEsq  <= fimEsq && posDir <=fimDir){
        if(v[posEsq] < v[posDir]){
            vetAux[posTemp] = v[posEsq];
            posTemp++; posEsq++;
        }else{
            vetAux[posTemp] = v[posDir];
            posTemp++; posDir++;
        }

    }

    for(i = 0; i < numElem; i++){
        vetAux[fimDir] = v[fimDir];
    }

}


function quickSort(inicio, fim){
    //inicio = 0; fim = n-1;
    var posPivo;
    var v = entrada.slice();
    if(inicio < fim){
        posPivo,v = quickParticiona(v, inicio, fim);
        v = quickSort(inicio, posPivo-1);
        v = quickSort(posPivo+1, fim);
    }
    return v; 
}

function quickParticiona(v, inicio, fim){

    var pivo = v[inicio], esq = inicio +1, dir = fim, troca;
    while(esq <= dir){
        if(v[esq] <= pivo){
            esq+=1;
        } else if(v[dir] > pivo){
            dir-=1;
        } else{
            troca = v[esq];
            v[esq] = v[dir];
            v[dir] = troca;
            esq+=1;
            dir-=1;
        }
    }
    v[inicio] = v[dir];
    v[dir] = pivo;
    return dir, v;
}
*/
function main(){
    imprime(entrada);
    /*imprime(selectionSort());
    imprime(bubbleSort());
    imprime(insertSort());
    */
    imprime(shellSort());
    /*
    imprime(quickSort(0, n-1));
    imprime(mergeSort(0, n-1)) 
    */
    
}

main();


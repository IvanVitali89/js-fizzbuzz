//creare un ciclo if che conta fino a 100
//se il contatore % 15 da 0 allora stampa FizzBuzz
//se il contatore % 3 da 0 allora stampa Fizz
//se il contatore % 5 da 0 allora stampa Buzz
//altrimenti stampa il contatore



let i=1
for (i=1; i<=100; i++) {
if ( i%15 ===0){
    console.log('FizzBuzz')
    } else if ( i%3===0){
        console.log('Fizz')
    }else if ( i%5===0){
        console.log('Buzz')
    } else
    console.log(i);
}
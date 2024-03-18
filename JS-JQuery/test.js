// const platform = {situs:"Gamelab", ekstensi:"ID", id:99};

// let output = "";
// for (let key in platform) {
//   output += platform[key];
// }

// platform.situs 

// console.log( output );
// --------------------------------------------------
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let output = "";
// for(let index in num) {
//     output += num[index] + " "
// }

// console.log(output);
// --------------------------------------------------
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function compareDescending(a, b) {
//     return b-a;
// }

// num.sort(compareDescending);
// console.log(num);
// --------------------------------------------------
// perulangan for of
// const array = [1, 2, 3, 4, 5, 6, 7, 8 ,9];

// let output = "";
// for(let a of array) {
//     output += a + " - ";
// }
// console.log(output);
// ------------------------------------------------------
// perulangan untuk STR
// let platform="CYKA BLYAT";
// let output= "";

// for (let p of platform) {
//     output += p + " ";
// }
// console.log(output);
// ------------------------------------------------------
//perulangan do while
// var i = 0;
// var output = "";

// do
// {
//   output += i + " ";
//   i++;
// } while (i > 10)

// console.log( output );
// ------------------------------------------------------
//kuis #02 tadi
// var text = "";
// for (var x=0; x<50; x++) {
//     text += x + " ";
//     x += x;
// }
// console.log(text);
//--------------------------------------------------------
//Kuis #03 tadi
// var text = "";
// for (var x=0; x<10; x++)
// {
//   for (var y=0; y<=x; y++)
//   {
//     text += "*";
//   }
//   text += "\n";
// }
// console.log(text);
//--------------------------------------------
//piramid sama tapi kebalik
// var text = "";
// for (var x = 1; x <= 5; x++) {
//     for (var y = 1; y <= 5; y++) {
//         if (y <= 5 - x) {
//             text += " ";
//         } else {
//             text += "*";
//         }
//     }
//     text += "\n";
// }
// console.log(text);
//------------------------------------------
// // membuat fungsi converter celcius ke fahrenheit
// function toCelsius(fahrenheit)
// {
//   return (5/9) * (fahrenheit-32);
// }

// fungsi digunakan di sini
// console.log( "10 fahrenheit = " + toCelsius(10) + " C" );
// console.log( "27 fahrenheit = " + toCelsius(27) + " C" );
//----------------------------------------------------------------------
//recursion
// function factorial(n) {
//     if (n === 0) {
//     return 1; // Basis of recursion: factorial of 0 is 1
//     } else {
//     return n * factorial(n - 1); // Recursive invocation
//     }
//     }
    
//     console.log(factorial(10)); // Output: 120 because (5! = 5 * 4 * 3 * 2 * 1 = 120)
//----------------------------------------------------------------------------------------
// function konterMenurun( angka_awal )
// {
//     console.log( angka_awal );

//     let angka_berikutnya = angka_awal - 1;

//     if (angka_berikutnya > 0)
//     {
//         konterMenurun(angka_berikutnya);
//     }
//     else
//     {
//         console.log( "Selesai" );
//     }
// }
// konterMenurun=(100);

// Get user input
// const userInput = prompt("Enter something:");
// console.log("User input:", userInput);

//-------------------------------------------------------------------------------------------
//Fibonacci
function fibonaci(input)
{
  if(input < 2) 
  {
    return input;
  }
  else 
  {
    return fibonaci(input - 1) + fibonaci(input - 2);
  }
}
for(let i = 0; i < 8; i++) 
{
    console.log(fibonaci(i));
}
//------------------------------------------------------------------------------
//FUNC #01
// function cetak(input)
// {
//     console.log(input);
// }

// cetak("Belajar");
// cetak("Bermain");
// cetak("Bermakna");
//FUNC 02
// function publikasi_buku(isbn, judul)
// {
//     return isbn + ": " + judul;
// }

// console.log( publikasi_buku("1234", "Magang Online di Gamelab.ID") );
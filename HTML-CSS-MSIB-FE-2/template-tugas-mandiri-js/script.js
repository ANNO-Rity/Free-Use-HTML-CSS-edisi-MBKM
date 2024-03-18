$(document).ready(function(){
  $(document).ready(function(){
    // Menampilkan semua gambar
    $('.all').click(function(){
      $('.images img').fadeIn();
    });
  
    // Menampilkan hanya gambar makanan
    $('.foods').click(function(){
      $('.images img').fadeOut();
      $('.images img.foods').fadeIn();
    });
  
    // Menampilkan hanya gambar minuman
    $('.drinks').click(function(){
      $('.images img').fadeOut();
      $('.images img.drinks').fadeIn();
    });
  
    // Menampilkan hanya gambar dessert
    $('.desserts').click(function(){
      $('.images img').fadeOut();
      $('.images img.desserts').fadeIn();
    });
  });
  
});

// document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('.filter-buttons');
//     const images = document.querySelectorAll('.images img');
  
//     buttons.forEach(button => {
//       button.addEventListener('click', () => {
//         const filter = button.getAttribute('data-filter');
        
//         images.forEach(image => {
//           if (filter === 'all' || image.classList.contains(filter)) {
//             image.classList.remove('hidden');
//           } else {
//             image.classList.add('hidden');
//           }
//         });
//       });
//     });
//   });
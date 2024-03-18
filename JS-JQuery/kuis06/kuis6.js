function hideEl() {
    // buat kode untuk menyembunyikan sebuah elemen
    const el = document.querySelector('p:not([class])');
    el.style.display = 'none';
  }
  
  function hideClass() {
    // buat kode untuk menyembunyikan sebuah elemen yang memiliki class tertentu
    const el = document.querySelector('p.hide-class');
    el.style.display = 'none';
  }
  
  function hideAttr() {
    // buat kode untuk menyembunyikan sebuah elemen yang memiliki atribut tertentu
    const el = document.querySelector('a#hide-attr');
    el.style.display = 'none';
  }
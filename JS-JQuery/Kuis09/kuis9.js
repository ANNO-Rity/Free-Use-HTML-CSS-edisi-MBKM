$(document).ready(function() {
    //ganti style
    $('button.ON').click(function() {
        $('p').addClass('class1');
    });

    //hapus gambar
    $('button.IMG').click(function() {
        $('.inner2').remove();
    });

    //cek kelas gambar
    $('button.CHK').click(function() {
        alert($('ing').hasClass('gambar'));
    });

    //nambah gambar dibawah
    $('button.ADD').click(function() {
        $('.question').prepend('<img src="https://s.yimg.com/os/creatr-uploaded-images/2022-10/a2a331c0-5060-11ed-bdbf-1316994ac4da" alt="Nebula" style="width:480px; border-radius:15px; margin:10px;">');
    });

    //APPEND
    $('button.APPEND').click(function() {
        $('.wir1').append('<div class="wir2">Warga Indonesia Raya</div>')
    });
});

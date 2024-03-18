function cekKriteria(rumah) {
    let kriteriaTerpenuhi = 0;
  
    if (rumah.tidakRawanBanjir) {
      kriteriaTerpenuhi++;
    }
  
    if (rumah.tidakRawanLongsor) {
      kriteriaTerpenuhi++;
    }
  
    if (!rumah.industri) {
      kriteriaTerpenuhi++;
    }
  
    if (rumah.luasTanah >= 800) {
      kriteriaTerpenuhi++;
    }
  
    if (rumah.luasBangunan >= 400) {
      kriteriaTerpenuhi++;
    }
  
    if (rumah.fasilitas.kolamRenang) {
      kriteriaTerpenuhi++;
    }
  
    if (rumah.fasilitas.parkirLuas) {
      kriteriaTerpenuhi++;
    }
  
    if (rumah.fasilitas.kebun) {
      kriteriaTerpenuhi++;
    }
  
    return kriteriaTerpenuhi;
  }
  
  function tampilkanHasil(rumah) {
    const kriteriaTerpenuhi = cekKriteria(rumah);
  
    if (kriteriaTerpenuhi === 8) {
      console.log(`Rumah dengan alamat ${rumah.alamat} telah memenuhi semua kriteria yang ditentukan.`);
    } else {
      console.log(`Rumah dengan alamat ${rumah.alamat} belum memenuhi semua kriteria yang ditentukan.`);
    }
  }
  
  const rumah1 = {
    alamat: 'Louisville',
    tidakRawanBanjir: true,
    tidakRawanLongsor: true,
    industri: false,
    luasTanah: 850,
    luasBangunan: 450,
    fasilitas: {
      kolamRenang: true,
      parkirLuas: true,
      kebun: true
    }
  };
  
  const rumah2 = {
    alamat: 'Newton side',
    tidakRawanBanjir: true,
    tidakRawanLongsor: false,
    industri: false,
    luasTanah: 800,
    luasBangunan: 400,
    fasilitas: {
      kolamRenang: true,
      parkirLuas: true,
      kebun: true
    }
  };
  
  tampilkanHasil(rumah1);
  tampilkanHasil(rumah2);
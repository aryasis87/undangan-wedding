// ============================================================
//  KONFIGURASI UNDANGAN — Wedding
//  Ubah seluruh isi undangan dari satu tempat ini saja.
//  (Tampilan tidak perlu disentuh.)
//
//  Ini undangan CONTOH: nama, tempat, dan nomor rekening fiktif.
//  Foto di /public/images adalah placeholder berlabel — ganti
//  dengan foto asli mempelai (ukuran 3:4 untuk potret).
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'Undangan Pernikahan — Raka & Sinta',
    description: 'Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda untuk hadir di acara pernikahan kami.',
  },

  // -- Sambutan / quote pembuka --
  opening: {
    greeting: 'The Wedding Of',
    quote:
      'Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang di antara kamu.',
    quoteSource: 'QS. Ar-Rum: 21',
  },

  // -- Latar hero (foto berdua, orientasi lanskap) --
  heroImage: '/images/hero-latar.webp',

  // -- Mempelai --
  // `instagram` opsional: isi nama akun tanpa "@" bila ingin ditampilkan.
  couple: {
    groom: {
      name: 'Raka',
      fullName: 'Raka Adi Pratama',
      as: 'Putra dari',
      parents: 'Bpk. Suryanto & Ibu Wulandari',
      photo: '/images/mempelai-pria.webp',
    },
    bride: {
      name: 'Sinta',
      fullName: 'Sinta Dewi Maharani',
      as: 'Putri dari',
      parents: 'Bpk. Hendarto & Ibu Kartika',
      photo: '/images/mempelai-wanita.webp',
    },
  },

  // -- Tanggal utama untuk countdown (format ISO) --
  mainDate: '2027-08-14T08:00:00+07:00',

  // -- Rangkaian acara --
  // `start`/`end` (ISO) dipakai untuk tombol "Tambah ke Google Calendar".
  events: [
    {
      name: 'Akad Nikah',
      date: 'Sabtu, 14 Agustus 2027',
      time: '08.00 - 10.00 WIB',
      venue: 'Kediaman Mempelai Wanita',
      address: 'Kotagede, Yogyakarta',
      start: '2027-08-14T08:00:00+07:00',
      end: '2027-08-14T10:00:00+07:00',
    },
    {
      name: 'Resepsi',
      date: 'Sabtu, 14 Agustus 2027',
      time: '11.00 - 14.00 WIB',
      venue: 'Pendapa Wening Asri',
      address: 'Kotagede, Yogyakarta',
      start: '2027-08-14T11:00:00+07:00',
      end: '2027-08-14T14:00:00+07:00',
    },
  ],

  // -- Lokasi (embed Google Maps) --
  // Contoh ini menunjuk area Kotagede. Ganti `q=` dengan nama/koordinat tempat acara.
  location: {
    label: 'Pendapa Wening Asri, Kotagede, Yogyakarta',
    note: 'Peta contoh menunjukkan area Kotagede.',
    mapEmbed: 'https://www.google.com/maps?q=Kotagede,+Yogyakarta&output=embed',
    mapLink: 'https://maps.google.com/?q=Kotagede,+Yogyakarta',
  },

  // -- Love story / timeline --
  story: [
    { year: '2019', title: 'Pertama Bertemu', desc: 'Dipertemukan di sebuah acara kampus dan mulai saling mengenal.' },
    { year: '2021', title: 'Menjalin Hubungan', desc: 'Memutuskan untuk berkomitmen menjalani hubungan bersama.' },
    { year: 'Juli 2027', title: 'Lamaran', desc: 'Raka melamar Sinta di hadapan kedua keluarga besar.' },
    { year: 'Agustus 2027', title: 'Menikah', desc: 'Menyatukan dua hati dalam ikatan pernikahan yang sakral.' },
  ],

  // -- Galeri foto (potret 3:4) --
  gallery: [
    '/images/prewedding-1.webp',
    '/images/prewedding-2.webp',
    '/images/prewedding-3.webp',
    '/images/prewedding-4.webp',
    '/images/prewedding-5.webp',
    '/images/prewedding-6.webp',
  ],

  // -- Amplop digital / hadiah --
  // `contoh: true` menampilkan label "Nomor contoh". Hapus saat diisi rekening asli.
  gifts: {
    enabled: true,
    note: 'Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui:',
    banks: [
      { bank: 'BCA', number: '0000000000', holder: 'Raka Adi Pratama', contoh: true },
      { bank: 'Mandiri', number: '0000000000000', holder: 'Sinta Dewi Maharani', contoh: true },
    ],
  },

  // -- Musik latar (file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/latar.mp3',
    title: 'Canon in D — Johann Pachelbel',
    credit: 'rekaman US Air Force Band, domain publik',
  },

  // -- Footer --
  footer: {
    closing:
      'Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.',
    hashtag: '#RakaSintaForever',
  },

  // -- Halaman /kirim (membuat tautan undangan per tamu) --
  kirim: {
    pesan:
      'Assalamu’alaikum {nama},\n\nTanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di pernikahan kami, Raka & Sinta, Sabtu, 14 Agustus 2027.\n\nUndangan lengkap: {tautan}\n\nMerupakan kebahagiaan bagi kami bila berkenan hadir dan memberikan doa restu.',
  },
};

export default config;

// ============================================================
//  KONFIGURASI UNDANGAN — Wedding
//  Ubah seluruh isi undangan dari satu tempat ini saja.
//  (Tampilan tidak perlu disentuh.)
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

  // -- Mempelai --
  couple: {
    groom: {
      name: 'Raka',
      fullName: 'Raka Adi Pratama',
      as: 'Putra dari',
      parents: 'Bpk. Suryanto & Ibu Wulandari',
      instagram: 'raka.ap',
      photo: 'https://placehold.co/600x800/a87768/faf6f0.png?text=Mempelai+Pria',
    },
    bride: {
      name: 'Sinta',
      fullName: 'Sinta Dewi Maharani',
      as: 'Putri dari',
      parents: 'Bpk. Hendarto & Ibu Kartika',
      instagram: 'sinta.dm',
      photo: 'https://placehold.co/600x800/a87768/faf6f0.png?text=Mempelai+Wanita',
    },
  },

  // -- Tanggal utama untuk countdown (format ISO) --
  mainDate: '2026-08-15T08:00:00+07:00',

  // -- Rangkaian acara --
  // `start`/`end` (ISO) dipakai untuk tombol "Tambah ke Google Calendar".
  events: [
    {
      name: 'Akad Nikah',
      date: 'Sabtu, 15 Agustus 2026',
      time: '08.00 - 10.00 WIB',
      venue: 'Masjid Agung Al-Falah',
      address: 'Jl. Merdeka No. 12, Jakarta Pusat',
      start: '2026-08-15T08:00:00+07:00',
      end: '2026-08-15T10:00:00+07:00',
    },
    {
      name: 'Resepsi',
      date: 'Sabtu, 15 Agustus 2026',
      time: '11.00 - 14.00 WIB',
      venue: 'Ballroom Hotel Mawar',
      address: 'Jl. Merdeka No. 20, Jakarta Pusat',
      start: '2026-08-15T11:00:00+07:00',
      end: '2026-08-15T14:00:00+07:00',
    },
  ],

  // -- Lokasi (embed Google Maps) --
  location: {
    label: 'Ballroom Hotel Mawar, Jakarta Pusat',
    mapEmbed:
      'https://www.google.com/maps?q=Monas+Jakarta&output=embed',
    mapLink: 'https://maps.google.com/?q=Monas+Jakarta',
  },

  // -- Love story / timeline --
  story: [
    { year: '2019', title: 'Pertama Bertemu', desc: 'Dipertemukan di sebuah acara kampus dan mulai saling mengenal.' },
    { year: '2021', title: 'Menjalin Hubungan', desc: 'Memutuskan untuk berkomitmen menjalani hubungan bersama.' },
    { year: '2025', title: 'Lamaran', desc: 'Raka melamar Sinta di hadapan kedua keluarga besar.' },
    { year: '2026', title: 'Menikah', desc: 'Menyatukan dua hati dalam ikatan pernikahan yang sakral.' },
  ],

  // -- Galeri foto --
  // Placeholder bertema (andal). Ganti dengan URL foto asli saat dipakai.
  gallery: [
    'https://placehold.co/600x800/c89b8c/faf6f0.png?text=Prewedding+1',
    'https://placehold.co/600x800/b8924f/faf6f0.png?text=Prewedding+2',
    'https://placehold.co/600x800/8a7a72/faf6f0.png?text=Prewedding+3',
    'https://placehold.co/600x800/c89b8c/faf6f0.png?text=Prewedding+4',
    'https://placehold.co/600x800/b8924f/faf6f0.png?text=Prewedding+5',
    'https://placehold.co/600x800/8a7a72/faf6f0.png?text=Prewedding+6',
  ],

  // -- Amplop digital / hadiah --
  gifts: {
    enabled: true,
    note: 'Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui:',
    banks: [
      { bank: 'BCA', number: '1234567890', holder: 'Raka Adi Pratama' },
      { bank: 'Mandiri', number: '0987654321', holder: 'Sinta Dewi Maharani' },
    ],
  },

  // -- Musik latar (taruh file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/song.mp3',
    title: 'Backsound',
  },

  // -- Footer --
  footer: {
    closing:
      'Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.',
    hashtag: '#RakaSintaForever',
  },
};

export default config;

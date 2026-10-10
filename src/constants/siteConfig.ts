export interface NavItem {
  title: string;
  href: string;
  children?: {
    title: string;
    href: string;
    description?: string;
  }[];
}

export const siteConfig = {
  name: "PERSEKAT TEGAL",
  shortName: "PERSEKAT TEGAL",
  description: "Persatuan Sepakbola Kabupaten Tegal lahir pada 16 Agustus 1962. Dikenal dengan julukan LASKAR KI GEDE SEBAYU, klub ini terus melangkah membela kebanggaan Tegal dengan dukungan penuh dan kebanggaan dari kelompok supporter SKATERZ.",
  logo: "/persekat.jpg",
  slogan: '"Together We Rise, Stronger Than Ever"',
  sloganDesc: "Dukungan supporter adalah semangat juang kami di setiap pertandingan.",
  contact: {
    email: "info@persekat.com",
    phone: "+62 812 3456 7890",
    address: "Stadion TRI SANJA Kecamatan Slawi, Kabupaten Tegal, Jawa Tengah, Indonesia",
    // Link Embed Google Maps Stadion Tri Sanja Slawi
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.339239851685!2d109.13627937499695!3d-6.981086093019808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fbefc6bd67f67%3A0xb35e38eb44bf914f!2sStadion%20Tri%20Sanja!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
    tiktok: "https://tiktok.com",
  },
  navMenu: [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Pertandingan",
      href: "/pertandingan",
    },
    {
      title: "Tim",
      href: "/tim",
    },
    {
      title: "Media",
      href: "#",
      children: [
        { title: "Berita", href: "/media/berita" },
        { title: "Galeri", href: "/media/galeri" },
        { title: "Video", href: "/media/video" },
      ],
    },
    {
      title: "Store",
      href: "/store",
    },
    {
      title: "Tentang",
      href: "#",
      children: [
        { title: "Sejarah", href: "/tentang/sejarah" },
        { title: "Dewan Direksi", href: "/tentang/dewan-direksi" },
        { title: "Kontak", href: "/tentang/kontak" },
      ],
    },
  ] as NavItem[],
};
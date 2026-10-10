export interface StoreLocation {
  id: string;
  namaStore: string;
  alamat: string;
  jamOperasional: string;
  phone: string;
  mapEmbedUrl: string;
}

export const OFFICIAL_STORE_INFO = {
  tokopediaUrl: "https://tokopedia.com",
  shopeeUrl: "https://shopee.co.id",
  instagramStore: "https://instagram.com",
  whatsappStore: "+62 812 3456 7890",
};

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: "STORE-01",
    namaStore: "Persekat Official Store - Slawi",
    alamat: "Ruko Stadion Tri Sanja, Slawi, Kabupaten Tegal, Jawa Tengah",
    jamOperasional: "Senin - Minggu (09.00 - 21.00 WIB)",
    phone: "+62 812 3456 7890",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.339239851685!2d109.13627937499695!3d-6.981086093019808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fbefc6bd67f67%3A0xb35e38eb44bf914f!2sStadion%20Tri%20Sanja!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
  },
];
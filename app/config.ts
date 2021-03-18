export type BookConfig = {
  isbn: string;
  img: string;
};
type ISBN = string;

export type Config = { books: BookConfig[] };

const config: Config = {
  books: [
    {
      isbn: "0141036141",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327144697l/3744438.jpg",
    }, // 1984
    {
      isbn: "1416524347",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555114704l/45030607._SY475_.jpg",
    }, // Pet Sematary
    {
      isbn: "0575113294",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348037761l/13616278.jpg",
    }, // The Red Knight
    {
      isbn: "1982110589",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1596974522l/50892339.jpg",
    }, // The Institute
    {
      isbn: "0006480411",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554437249l/6088007._SY475_.jpg",
    }, // Neuromancer
    {
      isbn: "1416513450",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388281595l/1282921.jpg",
    }, // Pegasus Descending
    {
      isbn: "0465067107",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388315129l/18872940.jpg",
    }, // The Design of Everyday Things
    {
      isbn: "0575079797",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563833960l/50009069._SX318_SY475_.jpg",
    }, // The Blade Itself
    {
      isbn: "0575077883",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532965730l/40997713._SY475_.jpg",
    }, // Before They Are Hanged
    {
      isbn: "0575077905",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532965553l/40997691._SY475_.jpg",
    }, // Last Argument of Kings
    {
      isbn: "1260026671",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504794373l/36197082._SY475_.jpg",
    }, // Cryptoassets: The Innovative Investor's Guide to Bitcoin and Beyond
    {
      isbn: "076531178X",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1480717416l/68428._SY475_.jpg",
    }, // The Final Empire
    {
      isbn: "B07F6D2F95",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1538945004l/42206078._SY475_.jpg",
    }, // The Crypto Book: How to Invest Safely in Bitcoin and Other Cryptocurrencies
    {
      isbn: "0873190513",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386041998l/19119425.jpg",
    }, // Our Enemy, the State (LvMI)
  ],
};

export default config;

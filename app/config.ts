export type BookConfig = {
  id: string;
  name: string;
  img: string;
};

export type Config = { books: BookConfig[] };

const config: Config = {
  books: [
    {
      id: "1984",
      name: "1984",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327144697l/3744438.jpg",
    }, // 1984
    {
      id: "pet-sematary",
      name: "Pet Sematary",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555114704l/45030607._SY475_.jpg",
    }, // Pet Sematary
    {
      id: "the-red-knight",
      name: "The Red Knight",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348037761l/13616278.jpg",
    }, // The Red Knight
    {
      id: "the-institute",
      name: "The Institute",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1596974522l/50892339.jpg",
    }, // The Institute
    {
      id: "neuromancer",
      name: "Neuromancer",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554437249l/6088007._SY475_.jpg",
    }, // Neuromancer
    {
      id: "pegasus-descending",
      name: "Pegasus Descending",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388281595l/1282921.jpg",
    }, // Pegasus Descending
    {
      id: "the-design-of-everyday-things",
      name: "The Design of Everyday Things",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388315129l/18872940.jpg",
    }, // The Design of Everyday Things
    {
      id: "the-blade-itself",
      name: "The Blade Itself",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563833960l/50009069._SX318_SY475_.jpg",
    }, // The Blade Itself
    {
      id: "before-they-are-hanged",
      name: "Before They Are Hanged",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532965730l/40997713._SY475_.jpg",
    }, // Before They Are Hanged
    {
      id: "last-argument-of-kings",
      name: "Last Argument of Kings",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532965553l/40997691._SY475_.jpg",
    }, // Last Argument of Kings
    {
      id: "cryptoassets",
      name:
        "Cryptoassets: The Innovative Investor's Guide to Bitcoin and Beyond",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504794373l/36197082._SY475_.jpg",
    }, // Cryptoassets: The Innovative Investor's Guide to Bitcoin and Beyond
    {
      id: "the-final-empire",
      name: "The Final Empire",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1480717416l/68428._SY475_.jpg",
    }, // The Final Empire
    {
      id: "crypto-book",
      name:
        "The Crypto Book: How to Invest Safely in Bitcoin and Other Cryptocurrencies",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1538945004l/42206078._SY475_.jpg",
    }, // The Crypto Book: How to Invest Safely in Bitcoin and Other Cryptocurrencies
    {
      id: "our-enemy-the-state",
      name: "Our Enemy, the State (LvMI)",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386041998l/19119425.jpg",
    }, // Our Enemy, the State (LvMI)
    {
      id: "dune",
      name: "Dune",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546269682l/43419431._SY475_.jpg",
    }, // Dune
    {
      id: "the-fell-sword",
      name: "The Fell Sword",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1395781457l/17737893.jpg",
    }, // The Fell Sword
    {
      id: "kings-of-the-wyld",
      name: "Kings of the Wyld",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1493765420l/35053660._SY475_.jpg",
    }, // Kings of the Wyld
    {
      id: "the-dread-wyrm",
      name: "The Dread Wyrm",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1431613926l/23129080._SY475_.jpg",
    }, // The Dread Wyrm
    {
      id: "in-the-electric-mist",
      name: "In the Electric Mist With Confederate Dead",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347384287l/218736.jpg",
    }, // In the Electric Mist With Confederate Dead
    {
      id: "sixteen-ways-to-defend-a-walled-city",
      name: "Sixteen Ways to Defend a Walled City",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553885082l/37946419._SY475_.jpg",
    }, // Sixteen Ways to Defend a Walled City
    {
      id: "a-little-hatred",
      name: "A Little Hatred",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1558367199l/35606041.jpg",
    }, // A Little Hatred
    {
      id: "3-body-proble",
      name: "The Three-Body Problem",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1415428227l/20518872.jpg",
    }, // The Three-Body Problem
    {
      id: "dark-forest",
      name: "The Dark Forest",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454880648l/26114141.jpg",
    }, // The Dark Forest
    {
      id: "deaths-end",
      name: "Death's End",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502101573l/33517569.jpg",
    }, // Death's End
    {
      id: "atomic-habits",
      name:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg",
    }, // Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
    {
      id: "plague-of-swords",
      name: "A Plague of Swords",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463809721l/26367085._SY475_.jpg",
    }, // A Plague of Swords
    {
      id: "illustrated-man",
      name: "The Illustrated Man",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333349737l/13259261.jpg",
    }, // The Illustrated Man
  ],
};

export default config;

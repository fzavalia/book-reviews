export type BookConfig = {
  name: string;
  img: string;
  author: string;
};
type ISBN = string;

export type Config = { books: ISBN[] };

const config: Config = {
  books: [
    "0141036141", // 1984
    "198211598X", // Pet Samatary,
    "0316212296", // The Red Knight
    "1982110589", // The Institute
    "0006480411", // Neuromancer
    "1416513450", // Pegasus Descending
    "0465050654", // Design of everyday things
    "0575079797", // The blade itself
    "0575077883", // Before they are hanged
    "1591026903", // Last argument of kings
    "1260026671", // Cryptoassets
    "076531178X", // Final empire
  ],
};

export default config;

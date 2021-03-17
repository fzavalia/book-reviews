export type ReviewConfig = { name: string; img: string; author: string };

export type Config = { reviews: Map<string, ReviewConfig> };

const config: Config = {
  reviews: new Map([
    [
      "the-long-walk",
      {
        name: "The Long Walk",
        img: "/the-long-walk.jpg",
        author: "Stephen King (as Richard Bachman)",
      },
    ],
  ]),
};

export default config;

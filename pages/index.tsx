import axios from "axios";
import config from "../app/config";

type HomeProps = {
  books: {
    img: string;
  }[];
};

const Home = ({ books }: HomeProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 max-w-max gap-3 mx-auto">
      {books.map((book) => (
        <img className="h-full shadow-md" src={book.img}></img>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const books = await Promise.all(
    config.books.map((isbn) =>
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then((res) => res.data.items[0])
        .then((item) => ({
          img: item.volumeInfo.imageLinks.thumbnail,
        }))
    )
  );
  return {
    props: {
      books,
    },
  };
};

export default Home;

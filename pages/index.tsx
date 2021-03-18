import axios from "axios";
import config from "../app/config";

type HomeProps = {
  books: {
    img: string;
  }[];
};

const Home = ({ books }: HomeProps) => {
  return (
    <div>
      <div className="text-3xl text-center mt-16 sm:mt-32 mb-16 sm:mb-32">
        Book Reviews
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 max-w-max gap-3 mx-auto">
        {books.map((book) => (
          <img
            className="h-full shadow-md bg-white rounded-lg p-1 bg-opacity-50 cursor-pointer transform hover:scale-105 transition-transform ease-linear duration-100"
            src={book.img}
          ></img>
        ))}
      </div>
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

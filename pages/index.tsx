import config, { BookConfig } from "../app/config";

type HomeProps = {
  books: BookConfig[];
};

const Home = ({ books }: HomeProps) => {
  return (
    <>
      <div className="text-3xl text-center mt-8 sm:mt-16 mb-8">
        Book Reviews
      </div>
      <div className="md:w-2/3 xl:w-1/2 mx-auto pl-8 pr-8 mb-8 text-justify">
        Books that I have read since the beginning of the pandemic and after the
        quarantine started in Argentina (March/2020). Reviews are from other
        people, this is just a test of the NextJS and TailwindCSS frameworks.
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pl-8 pr-8 md:w-2/3 xl:w-1/2 mx-auto mb-8">
        {books.map((book) => (
          <img
            key={book.isbn}
            className="shadow-md rounded-lg border-2 dark:border-gray-700 border-gray-300 cursor-pointer transform hover:scale-105 transition-transform ease-linear duration-100"
            src={book.img}
          ></img>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      books: config.books,
    },
  };
};

export default Home;

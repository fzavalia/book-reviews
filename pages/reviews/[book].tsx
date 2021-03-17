import config, { ReviewConfig } from "../../app/config";

type ReviewProps = ReviewConfig;

const Review = ({ name, img }: ReviewProps) => (
  <div>
    <h1>{name}</h1>
    <img src={img} />
  </div>
);

export const getStaticPaths = async () => {
  const bookIterable = config.reviews.keys();
  const bookArray = Array.from(bookIterable);
  const paths = bookArray.map((book) => ({ params: { book } }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => ({
  props: config.reviews.get(params.book),
});

export default Review;

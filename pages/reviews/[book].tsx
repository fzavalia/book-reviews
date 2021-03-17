import Review from "../../app/components/review";
import config, { ReviewConfig } from "../../app/config";

type ReviewPageProps = ReviewConfig;

const ReviewPage = (props: ReviewPageProps) => <Review {...props} />;

export const getStaticPaths = async () => {
  const bookIterable = config.reviews.keys();
  const bookArray = Array.from(bookIterable);
  const paths = bookArray.map((book) => ({ params: { book } }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => ({
  props: config.reviews.get(params.book),
});

export default ReviewPage;

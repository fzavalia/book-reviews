import { ReviewConfig } from "../config";

type ReviewProps = ReviewConfig;

const Review = ({ name, img }: ReviewProps) => (
  <div>
    <h1>{name}</h1>
    <img src={img} />
  </div>
);

export default Review;

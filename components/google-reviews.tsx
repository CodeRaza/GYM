import { ExternalLink, Quote, Star } from "lucide-react";

const googleMapsLink = "https://www.google.com/maps/place/RI+Fitness+Club/@31.6151074,74.269438,19z/data=!3m1!4b1!4m6!3m5!1s0x39191d78a35fd3b7:0xcce7869a867f51fe!8m2!3d31.6151074!4d74.2700831!16s%2Fg%2F11zfk4v03c?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D";

const reviews = [
  {
    name: "Fahadlado Gaming",
    initial: "F",
    text: "Excellent experience",
  },
  {
    name: "Tahir Nawaz",
    initial: "T",
    text: "Best training and guidance in area. Best trainer.",
  },
  {
    name: "Omer Chaudhary",
    initial: "O",
    text: "Best training and guidance with quality equipments. Nouman Ismail is good fitness trainer.",
  },
  {
    name: "Abdullah Rajpoot",
    initial: "A",
    text: "Best gym of Shahdara",
  },
  {
    name: "Muhammad Ali",
    initial: "M",
    text: "Highly recommend",
  },
];

function Stars() {
  return (
    <span className="review-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={17} fill="currentColor" aria-hidden="true" />
      ))}
    </span>
  );
}

export function GoogleReviews() {
  return (
    <section className="google-reviews" aria-labelledby="google-reviews-title">
      <div className="container reviews-grid">
        <div className="reviews-summary">
          <div className="google-label"><span className="google-g">G</span> Google Reviews</div>
          <div className="rating-row">
            <strong>5.0</strong>
            <div><Stars /><span>12 reviews</span></div>
          </div>
          <h2 id="google-reviews-title">What members say.</h2>
          <a className="reviews-link" href={googleMapsLink} target="_blank" rel="noreferrer">
            View all on Google <ExternalLink size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="review-cards">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-card-top">
                <span className="review-avatar" aria-hidden="true">{review.initial}</span>
                <div><strong>{review.name}</strong><small>Google review</small></div>
                <Quote aria-hidden="true" />
              </div>
              <Stars />
              <p>“{review.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

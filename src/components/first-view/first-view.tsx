import Button from "../button/button";
import "./first-view.scss";


const FirstView = () => {
  return (
    <div className="first-view">
      <div className="first-view__header">
        <h2>Samurai King Rest</h2>
        <Button>ADD TO CART</Button>
      </div>
      <div className="first-view__image">
        <div className="image--container">
          <span className="image--text">Photo of the day</span>
        </div>
      </div>
      <div className="first-view__other-content">
        <div className="image__details">
          <span className="image__details--heading">
            About the Samurai King Resting
          </span>
          <br />
          <span className="image__details--heading heading--fade">Pets</span>
          <div className="image__details--text">
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder text to mockup various fonts for a type specimen
            book.So how did the classical Latin become so incoherent? According
            to McClintock.
          </div>
        </div>
        <div className="other-contents--abouts">
          <span className="people">People Also Buy</span>
          <div className="other-content--about">
            <div className="other-images one"></div>
            <div className="other-images two"></div>
            <div className="other-images three"></div>
          </div>
          <div className="content--about--details">
            <span className="details-header">Details</span>
            <span className="details-text">Size:1020 &times; 1020 pixel</span>
            <span className="details-text">Size: 15mb</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default FirstView;

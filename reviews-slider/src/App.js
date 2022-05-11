import React from "react";
import reviewData from "./reviewData.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function App() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const { name, job, description, image } = reviewData[slideIndex];

  function handleBack() {
    if (slideIndex > 0) {
      setSlideIndex((prevIndex) => prevIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex((prevIndex) => (prevIndex = reviewData.length - 1));
    }
  }
  function handleForward() {
    if (slideIndex < reviewData.length - 1) {
      setSlideIndex((prevIndex) => prevIndex + 1);
    } else if (slideIndex === reviewData.length - 1) {
      setSlideIndex(0);
    }
  }
  function handleSurpriseMe() {
    let randomNumber = Math.floor(Math.random() * reviewData.length);
    console.log(randomNumber);
    if (randomNumber === slideIndex) {
      setSlideIndex((prevIndex) => (prevIndex = randomNumber - 1));
    } else {
      setSlideIndex((prevIndex) => (prevIndex = randomNumber));
    }
  }
  // Need to account for what happens if one person is chose twice by the random number. You can maybe use a checkNumber function

  return (
    <div className='text-center'>
      <header className='header'>
        <h1 className='header--title'>Our Reviews</h1>
        <hr className='header--underline' />
      </header>
      <main className='main container flex column align-center'>
        <article className='main--person'>
          <div className='main--person--image_div'>
            <img className='main--person--image' src={image} alt={name} />
            <FaQuoteRight className='quote-icon' />
          </div>
          <h2 className='main--person--name'>{name}</h2>
          <h3 className='main--person--job'>{job}</h3>
          <p className='main--person--description'>{description}</p>
        </article>
        <div className='main--buttons'>
          <button className='main--buttons--back' onClick={handleBack}>
            <FaChevronLeft />
          </button>
          <button className='main--buttons--forward' onClick={handleForward}>
            <FaChevronRight />
          </button>
        </div>
        <button className='main--button--surprise' onClick={handleSurpriseMe}>
          Surprise me
        </button>
      </main>
    </div>
  );
}

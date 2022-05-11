import React from "react";

export default function Question({ question, answer }) {
  const [isShown, setIsShown] = React.useState(false);

  function handleClick() {
    setIsShown((prevState) => !prevState);
  }

  return (
    <article className='main--col_2--question_box'>
      <header className='flex justify-between align-center'>
        <h2 className='main--col_2--question_box--title'>{question}</h2>
        <button
          className='main--col_2--question_box--button'
          onClick={handleClick}
        >
          {isShown ? "-" : "+"}
        </button>
      </header>
      <p className='main--col_2--question_box--answer'>
        {isShown ? answer : ""}
      </p>
    </article>
  );
}

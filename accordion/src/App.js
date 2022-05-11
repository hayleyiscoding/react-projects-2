import data from "./data";
import React from "react";
import Question from "./components/Question";

export default function App() {
  return (
    <main className='main'>
      <div className='container flex justify-between'>
        <header className='main--col_1 flex-30'>
          <h1 className='main--col_1--header'>
            Questions and Answers About Login
          </h1>
        </header>
        <section className='main--col_2 flex-70'>
          {data.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

"use client";
import { useState } from 'react';
import styles from './globals.css'; // Импортируем стили

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1 className="title">Simple Counter</h1>
      <div className="counter">
        <button className="button" onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button className="button" onClick={increment}>+</button>
      </div>
      <button className='button reset-button' onClick={reset}>Reset</button>
    </div>
  );
}

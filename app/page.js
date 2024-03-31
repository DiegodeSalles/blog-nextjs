'use client';

import { useState } from 'react';
import Card from '@/components/card';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [names, setNames] = useState(['Piotr', 'John', 'Terry']);
  const name = 'Maria';
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleAdd = () => {
    setNames([...names, name]);
  };
  const cards = (isVisible &&
    names.map((name, index) => <Card key={index}>{name}</Card>));

  return (
    <>
      <div className="p-20 space-y-5">
        <div>Name, {name}</div>

        {cards}
        <div className="flex space-x-4">
          <button onClick={handleClick}>
            {isVisible ? 'Hide' : 'Show'}
          </button>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </>
  );
}

import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Info = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const id = searchParams.get('id');

  return (
    <div>
      <h1>Hello my name is {name} and id is {id}</h1>
    </div>
  )
}

export default Info
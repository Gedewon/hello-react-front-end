import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGreeting } from '../redux/greeting';

function Greeting() {
  const greeting = useSelector((state) => state.Greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    let isDisposed = false;

    if (!isDisposed) {
      dispatch(loadGreeting());
    }

    return () => { isDisposed = true; };
  }, [dispatch]);

  return (
    <div>{greeting.message}</div>
  );
}

export default Greeting;


import React, { useEffect, useState } from 'react';

const ClickText = () => {
  const [text, setText] = useState('Click here');

  useEffect(() => {
    const handleClick = () => {
      setText(prev => (prev === 'Click here' ? 'Clicked' : 'Click here'));
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <p style={{ fontSize: '20px', color: 'darkblue', marginTop: '20px' }}>
      {text}
    </p>
  );
};

export default ClickText;

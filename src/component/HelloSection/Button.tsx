import React from 'react';

interface ButtonProps {
  content: string;
  onClick?: () => void;
}

const Button = ({ content, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button">
      <div className="button" role="button">
        {content}
      </div>
    </button>
  );
};

export default Button;

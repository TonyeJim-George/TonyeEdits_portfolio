import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  className?: string;
}

const TypewriterComponent: React.FC<TypewriterProps> = ({ words, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const word = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
        setCurrentText(word.substring(0, currentText.length + 1));
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(word.substring(0, currentText.length - 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className={className}>
      <span>{currentText}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypewriterComponent;
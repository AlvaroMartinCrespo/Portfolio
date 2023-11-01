import { useEffect } from 'react';

export default function ArrowTop() {
  // To scroll smooth to top
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const arrow = document.getElementById('arrow');
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        arrow.classList.add('opacity-0');
      } else {
        arrow.classList.remove('opacity-0');
      }
    });
  });

  return (
    <div
      id="arrow"
      className="fixed bottom-5 right-5 cursor-pointer z-50 bg-slate-200 hover:bg-slate-300 rounded-xl p-2 shadow-xl transition-all duration-200 ease-in-out opacity-0"
    >
      <a onClick={scroll}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />{' '}
        </svg>
      </a>
    </div>
  );
}

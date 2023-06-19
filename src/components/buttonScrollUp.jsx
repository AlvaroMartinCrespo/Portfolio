import { useEffect } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
export default function ButtonScrollUp() {
  useEffect(() => {
    const scrollToTopButton = document.getElementById('scrollToTopButton');

    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return () => {
      scrollToTopButton.removeEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    };
  }, []);
  return (
    <>
      <div id="scrollToTopButton" className="fixed bottom-0 right-0 m-10 z-50 cursor-pointer">
        <BsFillArrowUpSquareFill className="w-10 h-10 text-white" />
      </div>
    </>
  );
}

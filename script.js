const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

function isMobile() {
  return window.innerWidth <= 767;
}

function handleScrollNext() {
  const cards = document.querySelector('.card-content');
  const card = cards.querySelector('.card');
  const cardWidth = card.offsetWidth; 
  const gap = 20;
  const containerWidth = cards.clientWidth;
  
  if (isMobile()) {
    const centeredScrollLeft = cards.scrollLeft + cardWidth + gap;
    const nextScrollLeft = centeredScrollLeft - (containerWidth / 2) + (cardWidth / 2);

    if (centeredScrollLeft >= cards.scrollWidth - containerWidth) {
      cards.scrollTo({
        top: 0,
        left: cards.scrollWidth - containerWidth,
        behavior: 'smooth'
      });
    } else {
      cards.scrollTo({
        top: 0,
        left: nextScrollLeft,
        behavior: 'smooth'
      });
    }
  } else {
    cards.scrollBy({
      top: 0,
      left: (cardWidth + gap) * 3,
      behavior: 'smooth'
    });
  }
}

function handleScrollPrev() {
  const cards = document.querySelector('.card-content');
  const card = cards.querySelector('.card');
  const cardWidth = card.offsetWidth;
  const gap = 20;
  const containerWidth = cards.clientWidth;

  if (isMobile()) {
    const centeredScrollLeft = cards.scrollLeft - cardWidth - gap;
    const prevScrollLeft = centeredScrollLeft - (containerWidth / 2) + (cardWidth / 2);

    if (centeredScrollLeft <= 0) {
      cards.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      cards.scrollTo({
        top: 0,
        left: prevScrollLeft,
        behavior: 'smooth'
      });
    }
  } else {
    cards.scrollBy({
      top: 0,
      left: -(cardWidth + gap) * 3,
      behavior: 'smooth'
    });
  }
}

next.addEventListener('click', handleScrollNext);
prev.addEventListener('click', handleScrollPrev);

window.addEventListener('resize', () => {});

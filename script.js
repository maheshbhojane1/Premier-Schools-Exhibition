const slider = document.getElementById('slider');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    function getCardWidth() {
      const card = slider.querySelector('article');
      const style = window.getComputedStyle(card);
      const width = card.offsetWidth;
      const marginRight = parseInt(style.marginRight) || 16;
      return width + marginRight;
    }

    nextBtn.addEventListener('click', () => {
      const cardWidth = getCardWidth();
      slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      const cardWidth = getCardWidth();
      slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
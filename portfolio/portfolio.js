
//   <!-- Custom JavaScript for Slider -->

    const slider = document.getElementById('skillSlider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    const totalItems = slider.children.length;
    const itemsPerSlide = 4;

    function updateSlider() {
      const percentage = -(currentIndex * (100 / itemsPerSlide));
      slider.style.transform = `translateX(${percentage}%)`;
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < Math.ceil(totalItems / itemsPerSlide) - 1) {
        currentIndex++;
        updateSlider();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

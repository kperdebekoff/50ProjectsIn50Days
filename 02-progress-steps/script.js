const progressLine = document.getElementById('progress-line');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressCircles = document.querySelectorAll(
  '.progress-container__progress-circle'
);

let currentActive = 1;

// 'Next' button event's
nextBtn.addEventListener('click', () => {
  currentActive++;

  if (currentActive > progressCircles.length) {
    currentActive = progressCircles.length;
  }

  update();
});

// 'Prev' button event's
prevBtn.addEventListener('click', () => {
  currentActive -= 1;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// Update 'cicrcles', 'progress-line' and 'Prev/Next' buttons states
function update() {
  progressCircles.forEach((circle, indx) => {
    if (indx < currentActive) {
      circle.classList.add('progress-container__progress-circle--active');
    } else {
      console.log(circle, 'oops');
      circle.classList.remove('progress-container__progress-circle--active');
    }
  });

  const actives = document.querySelectorAll(
    '.progress-container__progress-circle--active'
  );

  // Add progress line width
  progressLine.style.width =
    ((actives.length - 1) / (progressCircles.length - 1)) * 100 + '%';

  // Enabled/Disabled button
  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === progressCircles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}

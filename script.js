

const details = document.querySelectorAll('details');
const imgs = document.querySelectorAll('details img');

details.forEach((detail, index) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      imgs[index].style.transform = 'rotate(180deg)';
    } else {
      imgs[index].style.transform = 'rotate(0deg)';
    }
  });
});
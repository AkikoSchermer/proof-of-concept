  document.querySelectorAll('.like-form').forEach(form => {
  form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Voorkomt herladen van de pagina

  const img = form.querySelector('button.like-btn img');
  const isLiked = img.getAttribute('src').endsWith('HeartFilled.svg');
  console.log('isLiked:', isLiked);

//   const img = this.querySelector('.like-btn');
//   const isLiked = img.getAttribute('src').includes('HeartFilled.svg');

//   const svg = form.querySelector('.heart-icon');
//   const isLiked = svg.getAttribute('fill') === '#e0245e';
//   const likeIcon = form.querySelector('.heart-icon');

    //   likeIcon.classList.add('liked');
    // svg.setAttribute('fill', isLiked ? 'none' : '#e0245e');

    img.setAttribute('src', isLiked ? '/assets/HeartEmpty.svg' : '/assets/HeartFilled.svg');

  try {
    // likeIcon.classList.add('liked');

  const response = await fetch(form.action, {
   method: 'POST', body: new FormData(form)
   });
   
   if (!response.ok) {
        throw new Error('Liken mislukt op server');
      }

    //   window.location.reload();
   
    } catch(err) {
    console.error('Error liken:', err);

    // likeIcon.classList.remove('liked');
    // svg.setAttribute('fill', isLiked ? '#e0245e' : 'none');
    img.setAttribute('src', isLiked ? '/assets/HeartFilled.svg' : '/assets/HeartEmpty.svg');

     
      alert('Kon niet liken, probeer het later opnieuw.');
   }
 });
});


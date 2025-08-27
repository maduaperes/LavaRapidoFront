let attendanceRating=0, serviceRating=0;

const starsAttendance=document.querySelectorAll('#stars-attendance span');
const starsService=document.querySelectorAll('#stars-service span');
const textarea=document.getElementById('description');
const titleInput=document.getElementById('title');
const submitBtn=document.getElementById('submit');
const clearBtn=document.getElementById('clear');
const charCount=document.getElementById('charCount');
const feedbackMessage=document.getElementById('feedbackMessage');
const imageInput=document.getElementById('image');

function highlightStars(stars, count){
  stars.forEach(star=>star.classList.remove('hover','selected'));
  stars.forEach(star=>{ if(star.dataset.value<=count) star.classList.add('selected'); });
}

starsAttendance.forEach(star=>{
  star.addEventListener('mouseover', ()=>highlightStars(starsAttendance, star.dataset.value));
  star.addEventListener('mouseout', ()=>highlightStars(starsAttendance, attendanceRating));
  star.addEventListener('click', ()=>{ attendanceRating=parseInt(star.dataset.value); highlightStars(starsAttendance, attendanceRating); checkEnableSubmit(); });
});

starsService.forEach(star=>{
  star.addEventListener('mouseover', ()=>highlightStars(starsService, star.dataset.value));
  star.addEventListener('mouseout', ()=>highlightStars(starsService, serviceRating));
  star.addEventListener('click', ()=>{ serviceRating=parseInt(star.dataset.value); highlightStars(starsService, serviceRating); checkEnableSubmit(); });
});

textarea.addEventListener('input', ()=>{
  charCount.textContent=`${textarea.value.length}/200`;
  checkEnableSubmit();
});

function checkEnableSubmit(){
  submitBtn.disabled = attendanceRating===0 && serviceRating===0 && textarea.value.trim()==='' && titleInput.value.trim()==='';
}

clearBtn.addEventListener('click', ()=>{
  attendanceRating=0; serviceRating=0;
  highlightStars(starsAttendance,0); highlightStars(starsService,0);
  textarea.value=''; charCount.textContent='0/200';
  titleInput.value='';
  imageInput.value='';
  checkEnableSubmit();
  feedbackMessage.textContent='';
});

submitBtn.addEventListener('click', ()=>{
  const review={ 
    title:titleInput.value.trim(),
    description:textarea.value.trim(),
    attendanceRating,
    serviceRating,
    image:imageInput.files[0]?.name || '',
    date:new Date().toISOString()
  };
  const reviews=JSON.parse(localStorage.getItem('lj_reviews') || '[]');
  reviews.unshift(review);
  localStorage.setItem('lj_reviews', JSON.stringify(reviews));
  feedbackMessage.textContent='Obrigado pela avaliação!';
  clearBtn.click();
});

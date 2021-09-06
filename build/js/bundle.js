"use strict";

$('.toggle').on('click', function () {
  $('.header__menu-items').slideToggle();
});
console.log('yep');

if (parseInt($(window).width()) > 756) {
  $('.modal-img').attr('src', '../img/modal_desktop.png');
}

var swiper = new Swiper('.swiper', {
  speed: 400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 150,
      centeredSlides: true
    }
  }
});
var swiperCards = new Swiper('.swiper-cards', {
  speed: 400,
  slidesPerView: 1.1,
  spaceBetween: -30,
  navigation: {
    nextEl: ".next-card",
    prevEl: ".prev-card"
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      // centeredSlides: true,
      spaceBetween: 0
    }
  }
});
var errorMessage = document.querySelectorAll('.error');
var formName = document.querySelectorAll('input')[0];
var formPhone = document.querySelectorAll('input')[1];
var formButton = document.querySelector('.button-submit');
formButton.addEventListener('click', function () {
  if (formName.value === '') {
    errorMessage[0].style.display = 'block';
  } else {
    errorMessage[0].style.display = 'none';
  }

  if (formPhone.value === '') {
    errorMessage[1].style.display = 'block';
  } else {
    errorMessage[0].style.display = 'none';
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsInNsaWRlVG9nZ2xlIiwiY29uc29sZSIsImxvZyIsInBhcnNlSW50Iiwid2luZG93Iiwid2lkdGgiLCJhdHRyIiwic3dpcGVyIiwiU3dpcGVyIiwic3BlZWQiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiY2VudGVyZWRTbGlkZXMiLCJzd2lwZXJDYXJkcyIsImVycm9yTWVzc2FnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm1OYW1lIiwiZm9ybVBob25lIiwiZm9ybUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7O0FBQ0FBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsRUFBYixDQUFnQixPQUFoQixFQUF5QixZQUFZO0FBQ3BDRCxFQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkUsV0FBekI7QUFDQSxDQUZEO0FBSUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7O0FBQ0EsSUFBSUMsUUFBUSxDQUFDTCxDQUFDLENBQUNNLE1BQUQsQ0FBRCxDQUFVQyxLQUFWLEVBQUQsQ0FBUixHQUE4QixHQUFsQyxFQUF1QztBQUN0Q1AsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlEsSUFBaEIsQ0FBcUIsS0FBckIsRUFBNEIsMEJBQTVCO0FBQ0E7O0FBQ0QsSUFBTUMsTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBVyxTQUFYLEVBQXNCO0FBQ3BDQyxFQUFBQSxLQUFLLEVBQUUsR0FENkI7QUFFcENDLEVBQUFBLFVBQVUsRUFBRTtBQUNYQyxJQUFBQSxNQUFNLEVBQUUscUJBREc7QUFFWEMsSUFBQUEsTUFBTSxFQUFFO0FBRkcsR0FGd0I7QUFNcENDLEVBQUFBLFdBQVcsRUFBRTtBQUNaLFNBQUs7QUFDSkMsTUFBQUEsYUFBYSxFQUFFLEdBRFg7QUFFSkMsTUFBQUEsWUFBWSxFQUFFLEdBRlY7QUFHSkMsTUFBQUEsY0FBYyxFQUFFO0FBSFo7QUFETztBQU51QixDQUF0QixDQUFmO0FBY0EsSUFBTUMsV0FBVyxHQUFHLElBQUlULE1BQUosQ0FBVyxlQUFYLEVBQTRCO0FBQy9DQyxFQUFBQSxLQUFLLEVBQUUsR0FEd0M7QUFFL0NLLEVBQUFBLGFBQWEsRUFBRSxHQUZnQztBQUcvQ0MsRUFBQUEsWUFBWSxFQUFFLENBQUMsRUFIZ0M7QUFJL0NMLEVBQUFBLFVBQVUsRUFBRTtBQUNYQyxJQUFBQSxNQUFNLEVBQUUsWUFERztBQUVYQyxJQUFBQSxNQUFNLEVBQUU7QUFGRyxHQUptQztBQVEvQ0MsRUFBQUEsV0FBVyxFQUFFO0FBQ1osU0FBSztBQUNKQyxNQUFBQSxhQUFhLEVBQUUsQ0FEWDtBQUVKO0FBQ0FDLE1BQUFBLFlBQVksRUFBRTtBQUhWO0FBRE87QUFSa0MsQ0FBNUIsQ0FBcEI7QUFnQkEsSUFBTUcsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLENBQXJCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLENBQW5DLENBQWpCO0FBQ0EsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLENBQW5DLENBQWxCO0FBQ0EsSUFBTUcsVUFBVSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQW5CO0FBRUFELFVBQVUsQ0FBQ0UsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUMxQyxNQUFJSixRQUFRLENBQUNLLEtBQVQsS0FBbUIsRUFBdkIsRUFBMkI7QUFDMUJSLElBQUFBLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JTLEtBQWhCLENBQXNCQyxPQUF0QixHQUFnQyxPQUFoQztBQUNBLEdBRkQsTUFFTztBQUNOVixJQUFBQSxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCUyxLQUFoQixDQUFzQkMsT0FBdEIsR0FBZ0MsTUFBaEM7QUFDQTs7QUFFRCxNQUFJTixTQUFTLENBQUNJLEtBQVYsS0FBb0IsRUFBeEIsRUFBNEI7QUFDM0JSLElBQUFBLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JTLEtBQWhCLENBQXNCQyxPQUF0QixHQUFnQyxPQUFoQztBQUNBLEdBRkQsTUFFTztBQUNOVixJQUFBQSxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCUyxLQUFoQixDQUFzQkMsT0FBdEIsR0FBZ0MsTUFBaEM7QUFDQTtBQUNELENBWkQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoJy50b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0JCgnLmhlYWRlcl9fbWVudS1pdGVtcycpLnNsaWRlVG9nZ2xlKCk7XHJcbn0pXHJcblxyXG5jb25zb2xlLmxvZygneWVwJyk7XHJcbmlmIChwYXJzZUludCgkKHdpbmRvdykud2lkdGgoKSkgPiA3NTYpIHtcclxuXHQkKCcubW9kYWwtaW1nJykuYXR0cignc3JjJywgJy4uL2ltZy9tb2RhbF9kZXNrdG9wLnBuZycpO1xyXG59XHJcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcblx0c3BlZWQ6IDQwMCxcclxuXHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG5cdFx0cHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIlxyXG5cdH0sXHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHRcdDc2ODoge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLjUsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMTUwLFxyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5jb25zdCBzd2lwZXJDYXJkcyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY2FyZHMnLCB7XHJcblx0c3BlZWQ6IDQwMCxcclxuXHRzbGlkZXNQZXJWaWV3OiAxLjEsXHJcblx0c3BhY2VCZXR3ZWVuOiAtMzAsXHJcblx0bmF2aWdhdGlvbjoge1xyXG5cdFx0bmV4dEVsOiBcIi5uZXh0LWNhcmRcIixcclxuXHRcdHByZXZFbDogXCIucHJldi1jYXJkXCJcclxuXHR9LFxyXG5cdGJyZWFrcG9pbnRzOiB7XHJcblx0XHQ3Njg6IHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0Ly8gY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5jb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcclxuY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpWzBdO1xyXG5jb25zdCBmb3JtUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpWzFdO1xyXG5jb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1zdWJtaXQnKTtcclxuXHJcbmZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0aWYgKGZvcm1OYW1lLnZhbHVlID09PSAnJykge1xyXG5cdFx0ZXJyb3JNZXNzYWdlWzBdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRlcnJvck1lc3NhZ2VbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9XHJcblxyXG5cdGlmIChmb3JtUGhvbmUudmFsdWUgPT09ICcnKSB7XHJcblx0XHRlcnJvck1lc3NhZ2VbMV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0fSBlbHNlIHtcclxuXHRcdGVycm9yTWVzc2FnZVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH1cclxufSkiXX0=

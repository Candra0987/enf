 // Menangani klik tombol Daftar
 document.getElementById('daftar-basic').addEventListener('click', function() {
  document.getElementById('class').value = 'Basic';
  var myModal = new bootstrap.Modal(document.getElementById('registrationModal'));
  myModal.show();
});

document.getElementById('daftar-intermediate').addEventListener('click', function() {
  document.getElementById('class').value = 'Intermediate';
  var myModal = new bootstrap.Modal(document.getElementById('registrationModal'));
  myModal.show();
});

document.getElementById('daftar-advanced').addEventListener('click', function() {
  document.getElementById('class').value = 'Advanced';
  var myModal = new bootstrap.Modal(document.getElementById('registrationModal'));
  myModal.show();
});

// Menangani pengiriman formulir pendaftaran
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Pendaftaran Anda untuk kelas ' + document.getElementById('class').value + ' telah berhasil dikirim!');
  var myModal = bootstrap.Modal.getInstance(document.getElementById('registrationModal'));
  myModal.hide();
  this.reset(); // Reset form setelah pengiriman
});

// JavaScript untuk menangani interaksi halaman
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling untuk navigasi
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Form komentar di forum diskusi
  const commentForm = document.getElementById('commentForm');
  const commentInput = document.getElementById('inputMessage');
  const commentsContainer = document.getElementById('comments');

  commentForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah pengiriman form default

    const newComment = commentInput.value.trim();
    if (newComment) {
      const commentElement = document.createElement('div');
      commentElement.classList.add('border-bottom', 'pb-2', 'mb-2');
      commentElement.innerHTML = `<strong>User:</strong><p>${newComment}</p>`;
      commentsContainer.appendChild(commentElement);

      // Reset form
      commentInput.value = '';
    } else {
      alert('Silakan tulis komentar terlebih dahulu.');
    }
  });

  // Menambahkan animasi hover pada tombol "Daftar"
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.1)';
      this.style.transition = 'transform 0.2s';
    });
    button.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });

  // Countdown diskon (contoh, jika diperlukan)
  const discountElement = document.querySelector('.text-success');
  const discountEndDate = new Date('2024-12-31T23:59:59');
  const interval = setInterval(() => {
    const now = new Date();
    const timeLeft = discountEndDate - now;

    if (timeLeft <= 0) {
      clearInterval(interval);
      discountElement.textContent = 'Diskon telah berakhir.';
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      discountElement.textContent = `Diskon berlaku hingga 31 Desember 2024! Waktu tersisa: ${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik.`;
    }
  }, 1000);
});

// Mendapatkan elemen audio dan memulai pemutaran
window.onload = function() {
  var audio = document.getElementById('myAudio');
  audio.play(); // Memulai pemutaran audio secara otomatis
  // Jika ingin menghilangkan mute setelah audio mulai diputar
  audio.muted = false;
}
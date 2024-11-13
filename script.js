// script.js

document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form terkirim langsung
    
    // Ambil elemen input dan textarea
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Cek apakah ada input yang kosong
    if (!name || !email || !message) {
        alert('Semua data harus diisi sebelum mengirim pesan!');
        return;
    }

    // Buat pesan yang akan dikirim melalui WhatsApp
    const waMessage = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;

    // Encode URL untuk memastikan karakter khusus ter-handle
    const encodedMessage = encodeURIComponent(waMessage);

    // URL WhatsApp untuk mengirim pesan
    const whatsappURL = `https://wa.me/085711340740?text=${encodedMessage}`;

    // Arahkan pengguna ke WhatsApp
    window.location.href = whatsappURL;
});

// Menambahkan event listener untuk scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Jika halaman digulir lebih dari 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('load', function() {
    document.body.style.opacity = 1;  // Membuat body terlihat setelah selesai loading
    document.body.style.transition = 'opacity 1s ease-out';  // Efek transisi fade-in
    document.body.style.opacity = 1;
});


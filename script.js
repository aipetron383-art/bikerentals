// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// WhatsApp Booking Form
const bookingForm = document.querySelector('.booking-form');

bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = bookingForm.querySelector('input[type="text"]').value;
    const vehicle = document.getElementById('vehicle').value;
    const date = bookingForm.querySelector('input[type="date"]').value;
    const time = bookingForm.querySelector('input[type="time"]').value;
    const days = bookingForm.querySelector('input[type="number"]').value;

    const phoneNumber = "919391217732";

    const message =
`🚗 *New Vehicle Rental Booking*

👤 Name: ${name}

🚘 Vehicle : ${vehicle}

📅 Pickup Date: ${date}

⏰ Pickup Time: ${time}

🗓 Rental Days: ${days}

Please confirm availability and pricing.`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');

    bookingForm.reset();
});

// Header Scroll Effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#000";
    } else {
        header.style.background = "rgba(0,0,0,0.85)";
    }
});

// Card Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);
});

// Footer Year
document.querySelector("footer p").innerHTML =
`© ${new Date().getFullYear()} Ujwal Bike & Car Rentals. All Rights Reserved.`;
let slideIndex = 0;
let autoSlideTimeout;

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    console.log("slideIndex:", slideIndex, "total slides:", slides.length); // ตรวจสอบค่า

    // ถ้าสไลด์เกินจำนวนทั้งหมด ให้กลับไปที่สไลด์แรก
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // ซ่อนสไลด์ทั้งหมด
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // ลบ class "active" จากจุดทุกจุด
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // แสดงสไลด์ปัจจุบัน
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // ตั้งค่าเลื่อนอัตโนมัติทุก 5 วินาที
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(() => plusSlides(1), 5000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function initializeSlides() {
    slideIndex = 1;
    showSlides(slideIndex);
}

window.onload = initializeSlides;

document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', () => {
        alert('แสดงรายละเอียดข่าวสาร');
        // หรือแสดงโมดัล/เปิดลิงก์ไปยังหน้าอื่น
    });
});

socket.on('user status', function(data) {
    const statusBox = document.getElementById('user-status');
    statusBox.textContent = `${data.user} is ${data.status}`;
});
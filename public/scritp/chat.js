// สร้างการเชื่อมต่อ WebSocket
const socket = new WebSocket('ws://localhost:8080'); // เปลี่ยน URL เป็นของเซิร์ฟเวอร์จริง

// เมื่อได้รับข้อความจากเซิร์ฟเวอร์
socket.onmessage = function(event) {
    const messages = document.getElementById('chat-messages');
    const message = document.createElement('div');
    message.textContent = event.data;
    messages.appendChild(message);
};

// ส่งข้อความ
document.getElementById('send-btn').addEventListener('click', function() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    socket.send(message); // ส่งข้อความไปที่เซิร์ฟเวอร์
    input.value = ''; // ล้างกล่องข้อความหลังจากส่ง
});

// กด Enter เพื่อส่งข้อความ
document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});
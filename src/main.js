import './style.css'

// --- AI CONFIGURATION ---
// ใส่ AI Token ของคุณที่นี่ (เช่น OpenAI API Key หรืออื่นๆ)
// ถ้าไม่มี Token ระบบจะตอบกลับด้วยข้อความอัตโนมัติ (Mock Response)
const AI_API_TOKEN = "";
const AI_API_ENDPOINT = "https://api.openai.com/v1/chat/completions"; // ตัวอย่าง Endpoint

// --- CHATBOT LOGIC ---
const chatToggleBtn = document.querySelector('.chat-toggle-btn');
const chatCloseBtn = document.querySelector('.chat-close-btn');
const chatWindow = document.querySelector('.chat-window');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');
const chatMessages = document.getElementById('chat-messages');

function toggleChat() {
  chatWindow.classList.toggle('active');
}

chatToggleBtn.addEventListener('click', toggleChat);
chatCloseBtn.addEventListener('click', toggleChat);

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleSendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  // Add user message
  addMessage(text, 'user');
  chatInput.value = '';

  // Simulate typing delay
  const loadingDiv = document.createElement('div');
  loadingDiv.classList.add('message', 'bot-message');
  loadingDiv.textContent = '...';
  chatMessages.appendChild(loadingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {
    let responseText = "";

    if (AI_API_TOKEN) {
      // --- REAL AI CALL (Example for OpenAI) ---
      // const response = await fetch(AI_API_ENDPOINT, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${AI_API_TOKEN}`
      //   },
      //   body: JSON.stringify({
      //     model: "gpt-3.5-turbo",
      //     messages: [{ role: "user", content: text }]
      //   })
      // });
      // const data = await response.json();
      // responseText = data.choices[0].message.content;

      // For now, even if token is present, we might need specific implementation.
      // This is just a placeholder structure.
      responseText = "ระบบ AI กำลังเชื่อมต่อ... (โปรดตรวจสอบการตั้งค่า API)";
    } else {
      // --- MOCK RESPONSE ---
      await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay
      const mockResponses = [
        "ขอบคุณที่สนใจสินค้า Bimon ครับ มีชาใบหม่อนหลายสูตรให้เลือกนะครับ",
        "สามารถสั่งซื้อผ่าน Shopee ได้เลยครับ ส่งฟรีทั่วไทย!",
        "ชาใบหม่อนของเราปลูกแบบออร์แกนิค 100% ครับ ดีต่อสุขภาพแน่นอน",
        "หากต้องการข้อมูลเพิ่มเติม ติดต่อผ่าน Line หรือ Facebook ได้เลยครับ"
      ];
      responseText = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    }

    // Remove loading and add response
    chatMessages.removeChild(loadingDiv);
    addMessage(responseText, 'bot');

  } catch (error) {
    chatMessages.removeChild(loadingDiv);
    addMessage("ขออภัย ระบบขัดข้องชั่วคราว", 'bot');
    console.error("Chat Error:", error);
  }
}

chatSendBtn.addEventListener('click', handleSendMessage);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSendMessage();
});

// --- EXISTING CODE ---

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');

mobileMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  const icon = mobileMenuBtn.querySelector('i');
  if (nav.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth Scroll with Offset (optional, if header covers content)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

import './style.css';

// --- TRANSLATIONS ---
const translations = {
  th: {
    nav_home: "หน้าแรก",
    nav_about: "เกี่ยวกับเรา",
    nav_product: "สินค้า",
    nav_shop: "สั่งซื้อ",
    nav_social: "โซเชียล",
    nav_contact: "ติดต่อเรา",
    hero_title: "<span class=\"text-gold-premium\">ชาตราใบหม่อน</span><br>ออร์แกนิค 100%",
    hero_subtitle: "สัมผัสรสชาติที่แท้จริงจากธรรมชาติ<br>เพื่อสุขภาพที่ดีของคุณและคนที่คุณรัก",
    hero_cta: "สั่งซื้อเลย",
    about_title: "ทำไมต้องชาตราใบหม่อน?",
    about_desc: "เราคัดสรรใบหม่อนคุณภาพดีที่สุดจากไร่ออร์แกนิค ผ่านกรรมวิธีการผลิตที่ได้มาตรฐาน เพื่อให้ได้ชาที่มีกลิ่นหอม รสชาตินุ่มนวล และคงคุณค่าทางโภชนาการไว้อย่างครบถ้วน",
    feat_organic: "ออร์แกนิค 100%",
    feat_organic_desc: "ปลูกด้วยวิถีธรรมชาติ ปลอดสารเคมี",
    feat_caffeine: "ไม่มีคาเฟอีน",
    feat_caffeine_desc: "ดื่มได้ทุกเวลา ไม่ทำให้ใจสั่น",
    feat_health: "เพื่อสุขภาพ",
    feat_health_desc: "ช่วยลดน้ำตาลในเลือดและความดัน",
    feat_taste: "รสชาติดี",
    feat_taste_desc: "หอม นุ่ม ดื่มง่าย ไม่ฝาด",
    product_title: "สินค้าแนะนำ",
    product_desc: "เลือกสิ่งที่ดีที่สุดให้กับตัวคุณ",
    shop_title: "สั่งซื้อสินค้า",
    shop_desc: "ช่องทางสั่งซื้อออนไลน์ สะดวก รวดเร็ว",
    shop_btn: "ช้อปเลย",
    social_title: "ติดตามเรา",
    social_desc: "รับข่าวสารและโปรโมชั่นล่าสุด",
    social_chat: "ทักแชทเลย",
    social_follow: "ติดตาม",
    social_view: "ดูโปรไฟล์",
    contact_title: "ติดต่อเรา",
    contact_desc: "สอบถามข้อมูลเพิ่มเติมได้ที่",
    contact_call: "โทรเลย",
    contact_email: "ส่งอีเมล",
    contact_map: "ดูแผนที่",
    footer_copy: "&copy; 2025 Bimon Thailand. All rights reserved.",
    view_details: "ดูรายละเอียด",
    sold: "ขายแล้ว",
    pieces: "ชิ้น",
    no_rating: "ยังไม่มีคะแนน",
    modal_buy: "สั่งซื้อเลย (Shopee)",
    modal_close: "ปิดหน้าต่าง"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_product: "Product",
    nav_shop: "Shop",
    nav_social: "Social",
    nav_contact: "Contact",
    hero_title: "<span class=\"text-gold-premium\">Bimon Thailand</span><br>Mulberry Tea<br>100% Organic",
    hero_subtitle: "Experience the true taste of nature<br>for your good health and your loved ones.",
    hero_cta: "Order Now",
    about_title: "Why Bimon Mulberry Tea?",
    about_desc: "We select the best quality mulberry leaves from organic farms, processed through standard methods to ensure tea with a fragrant aroma, smooth taste, and full nutritional value.",
    feat_organic: "100% Organic",
    feat_organic_desc: "Naturally grown, chemical-free.",
    feat_caffeine: "Caffeine Free",
    feat_caffeine_desc: "Drink anytime, no jitters.",
    feat_health: "For Health",
    feat_health_desc: "Helps reduce blood sugar and pressure.",
    feat_taste: "Great Taste",
    feat_taste_desc: "Fragrant, smooth, easy to drink.",
    product_title: "Featured Products",
    product_desc: "Choose the best for yourself.",
    shop_title: "Order Now",
    shop_desc: "Available on your favorite platforms.",
    shop_btn: "Shop Now",
    social_title: "Follow Us",
    social_desc: "Stay updated with our latest news and promotions.",
    social_chat: "Chat Now",
    social_follow: "Follow Us",
    social_view: "View Profile",
    contact_title: "Contact Us",
    contact_desc: "We'd love to hear from you. Get in touch with us!",
    contact_call: "Call Now",
    contact_email: "Send Email",
    contact_map: "View Map",
    footer_copy: "&copy; 2025 Bimon Thailand. All rights reserved.",
    view_details: "View Details",
    sold: "Sold",
    pieces: "items",
    no_rating: "No rating yet",
    modal_buy: "Order Now (Shopee)",
    modal_close: "Close"
  }
};

// --- PRODUCT DATA ---
const products = [
  {
    id: 1,
    name: "ชาตราใบหม่อน (ชนิดแช่ดื่ม)",
    name_en: "Bimon Mulberry (Tea Bags)",
    price: "฿199",
    price_usd: "$6.00",
    size: "40g (2g x 20 ซอง)",
    size_en: "40g (2g x 20 Bags)",
    rating: 5,
    sold: 8,
    desc: `ชาสมุนไพรไทยอบแห้งที่ได้มาตรฐาน อุดมด้วยคุณค่าของธาตุอาหารที่ร่างกายต้องการ
           สีชาเป็นสีทองอำพัน กลิ่นหอมกรุ่นละมุน รสชาตินุ่มไม่ฝาดลิ้น ดื่มง่ายได้ทุกโอกาส`,
    desc_en: `Standardized dried Thai herbal tea, rich in essential nutrients.
              Amber gold color, fragrant aroma, smooth taste, not astringent. Easy to drink on any occasion.`,
    highlights: [
      "ชาใบหม่อน 100% (Organic)",
      "ปราศจากคาเฟอีน (Caffeine Free)",
      "ไม่มีน้ำตาล (Sugar Free)",
      "มีสาร GABA ช่วยผ่อนคลายสมอง"
    ],
    highlights_en: [
      "100% Mulberry Tea (Organic)",
      "Caffeine Free",
      "Sugar Free",
      "Contains GABA for relaxation"
    ],
    images: [
      "images/product_pack.png",
      "images/product_promo.png"
    ],
    link: "https://shopee.co.th/product/474101967/10522035049"
  },
  {
    id: 2,
    name: "ชาตราใบหม่อนคัดพิเศษ (ไร้ก้าน)",
    name_en: "Premium Bimon Mulberry (Loose Leaf)",
    price: "฿299",
    price_usd: "$9.00",
    size: "200g",
    size_en: "200g",
    rating: 0,
    sold: 0,
    desc: `ชาใบตราหม่อนคัดพิเศษ ไร้ก้าน บดละเอียด ชนิดห่อดำ ขนาดสุดคุ้ม
           รสชาตินุ่มนวล กลิ่นหอมเป็นเอกลักษณ์ ดื่มได้ทุกเพศทุกวัย
           อุดมไปด้วยสารต้านอนุมูลอิสระ และแร่ธาตุที่มีประโยชน์`,
    desc_en: `Premium selected mulberry tea, stemless, finely ground. Black pack, great value.
              Smooth taste, unique aroma, suitable for all ages.
              Rich in antioxidants and beneficial minerals.`,
    highlights: [
      "ชาใบหม่อนคัดพิเศษ ไร้ก้าน",
      "ปราศจากคาเฟอีน & คอเลสเตอรอล",
      "ไม่มีน้ำตาล & ไขมันทรานส์",
      "ช่วยลดน้ำตาลในเลือด & ความดัน"
    ],
    highlights_en: [
      "Premium Stemless Mulberry Tea",
      "Caffeine & Cholesterol Free",
      "Sugar & Trans Fat Free",
      "Reduces Blood Sugar & Pressure"
    ],
    images: [
      "images/product_black_pack.png",
      "images/product_black_promo.png"
    ],
    link: "https://shopee.co.th/product/474101967/11922030593"
  }
];

let currentLang = localStorage.getItem('lang') || 'th';

// --- LANGUAGE LOGIC ---
function updateContent() {
  // Update Text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });

  // Update Button Text
  const langBtn = document.getElementById('lang-switch-btn');
  if (langBtn) {
    langBtn.innerText = currentLang === 'th' ? 'EN' : 'TH'; // Show option to switch TO
  }

  // Re-render Products
  renderProducts();
}

window.toggleLanguage = () => {
  currentLang = currentLang === 'th' ? 'en' : 'th';
  localStorage.setItem('lang', currentLang);
  updateContent();
};

// --- RENDER PRODUCTS ---
function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = products.map(product => {
    const name = currentLang === 'th' ? product.name : product.name_en;
    const price = currentLang === 'th' ? product.price : product.price_usd;
    const btnText = translations[currentLang].view_details;

    return `
    <div class="product-preview-card" onclick="openProductModal(${product.id})">
      <div class="preview-image">
        <img src="${product.images[0]}" alt="${name}">
      </div>
      <div class="preview-info">
        <h3>${name}</h3>
        <div class="preview-price">${price}</div>
        <div class="btn-text">
          <i class="fas fa-eye"></i> ${btnText}
        </div>
      </div>
    </div>
  `}).join("");
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
  updateContent();
});

// --- MODAL LOGIC ---
const modal = document.getElementById("product-modal");
const closeModalBtn = document.querySelector(".close-modal");

// Expose function to global scope for HTML onclick
window.openProductModal = (id) => {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const name = currentLang === 'th' ? product.name : product.name_en;
  const price = currentLang === 'th' ? product.price : product.price_usd;
  const size = currentLang === 'th' ? product.size : product.size_en;
  const desc = currentLang === 'th' ? product.desc : product.desc_en;
  const highlights = currentLang === 'th' ? product.highlights : product.highlights_en;
  const soldText = `${translations[currentLang].sold} ${product.sold} ${translations[currentLang].pieces}`;
  const noRatingText = translations[currentLang].no_rating;

  // Populate Data
  document.getElementById("modal-main-img").src = product.images[0];
  document.getElementById("modal-title").innerText = name;
  document.getElementById("modal-price").innerText = price;
  document.getElementById("modal-size").innerText = size;
  document.getElementById("modal-desc").innerText = desc;
  document.getElementById("modal-sold").innerText = soldText;
  document.getElementById("modal-buy-btn").href = product.link;

  // Stars
  const starsContainer = document.getElementById("modal-stars");
  starsContainer.innerHTML = "";
  if (product.rating > 0) {
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");
      star.className = "fas fa-star";
      if (i >= Math.floor(product.rating)) star.style.color = "#ccc"; // Inactive star
      starsContainer.appendChild(star);
    }
  } else {
    starsContainer.innerText = noRatingText;
    starsContainer.style.color = "#a0a0a0";
  }

  // Highlights
  const highlightsContainer = document.getElementById("modal-highlights");
  highlightsContainer.innerHTML = "";
  highlights.forEach(h => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="fas fa-check-circle"></i> ${h}`;
    highlightsContainer.appendChild(li);
  });

  // Thumbnails
  const thumbContainer = document.getElementById("modal-thumbnails");
  thumbContainer.innerHTML = "";
  product.images.forEach(imgSrc => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.onclick = () => changeProductImage(imgSrc);
    thumbContainer.appendChild(img);
  });

  // Show Modal
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling
};

window.changeProductImage = (src) => {
  const mainImg = document.getElementById("modal-main-img");
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = src;
    mainImg.style.opacity = 1;
  }, 200);
};

// Close Modal
if (closeModalBtn) {
  closeModalBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };
}

// Close Modal (Inner Button)
const closeInnerBtn = document.querySelector(".close-modal-inner");
if (closeInnerBtn) {
  closeInnerBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };
}

// Carousel Logic
const track = document.querySelector('.carousel-track');
const slides = Array.from(track ? track.children : []);
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
const carouselContainer = document.querySelector('.carousel-container');

if (track && slides.length > 0) {
  let currentIndex = 0;
  let autoSlideInterval;

  const updateCarousel = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  };

  // Event Listeners
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  // Auto Slide
  const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 7000); // Change every 7 seconds (User requested)
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  // Pause on hover
  carouselContainer.addEventListener('mouseenter', stopAutoSlide);
  carouselContainer.addEventListener('mouseleave', startAutoSlide);

  // Handle Resize
  window.addEventListener('resize', updateCarousel);

  // Start
  startAutoSlide();
}

window.onclick = (event) => {
  if (modal && event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// --- EXISTING CODE ---
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

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

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

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

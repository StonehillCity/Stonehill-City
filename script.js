// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const backToTopBtn = document.getElementById('back-to-top');
const navLinks = document.querySelectorAll('.nav-link');

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTopBtn.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        backToTopBtn.classList.remove('visible');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
            
            // Smooth scroll to section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active nav link
            updateActiveNavLink(link);
        }
    });
});

// Update Active Navigation Link
function updateActiveNavLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Intersection Observer for Section Visibility
const observerOptions = {
    threshold: 0.3,
    rootMargin: '-20px 0px -20px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add visible class for animations
            entry.target.classList.add('section-visible');
            
            // Update active nav link based on visible section
            const sectionId = entry.target.getAttribute('id');
            const correspondingNavLink = document.querySelector(`[data-section="${sectionId}"]`);
            if (correspondingNavLink) {
                updateActiveNavLink(correspondingNavLink);
            }
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    sectionObserver.observe(section);
});

// Back to Top Button
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Initialize counters when hero section is visible
const heroSection = document.getElementById('home');
const statNumbers = document.querySelectorAll('.stat-number[data-target]');

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                if (target > 0) {
                    animateCounter(stat, target);
                }
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

heroObserver.observe(heroSection);

// Copy to Clipboard Function
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Server IP copied to clipboard!', 'success');
        }).catch(err => {
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showNotification('Server IP copied to clipboard!', 'success');
        } else {
            showNotification('Failed to copy IP address', 'error');
        }
    } catch (err) {
        showNotification('Failed to copy IP address', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Show Notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove notification
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Add notification CSS animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(notificationStyles);

// Gallery Data
const galleryData = {
    city: {
        title: 'منطقة وسط المدينة',
        description: 'قلب التجارة والأعمال في ستونهيل سيتي، حيث ترتفع ناطحات السحاب الشاهقة وتنتشر المراكز التجارية الفاخرة. هذه المنطقة تعج بالحياة على مدار الساعة مع مكاتب الشركات الكبرى والبنوك والمطاعم الراقية.',
        images: [
            { src: 'assets/gallery/city/city1.jpg', alt: 'ناطحات السحاب' },
            { src: 'assets/gallery/city/city2.jpg', alt: 'المراكز التجارية' },
            { src: 'assets/gallery/city/city3.jpg', alt: 'الشوارع الرئيسية' }
        ]
    },
    residential: {
        title: 'المناطق السكنية',
        description: 'أحياء سكنية راقية تضم منازل فاخرة وشقق عصرية مع إطلالات خلابة على المدينة. تتميز هذه المناطق بالهدوء والأمان مع وجود حدائق وملاعب للأطفال ومرافق ترفيهية متنوعة.',
        images: [
            { src: 'assets/gallery/residential/res1.jpg', alt: 'المنازل الفاخرة' },
            { src: 'assets/gallery/residential/res2.jpg', alt: 'الشقق العصرية' },
            { src: 'assets/gallery/residential/res3.jpg', alt: 'الحدائق السكنية' }
        ]
    },
    entertainment: {
        title: 'منطقة الترفيه',
        description: 'مركز الحياة الليلية والترفيه في المدينة، يضم نوادي ليلية ومطاعم عالمية ودور سينما ومراكز تسوق. هذه المنطقة تنبض بالحياة والإثارة خاصة في المساء.',
        images: [
            { src: 'assets/gallery/entertainment/ent1.jpg', alt: 'النوادي الليلية' },
            { src: 'assets/gallery/entertainment/ent2.jpg', alt: 'دور السينما' },
            { src: 'assets/gallery/entertainment/ent3.jpg', alt: 'مراكز التسوق' }
        ]
    },
    industrial: {
        title: 'المنطقة الصناعية',
        description: 'العمود الفقري الاقتصادي للمدينة، تحتوي على مصانع حديثة ومستودعات ضخمة ومناطق لوجستية متطورة. هذه المنطقة توفر فرص عمل متنوعة وتدعم اقتصاد المدينة.',
        images: [
            { src: 'assets/gallery/industrial/ind1.jpg', alt: 'المصانع الحديثة' },
            { src: 'assets/gallery/industrial/ind2.jpg', alt: 'المستودعات' },
            { src: 'assets/gallery/industrial/ind3.jpg', alt: 'المناطق اللوجستية' }
        ]
    },
    nature: {
        title: 'الطبيعة والحدائق',
        description: 'ملاذات طبيعية هادئة داخل المدينة تضم حدائق واسعة وبحيرات صافية ومسارات للمشي والجري. هذه المناطق توفر مساحات للاسترخاء والاستجمام بعيداً عن صخب المدينة.',
        images: [
            { src: 'assets/gallery/nature/nat1.jpg', alt: 'الحدائق الواسعة' },
            { src: 'assets/gallery/nature/nat2.jpg', alt: 'البحيرات الصافية' },
            { src: 'assets/gallery/nature/nat3.jpg', alt: 'مسارات المشي' }
        ]
    },
    transport: {
        title: 'مركز المواصلات',
        description: 'شبكة مواصلات متطورة تضم طرق سريعة ومطارات حديثة ومحطات قطار ومترو. هذه البنية التحتية المتقدمة تربط جميع أنحاء المدينة وتسهل التنقل للمواطنين.',
        images: [
            { src: 'assets/gallery/transport/trans1.jpg', alt: 'الطرق السريعة' },
            { src: 'assets/gallery/transport/trans2.jpg', alt: 'المطارات' },
            { src: 'assets/gallery/transport/trans3.jpg', alt: 'محطات القطار' }
        ]
    }
};

// Gallery Item Interactions
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click event to open modal
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const category = item.getAttribute('data-category');
        console.log('Gallery item clicked:', category); // للتشخيص
        if (category && galleryData[category]) {
            openGalleryModal(category);
        } else {
            console.log('Category not found:', category);
        }
    });
});

// Gallery Modal Functions
function openGalleryModal(category) {
    console.log('Opening modal for category:', category); // للتشخيص
    
    // Wait for DOM to be fully loaded
    if (document.readyState !== 'complete') {
        window.addEventListener('load', () => openGalleryModal(category));
        return;
    }
    
    const modal = document.getElementById('gallery-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImages = document.getElementById('modal-images');
    const modalDescription = document.getElementById('modal-description');
    
    if (!modal || !modalTitle || !modalImages || !modalDescription) {
        console.error('Modal elements not found', {
            modal: !!modal,
            modalTitle: !!modalTitle,
            modalImages: !!modalImages,
            modalDescription: !!modalDescription
        });
        return;
    }
    
    const data = galleryData[category];
    
    // Set title and description
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    
    // Clear previous images
    modalImages.innerHTML = '';
    
    // Add images
    data.images.forEach((image, index) => {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'modal-image';
        
        // Try to load the actual image first
        const img = new Image();
        img.onload = function() {
            imageDiv.innerHTML = `<img src="${image.src}" alt="${image.alt}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 10px;">`;
        };
        img.onerror = function() {
            imageDiv.innerHTML = `
                <div class="image-placeholder">
                    <i class="fas fa-image"></i>
                    <p>${image.alt}</p>
                    <span>الصورة غير متوفرة حالياً - يرجى إضافة الصورة ${image.src.split('/').pop()}</span>
                </div>
            `;
        };
        
        // Show loading placeholder initially
        imageDiv.innerHTML = `
            <div class="image-placeholder">
                <i class="fas fa-spinner fa-spin"></i>
                <p>${image.alt}</p>
                <span>جاري تحميل الصورة...</span>
            </div>
        `;
        
        modalImages.appendChild(imageDiv);
        
        // Start loading the image
        img.src = image.src;
    });
    
    // Show modal with animation
    modal.style.display = 'block';
    modal.style.opacity = '0';
    document.body.style.overflow = 'hidden';
    
    // Trigger animation
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.animation = 'modalSlideIn 0.3s ease forwards';
    }, 10);
    
    console.log('Modal should be visible now'); // للتشخيص
}

function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.style.display = 'none';
        modal.style.opacity = '0';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside - with proper check
function setupModalEvents() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'gallery-modal') {
                closeGalleryModal();
            }
        });
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeGalleryModal();
    }
});

// Setup modal events when DOM is ready
document.addEventListener('DOMContentLoaded', setupModalEvents);

// Parallax Effect for Hero Background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.animated-bg');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Enhanced Button Interactions
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            background-color: rgba(255, 255, 255, 0.2);
            left: ${x}px;
            top: ${y}px;
            width: 40px;
            height: 40px;
            margin-left: -20px;
            margin-top: -20px;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Server status checker removed as requested

// Smooth Reveal Animation for Elements
const observeOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            revealObserver.unobserve(entry.target);
        }
    });
}, observeOptions);

// Observe elements for reveal animation
const elementsToReveal = document.querySelectorAll('.gallery-item, .rule-item, .step-item, .info-card, .stat-item');
elementsToReveal.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    revealObserver.observe(element);
});

// Enhanced Scroll Indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        const scrollProgress = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
        
        if (scrollProgress > 0.1) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
    
    scrollIndicator.addEventListener('click', () => {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Dynamic Gradient Animation
function animateGradients() {
    const gradientElements = document.querySelectorAll('.animated-bg::before');
    let hue = 0;
    
    setInterval(() => {
        hue = (hue + 1) % 360;
        document.documentElement.style.setProperty('--dynamic-hue', hue);
    }, 100);
}

// Initialize dynamic effects
document.addEventListener('DOMContentLoaded', () => {
    // Add dynamic gradient CSS
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `
        .animated-bg::before {
            background: 
                radial-gradient(circle at 20% 50%, hsla(var(--dynamic-hue, 215), 70%, 50%, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, hsla(calc(var(--dynamic-hue, 215) + 60), 70%, 60%, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, hsla(calc(var(--dynamic-hue, 215) - 30), 70%, 40%, 0.3) 0%, transparent 50%);
            transition: background 0.5s ease;
        }
    `;
    document.head.appendChild(dynamicStyles);
    
    // Start gradient animation
    animateGradients();
});

// Particles.js Configuration
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#3b82f6", "#60a5fa", "#93c5fd"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#3b82f6",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Mouse following particles
const canvas = document.createElement('canvas');
canvas.id = 'mouse-particles';
canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.6;
`;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: 0, y: 0 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    // Create new particle
    if (particles.length < 20) {
        particles.push({
            x: mouse.x,
            y: mouse.y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 60,
            maxLife: 60,
            size: Math.random() * 3 + 1,
            color: `hsl(${215 + Math.random() * 30}, 70%, ${60 + Math.random() * 20}%)`
        });
    }
});

function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        
        const alpha = p.life / p.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        
        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    }
    
    requestAnimationFrame(updateParticles);
}

updateParticles();

// Performance optimization: throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-dependent functionality here
}, 10));

console.log('Stonehill City website loaded successfully!');

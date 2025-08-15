// Ganesh Chaturthi Interactive Website JavaScript

class GaneshCelebration {
    constructor() {
        this.canvas = document.getElementById('fireworksCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationFrameId = null;
        
        // Real Ganesh images from the provided data
        this.ganeshImages = [
            'https://pplx-res.cloudinary.com/image/upload/v1755002719/pplx_project_search_images/13e5649cf0a2589a0a5d2c6aa63af6e2cdde40fc.png',
            'https://pplx-res.cloudinary.com/image/upload/v1755273144/pplx_project_search_images/66057a0ef3eb6fd56e134860c769459b16989e83.png',
            'https://pplx-res.cloudinary.com/image/upload/v1754824009/pplx_project_search_images/8807e93785d0e4411dc726ef5e649add052cd808.png',
            'https://pplx-res.cloudinary.com/image/upload/v1755109427/pplx_project_search_images/8a3bf3115f1138e38212f0f223edd5cf3f7f3215.png',
            'https://pplx-res.cloudinary.com/image/upload/v1755273144/pplx_project_search_images/6812dd40051daa27ce619c089a181d37434e47e7.png',
            'https://pplx-res.cloudinary.com/image/upload/v1755273144/pplx_project_search_images/fca28e5c5fe9994c1d495f5efa5f194965e97990.png',
            'https://pplx-res.cloudinary.com/image/upload/v1755182701/pplx_project_search_images/65ad24154302e302959194c1f38da1aa54c1df86.png',
            'https://pplx-res.cloudinary.com/image/upload/v1755273144/pplx_project_search_images/b661c737523dacc95387d27a989355fcf461aad5.png',
            'https://pplx-res.cloudinary.com/image/upload/v1755273144/pplx_project_search_images/374f7b9559ab39b737de843f0a662601736901c1.png'
        ];
        
        // Festive colors for fireworks
        this.fireworkColors = [
            '#FF9933', // Saffron
            '#FFD700', // Gold
            '#CC0000', // Red
            '#FF6600', // Deep Orange
            '#FFFF00', // Yellow
            '#FFA500', // Orange
            '#FF1493', // Deep Pink
            '#00FF00', // Green
            '#FF4500', // Orange Red
            '#DAA520'  // Goldenrod
        ];
        
        this.init();
    }
    
    init() {
        this.setupCanvas();
        this.bindEvents();
        this.startAnimation();
        console.log('🎉 Ganesh Chaturthi celebration initialized! 🎉');
    }
    
    setupCanvas() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    bindEvents() {
        // Handle both click and touch events
        document.addEventListener('click', (e) => this.handleInteraction(e));
        document.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.handleInteraction(e.touches[0]);
        });
    }
    
    handleInteraction(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        console.log(`🎆 Click detected at (${x}, ${y})! Creating celebration...`);
        
        // Create fireworks explosion
        this.createFireworksExplosion(x, y);
        
        // Display random Ganesh image
        this.displayGaneshImage(x, y);
    }
    
    createFireworksExplosion(x, y) {
        const particleCount = 30 + Math.random() * 20; // 30-50 particles
        const baseColor = this.fireworkColors[Math.floor(Math.random() * this.fireworkColors.length)];
        
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
            const velocity = 2 + Math.random() * 8;
            const size = 2 + Math.random() * 4;
            
            // Create color variations
            const colorVariations = [
                baseColor,
                this.fireworkColors[Math.floor(Math.random() * this.fireworkColors.length)],
                this.fireworkColors[Math.floor(Math.random() * this.fireworkColors.length)]
            ];
            
            const particle = {
                x: x,
                y: y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                size: size,
                color: colorVariations[Math.floor(Math.random() * colorVariations.length)],
                life: 1.0,
                decay: 0.015 + Math.random() * 0.01,
                gravity: 0.1 + Math.random() * 0.05,
                friction: 0.98,
                glow: 10 + Math.random() * 10
            };
            
            this.particles.push(particle);
        }
        
        // Add some trailing sparkles
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const sparkleX = x + (Math.random() - 0.5) * 50;
                const sparkleY = y + (Math.random() - 0.5) * 50;
                this.createSparkle(sparkleX, sparkleY);
            }, i * 50);
        }
    }
    
    createSparkle(x, y) {
        const sparkleCount = 5 + Math.random() * 5;
        
        for (let i = 0; i < sparkleCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = 0.5 + Math.random() * 2;
            
            const sparkle = {
                x: x,
                y: y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                size: 1 + Math.random() * 2,
                color: this.fireworkColors[Math.floor(Math.random() * this.fireworkColors.length)],
                life: 0.8,
                decay: 0.02,
                gravity: 0.02,
                friction: 0.99,
                glow: 5 + Math.random() * 5
            };
            
            this.particles.push(sparkle);
        }
    }
    
    displayGaneshImage(x, y) {
        console.log('🕉️ Creating Ganesh image at position:', x, y);
        
        // Create image element
        const img = document.createElement('img');
        const randomIndex = Math.floor(Math.random() * this.ganeshImages.length);
        const randomImageUrl = this.ganeshImages[randomIndex];
        
        console.log('🖼️ Selected Ganesh image:', randomIndex, randomImageUrl);
        
        // Set image properties first
        img.className = 'ganesh-image';
        img.alt = 'Lord Ganesha - गणपति बप्पा';
        img.crossOrigin = 'anonymous'; // Add this to handle CORS if needed
        
        // Calculate position (center the image around click point)
        const offsetX = 75; // Half of max-width (150px)
        const offsetY = 75; // Approximate half height
        
        const finalX = Math.max(10, Math.min(window.innerWidth - 160, x - offsetX));
        const finalY = Math.max(10, Math.min(window.innerHeight - 160, y - offsetY));
        
        // Position image
        img.style.left = `${finalX}px`;
        img.style.top = `${finalY}px`;
        img.style.zIndex = '1000'; // Ensure it appears on top
        
        console.log('📍 Image positioned at:', finalX, finalY);
        
        // Handle image loading
        img.onload = () => {
            console.log('✅ Lord Ganesha image loaded successfully!');
            // Add a subtle bounce effect on load
            img.style.animation = 'ganeshAppear 4s ease-out forwards';
        };
        
        img.onerror = () => {
            console.log('❌ Image failed to load, creating fallback Ganesh');
            // Create a beautiful fallback element
            img.style.display = 'flex';
            img.style.alignItems = 'center';
            img.style.justifyContent = 'center';
            img.style.width = '120px';
            img.style.height = '120px';
            img.style.background = 'linear-gradient(135deg, #FFD700 0%, #FF9933 50%, #CC0000 100%)';
            img.style.borderRadius = '15px';
            img.style.fontSize = '4rem';
            img.style.boxShadow = '0 0 30px #FFD700, 0 8px 16px rgba(0,0,0,0.3)';
            img.style.border = '4px solid #FFD700';
            img.innerHTML = '🐘';
            img.style.animation = 'ganeshAppear 4s ease-out forwards';
        };
        
        // Add image to document FIRST, then set src
        document.body.appendChild(img);
        console.log('➕ Image element added to DOM');
        
        // Set source after adding to DOM
        img.src = randomImageUrl;
        
        // Remove image after animation completes
        setTimeout(() => {
            if (img && img.parentNode) {
                console.log('🗑️ Removing Ganesh image after animation');
                img.parentNode.removeChild(img);
            }
        }, 4200); // Slightly longer than animation duration
        
        // Immediate visual feedback - show loading placeholder
        const placeholder = document.createElement('div');
        placeholder.style.position = 'fixed';
        placeholder.style.left = `${finalX + 45}px`;
        placeholder.style.top = `${finalY + 45}px`;
        placeholder.style.width = '30px';
        placeholder.style.height = '30px';
        placeholder.style.background = '#FFD700';
        placeholder.style.borderRadius = '50%';
        placeholder.style.zIndex = '999';
        placeholder.style.animation = 'pulse 1s ease-in-out infinite';
        placeholder.innerHTML = '🕉️';
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.fontSize = '1.2rem';
        
        document.body.appendChild(placeholder);
        setTimeout(() => {
            if (placeholder && placeholder.parentNode) {
                placeholder.parentNode.removeChild(placeholder);
            }
        }, 1000);
    }
    
    updateParticles() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            
            // Update physics
            particle.vx *= particle.friction;
            particle.vy *= particle.friction;
            particle.vy += particle.gravity;
            
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Update life
            particle.life -= particle.decay;
            
            // Remove dead particles
            if (particle.life <= 0) {
                this.particles.splice(i, 1);
                continue;
            }
            
            // Draw particle
            this.drawParticle(particle);
        }
    }
    
    drawParticle(particle) {
        const alpha = particle.life;
        
        // Create glow effect
        this.ctx.shadowColor = particle.color;
        this.ctx.shadowBlur = particle.glow;
        
        // Draw main particle
        this.ctx.beginPath();
        this.ctx.globalAlpha = alpha;
        this.ctx.fillStyle = particle.color;
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Draw inner bright core
        this.ctx.beginPath();
        this.ctx.globalAlpha = alpha * 0.8;
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Reset shadow
        this.ctx.shadowBlur = 0;
        this.ctx.globalAlpha = 1;
    }
    
    animate() {
        // Clear canvas with slight trail effect
        this.ctx.fillStyle = 'rgba(13, 13, 35, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.updateParticles();
        
        // Continue animation
        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }
    
    startAnimation() {
        if (!this.animationFrameId) {
            this.animate();
        }
    }
    
    stopAnimation() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }
}

// Initialize the celebration when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎊 Starting Ganesh Chaturthi celebration! 🎊');
    
    // Wait a moment for everything to be ready
    setTimeout(() => {
        window.ganeshCelebration = new GaneshCelebration();
        
        // Test click after 2 seconds for debugging
        setTimeout(() => {
            console.log('🧪 Testing automatic click at center for debugging...');
            const testEvent = {
                clientX: window.innerWidth / 2,
                clientY: window.innerHeight / 2
            };
            if (window.ganeshCelebration) {
                window.ganeshCelebration.handleInteraction(testEvent);
            }
        }, 2000);
    }, 100);
});

// Handle page visibility changes to optimize performance
document.addEventListener('visibilitychange', () => {
    if (window.ganeshCelebration) {
        if (document.hidden) {
            window.ganeshCelebration.stopAnimation();
        } else {
            window.ganeshCelebration.startAnimation();
        }
    }
});

// Add some celebratory console messages
console.log(`
🕉️ ===== GANESH CHATURTHI CELEBRATION ===== 🕉️
   गणपति बप्पा मोरया! मंगलमूर्ति मोरया!
   Click anywhere to celebrate with Lord Ganesha!
   Each click brings blessings and fireworks! ✨
🐘 ======================================== 🐘
`);
/**
 * War Inc Rising - 粒子特效：平衡風之軌跡
 * 修正：提高可見度，恢復適中速度
 */
const canvas = document.getElementById('windCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 35; // 稍微增加密度

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Wind {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 60 + 30; // 軌跡長度
        this.thickness = Math.random() * 1.2 + 0.5;
        this.speed = Math.random() * 0.8 + 0.4; // 🚀 修正：恢復適中的速度感
        this.opacity = Math.random() * 0.25 + 0.15; // 🚀 修正：提高透明度，使其明顯
    }

    update() {
        this.x += this.speed;
        this.y += Math.sin(this.x / 150) * 0.3; // 輕微波動

        if (this.x - this.length > canvas.width) {
            this.x = -this.length;
            this.y = Math.random() * canvas.height;
        }
    }

    draw() {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(this.x - this.length, this.y, this.x, this.y);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(1, `rgba(255, 255, 255, ${this.opacity})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = 'round';
        ctx.moveTo(this.x - this.length, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
    }
}

function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Wind());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    initCanvas();
    createParticles();
});

initCanvas();
createParticles();
animate();
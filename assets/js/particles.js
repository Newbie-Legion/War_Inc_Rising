/**
 * War Inc Rising - 粒子特效：清晰風之軌跡
 * 因為層級提高，現在風會直接流過卡片表面
 */
const canvas = document.getElementById('windCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 30; // 適中數量

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class SharpWind {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 70 + 30;
        this.thickness = Math.random() * 1.0 + 0.4;
        this.speed = Math.random() * 0.7 + 0.3; // 速度適中
        // 因為不再被模糊，透明度可以稍微低一點，保持高級感
        this.opacity = Math.random() * 0.25 + 0.1; 
    }

    update() {
        this.x += this.speed;
        this.y += Math.sin(this.x / 180) * 0.25;

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
        particles.push(new SharpWind());
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
// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-dark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Animated Stats Numbers
function animateValue(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(id);
  let timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) clearInterval(timer);
  }, stepTime);
}

animateValue("followers", 0, 1200, 1500);
animateValue("likes", 0, 850, 1500);
animateValue("posts", 0, 75, 1500);
animateValue("messages", 0, 32, 1500);

// Chart.js - Followers Growth
const ctx = document.getElementById('followersChart').getContext('2d');
const followersChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
            label: 'Followers Growth',
            data: [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1750],
            borderColor: '#0077b6',
            backgroundColor: 'rgba(0,119,182,0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: '#0077b6'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: document.body.classList.contains('dark') ? '#eee' : '#333'
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    color: document.body.classList.contains('dark') ? '#eee' : '#333'
                },
                beginAtZero: true
            },
            x: {
                ticks: {
                    color: document.body.classList.contains('dark') ? '#eee' : '#333'
                }
            }
        }
    }
});

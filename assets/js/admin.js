document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('chartVisitas').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [{
                label: 'Visitas Mensuales',
                data: [1000, 2000, 3000, 4000, 5000],
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true
        }
    });
});
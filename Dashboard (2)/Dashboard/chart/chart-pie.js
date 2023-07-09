// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Bert", "Decision Tree", "Random Forest", "Naive Bayes", "Logistic Regression", "SVM"],
    datasets: [{
      data: [98.65,92.89,95.13,93.12,96.07,96.81],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#ff1111', '#8cd91b', '#16c1ad'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#be0000', '#629813', '#0f8779'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true
    },
    cutoutPercentage: 80,
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) { 
          var indice = tooltipItem.index;                 
          return "  " + data.labels[indice] +': '+data.datasets[0].data[indice] + '%';
      }
      }
    }
  },
});

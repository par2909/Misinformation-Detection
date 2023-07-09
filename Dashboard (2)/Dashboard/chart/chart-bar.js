let ctx = document.getElementById("myChart").getContext("2d");
let myBarChart;

let data1 = {
  labels: ["Kaggle Dataset (BERT)", "Covid-19 (BERT)", "General News (BERT)"],
  datasets: [{
      label: "Accuracy",
      backgroundColor: "blue",
      data: [98.81, 97.27, 99.89]
    },
    {
      label: "Precision",
      backgroundColor: "red",
      data: [98.94, 97.02, 100]
    },
    {
      label: "Recall",
      backgroundColor: "green",
      data: [98.70, 97.75, 99.79]
    },
    {
      label: "F1 Score",
      backgroundColor: "Yellow",
      data: [98.82, 97.39, 99.89]
    }
  ]
};
let data2 = {
  labels: ["Kaggle Dataset (Decision Tree)", "Covid-19 (Decision Tree)", "General News (Decision Tree)"],
  datasets: [{
      label: "Accuracy",
      backgroundColor: "blue",
      data: [99.7, 79.52, 99.45]
    },
    {
      label: "Precision",
      backgroundColor: "red",
      data: [99.7, 92.08, 99.38]
    },
    {
      label: "Recall",
      backgroundColor: "green",
      data: [99.67, 67.59, 99.48]
    },
    {
      label: "F1 Score",
      backgroundColor: "Yellow",
      data: [99.69, 77.95, 99.43]
    }
  ]
};

let data3 = {
  labels: ["Kaggle Dataset (Random Forest)", "Covid-19 (Random Forest)", "General News (Random Forest)"],
  datasets: [{
      label: "Accuracy",
      backgroundColor: "blue",
      data: [98.96, 88.24, 98.2]
    },
    {
      label: "Precision",
      backgroundColor: "red",
      data: [98.84, 92.15, 97.44]
    },
    {
      label: "Recall",
      backgroundColor: "green",
      data: [99, 85.32, 98.86]
    },
    {
      label: "F1 Score",
      backgroundColor: "Yellow",
      data: [98.92, 88.6, 98.15]
    }
  ]
};

let data4 = {
  labels: ["Kaggle Dataset (Naive Bayes)", "Covid-19 (Naive Bayes)", "General News (Naive Bayes)"],
  datasets: [{
      label: "Accuracy",
      backgroundColor: "blue",
      data: [95.36, 89.56, 94.45]
    },
    {
      label: "Precision",
      backgroundColor: "red",
      data: [93.9, 87.64, 92.18]
    },
    {
      label: "Recall",
      backgroundColor: "green",
      data: [96.55, 93.75, 96.68]
    },
    {
      label: "F1 Score",
      backgroundColor: "Yellow",
      data: [95.2, 90.59, 94.38]
    }
  ]
};

let data5 = {
  labels: ["Kaggle Dataset (Logistic Regression)", "Covid-19 (Logistic Regression)", "General News (Logistic Regression)"],
  datasets: [{
      label: "Accuracy",
      backgroundColor: "blue",
      data: [98.81, 90.58, 98.82]
    },
    {
      label: "Precision",
      backgroundColor: "red",
      data: [98.51, 92.25, 98.5]
    },
    {
      label: "Recall",
      backgroundColor: "green",
      data: [99, 89.97, 99.07]
    },
    {
      label: "F1 Score",
      backgroundColor: "Yellow",
      data: [98.76, 91.1, 98.78]
    }
  ]
};

let data6 = {
  labels: ["Kaggle Dataset (SVM)", "Covid-19 (SVM)", "General News (SVM)"],
  datasets: [{
      label: "Accuracy",
      backgroundColor: "blue",
      data: [99.55, 91.59, 99.3]
    },
    {
      label: "Precision",
      backgroundColor: "red",
      data: [99.46, 92.9, 98.97]
    },
    {
      label: "Recall",
      backgroundColor: "green",
      data: [99.6, 91.28, 99.58]
    },
    {
      label: "F1 Score",
      backgroundColor: "Yellow",
      data: [99.53, 92.08, 99.28]
    }
  ]
};


Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(',', '').replace(' ', '');
  let n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      let k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

function reloadCanvas(data, minTicks) {
  // Set new default font family and font color to mimic Bootstrap's default styling

  // Bar Chart Example
  myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      events: ['mousemove'],
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: true
          },
          maxBarThickness: 45,
        }],
        yAxes: [{
          ticks: {
            min: minTicks,
            max: 100 ,
            maxTicksLimit: 0,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return number_format(value) + '%';
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: true,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: true
      },
      tooltips: {
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        callbacks: {
          label: function (tooltipItem, chart) {
            let datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ': ' + tooltipItem.yLabel + "%";
          }
        
        }
        }
      },
  });


}

const allCards = document.querySelectorAll(".col-xl-3.col-md-6.mb-4");

function addZoomer() {
  allCards.forEach((ele) => {
    ele.classList.add("zoomer");
  })
}
function removeToggle() {
  allCards.forEach((ele) => {
    ele.classList.remove("toggle");
  })
}

reloadCanvas(data1, 90);
document.querySelector('#cardOne').addEventListener("click", function (e) {
  myBarChart.destroy();
  reloadCanvas(data1, 80);
  myBarChart.update();

  addZoomer()
  removeToggle()

  let currDiv = e.target.closest("#cardOne")
  currDiv.classList.remove("zoomer")
  currDiv.classList.add("toggle")
})
document.querySelector('#cardTwo').addEventListener("click", function (e) {
  myBarChart.destroy();
  reloadCanvas(data2, 67);
  myBarChart.update();
  
  addZoomer()
  removeToggle()
  
  let currDiv = e.target.closest("#cardTwo")
  currDiv.classList.remove("zoomer")
  currDiv.classList.add("toggle")
})
document.querySelector('#cardThree').addEventListener("click", function (e) {
  myBarChart.destroy();
  reloadCanvas(data3, 84);
  myBarChart.update();
  
  addZoomer()
  removeToggle()
  
  let currDiv = e.target.closest("#cardThree")
  currDiv.classList.remove("zoomer")
  currDiv.classList.add("toggle")
})
document.querySelector('#cardFour').addEventListener("click", function (e) {
  myBarChart.destroy();
  reloadCanvas(data4, 87);
  myBarChart.update();
  
  addZoomer()
  removeToggle()
  
  let currDiv = e.target.closest("#cardFour")
  currDiv.classList.remove("zoomer")
  currDiv.classList.add("toggle")
})
document.querySelector('#cardFive').addEventListener("click", function (e) {
  myBarChart.destroy();
  reloadCanvas(data5, 89);
  myBarChart.update();
  
  addZoomer()
  removeToggle()
  
  let currDiv = e.target.closest("#cardFive")
  currDiv.classList.remove("zoomer")
  currDiv.classList.add("toggle")
})
document.querySelector('#cardSix').addEventListener("click", function (e) {
  myBarChart.destroy();
  reloadCanvas(data6, 90);
  myBarChart.update();
  
  addZoomer()
  removeToggle()
  
  let currDiv = e.target.closest("#cardSix")
  currDiv.classList.remove("zoomer")
  currDiv.classList.add("toggle")
})
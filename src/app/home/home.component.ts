import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  public clicked3: boolean = false;
  public clicked4: boolean = false;
  public clicked5: boolean = false;
  public clicked6: boolean = false;
  public clicked7: boolean = false;


  constructor() { }

  ngOnInit(): void {
    var gradientChartOptionsConfigurationWithTooltipBlue: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
  },
  
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#2380f7"
      }
    }],

    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#2380f7"
      }
    }]
  }
};

var gradientChartOptionsConfigurationWithTooltipPurple: any = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },

  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9a9a9a"
      }
    }],

    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(225,78,202,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9a9a9a"
      }
    }]
  }
};

var gradientChartOptionsConfigurationWithTooltipRed: any = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },

  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9a9a9a"
      }
    }],

    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(233,32,16,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9a9a9a"
      }
    }]
  }
};

var gradientChartOptionsConfigurationWithTooltipOrange: any = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },

  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 110,
        padding: 20,
        fontColor: "#ff8a76"
      }
    }],

    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(220,53,69,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#ff8a76"
      }
    }]
  }
};

var gradientChartOptionsConfigurationWithTooltipGreen: any = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },

  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9e9e9e"
      }
    }],

    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(0,242,195,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9e9e9e"
      }
    }]
  }
};


var gradientBarChartConfiguration: any = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },

  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{

      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 120,
        padding: 20,
        fontColor: "#9e9e9e"
      }
    }],

    xAxes: [{

      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9e9e9e"
      }
    }]
  }
};

this.canvas = document.getElementById("chartLineRed");
this.ctx = this.canvas.getContext("2d");

var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

var data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE'],
  datasets: [{
    label: "Blood in Litres",
    fill: true,
    backgroundColor: gradientStroke,
    borderColor: '#ec250d',
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: '#ec250d',
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: '#ec250d',
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: [1800, 2000, 1950, 1700],
  }]
};

var myChart = new Chart(this.ctx, {
  type: 'line',
  data: data,
  options: gradientChartOptionsConfigurationWithTooltipRed
});


this.canvas = document.getElementById("chartLineGreen");
this.ctx = this.canvas.getContext("2d");


var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

var data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
  datasets: [{
    label: "Total Platelet",
    fill: true,
    backgroundColor: gradientStroke,
    borderColor: '#00d6b4',
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: '#00d6b4',
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: '#00d6b4',
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: [160, 220, 270, 180],
  }]
};

var myChart = new Chart(this.ctx, {
  type: 'line',
  data: data,
  options: gradientChartOptionsConfigurationWithTooltipGreen

});



var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
this.datasets = [
  
    [200, 220,  170, 10, 30, 50, 60, 100, 130, 170, 200,190],
    [180, 150, 155, 10, 45, 65, 70, 90, 120, 175, 190, 170],
    [160, 190, 140, 20, 50, 45, 60, 100, 110, 165, 180, 185],
    [195, 150, 190, 15, 35, 55, 70, 90, 140, 170, 190, 170],
    [170, 210, 160, 10, 25, 40, 55, 95, 115, 180, 200, 190],
    [150, 190, 170, 5, 40, 35, 50, 105, 130, 165, 205, 195],
    [185, 200, 140, 15, 30, 40, 55, 100, 140, 185, 210, 190],
    [170, 210, 180, 25, 20, 30, 60, 110, 120, 170, 200, 170]
];
this.data = this.datasets[0];



this.canvas = document.getElementById("chartBig1");
this.ctx = this.canvas.getContext("2d");

var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

var config = {
  type: 'line',
  data: {
    labels: chart_labels,
    datasets: [{
      label: "Donation",
      fill: true,
      backgroundColor: gradientStroke,
      borderColor: '#ec250d',
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: '#ec250d',
      pointBorderColor: 'rgba(255,255,255,0)',
      pointHoverBackgroundColor: '#ec250d',
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: this.data,
    }]
  },
  options: gradientChartOptionsConfigurationWithTooltipRed
};
this.myChartData = new Chart(this.ctx, config);


this.canvas = document.getElementById("CountryChart");
this.ctx  = this.canvas.getContext("2d");
var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


var myChart = new Chart(this.ctx, {
  type: 'bar',
  responsive: true,
  legend: {
    display: false
  },
  data: {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
    datasets: [{
      label: "Plasma",
      fill: true,
      backgroundColor: gradientStroke,
      hoverBackgroundColor: gradientStroke,
      borderColor: '#1f8ef1',
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      data: [110, 130, 90, 140],
    }]
  },
  options: gradientBarChartConfiguration
});

}
public updateOptions() {
this.myChartData.data.datasets[0].data = this.data;
this.myChartData.update();
}
}






import Chart from 'chartjs';
import {bindable, children,useView} from 'aurelia-framework';

@import {useView} from 'aurelia-framework';

@useView('./chart.html')
export class LineChart {
  @bindable labels;
  @children('chart-data') datasets;
  
  bind() {
    this.context = this.canvas.getContext('2d');
  }

  attached() {
    this.render();
  }
  
  render() {
    if (this.chart) {
      this.chart.destroy();
    }
    
    let data = {
      labels: this.labels,
      datasets: this.datasets
    };
    
    this.chart = new Chart(this.context).Line(data);
  }
  
  detached() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}

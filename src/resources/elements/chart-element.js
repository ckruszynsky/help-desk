import Chart from 'chartjs';
import {bindable, children, inlineView} from 'aurelia-framework';

export function chartElement(api) {
  return function(target) {
    bindable('labels')(target); //sets up a bindable on the target class
    children({ selector: 'chart-data', name: 'datasets'})(target);//setups the child element binding on the target
    
    //provide the template inline instead of using a html view in a separate file.
    inlineView(`
    <template>
      <canvas ref="canvas"></canvas>
      <slot></slot>
    </template>
    `)(target);

    //adding method implementations 
    target.prototype.bind = function() {
      this.context = this.canvas.getContext('2d');
    };
    
    target.prototype.attached = function() {
      this.render();
    };

    target.prototype.render = function() {
      if (this.chart) {
        this.chart.destroy();
      }

      let data = {
        labels: this.labels,
        datasets: this.datasets
      };

      this.chart = new Chart(this.context)[api](data);
    };

    target.prototype.detached = function() {
      if (this.chart) {
        this.chart.destroy();
      }
    };
  }
}

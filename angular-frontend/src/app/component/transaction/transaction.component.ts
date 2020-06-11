import { Component, OnInit, OnDestroy } from '@angular/core';
/* import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";  */



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements  OnInit, OnDestroy  {
	
   private chart: am4charts.XYChart;
   private interval: any;
   private price: number;

  constructor() {}

  ngOnInit() {
         
		 Promise.all([
			  import("@amcharts/amcharts4/core"),
			  import("@amcharts/amcharts4/charts"),
			  import("@amcharts/amcharts4/themes/animated")
			]).then((modules) => {
			  const am4core = modules[0];
			  const am4charts = modules[1];
			  const am4themes_animated = modules[2].default;
			  am4core.useTheme(am4themes_animated);
		 
		    this.chart = am4core.create("chartdiv", am4charts.XYChart);
			this.chart.hiddenState.properties.opacity = 0;
			this.chart.padding(0, 0, 0, 0);
			this.chart.zoomOutButton.disabled = true;
			let data = [];
			let vprice = 0;
			let i = 0;
			for (i = 0; i <= 30; i++) {
			     vprice = this.price - Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
			     data.push({ date: new Date().setSeconds(i - 30), value: vprice });
			    }
			let dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
			dateAxis.renderer.grid.template.location = 0;
			dateAxis.renderer.minGridDistance = 30;
			dateAxis.dateFormats.setKey("second", "ss");
			dateAxis.periodChangeDateFormats.setKey("second", "[bold]h:mm a");
			dateAxis.periodChangeDateFormats.setKey("minute", "[bold]h:mm a");
			dateAxis.periodChangeDateFormats.setKey("hour", "[bold]h:mm a");
			dateAxis.renderer.inside = true;
			dateAxis.renderer.axisFills.template.disabled = false;
			dateAxis.renderer.ticks.template.disabled = false;

			let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
			valueAxis.tooltip.disabled = true;
			valueAxis.interpolationDuration = 500;
			valueAxis.rangeChangeDuration = 500;
			valueAxis.renderer.inside = true;
			valueAxis.renderer.minLabelPosition = 0.05;
			valueAxis.renderer.maxLabelPosition = 0.95;
			valueAxis.renderer.axisFills.template.disabled = false;
			valueAxis.renderer.ticks.template.disabled = false;

			let series = this.chart.series.push(new am4charts.LineSeries());  
			series.dataFields.dateX = "date";
			series.dataFields.valueY = "value";
			series.interpolationDuration = 500;
			series.defaultState.transitionDuration = 0;
			series.tensionX = 0.8;
		
			
			let title = this.chart.titles.create();
			title.text = "Changement de prix par temps";
			title.fontSize = 25;
			title.marginBottom = 30;

			dateAxis.interpolationDuration = 500;
			dateAxis.rangeChangeDuration = 500;

			series.fillOpacity = 1;
			let gradient = new am4core.LinearGradient();
			gradient.addColor(this.chart.colors.getIndex(0), 0.2);
			gradient.addColor(this.chart.colors.getIndex(0), 0);
			series.fill = gradient;

			
			dateAxis.renderer.labels.template.adapter.add("fillOpacity", function (fillOpacity, target) {
				let dataItem = target.dataItem;
				return dataItem.position;
			})

			
			dateAxis.events.on("validated", function () {
				am4core.iter.each(dateAxis.renderer.labels.iterator(), function (label) {
					label.fillOpacity = 1;
				})
			})

			
		/**	dateAxis.renderer.labels.template.adapter.add("rotation", function (rotation, target) {
				let dataItem = target.dataItem;
				if (dataItem.date && dataItem.date.getTime() === am4core.time.round(new Date(dataItem.date.getTime()), "minute").getTime()) {
					target.verticalCenter = "middle";
					target.horizontalCenter = "left";
					return -90;
				}
				else {
					target.verticalCenter = "bottom";
					target.horizontalCenter = "middle";
					return 0;
				}
			})  **/

			
			let bullet = series.createChild(am4charts.CircleBullet);
			bullet.circle.radius = 5;
			bullet.fillOpacity = 1;
			bullet.fill = this.chart.colors.getIndex(0);
			bullet.isMeasured = false;

			series.events.on("validated", function() {
				bullet.moveTo(series.dataItems.last.point);
				bullet.validatePosition();
			});

			this.chart.data = data;
			this.interval = setInterval(() => {
                    let vprice = this.price + Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);		 
					let lastdataItem = series.dataItems.getIndex(series.dataItems.length - 1);
					this.chart.addData({ 
						   date: new Date(lastdataItem.dateX.getTime() + 1000), 
						   value: vprice 
							   },
						1
							);
                 }, 1000);
			
				
      })
                .catch(e => {
                    console.error("Error when creating chart", e);
                });
        });
	 
	 
	 
   ngOnDestroy() {
          clearInterval(this.interval);	   
	      this.chart.dispose();
      }

}

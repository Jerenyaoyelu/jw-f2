[![](https://img.shields.io/npm/l/jw-f2)](https://www.npmjs.com/package/jw-f2)
# jw-f2
> a light chart component based on native @antv/f2 for wechat-miniprogram

<br/>

## Install

1. Install package: `npm install jw-f2`
2. Build package:
> - tick `detials -> Use NPM module`
> - build npm: `tools -> build npm`

<br/>

## Attributes

| Attribute  | Description | Compulsory | Type | Default |
|----|---|---|---|---|
| id | id of canvas | No | String | __jw-f2-canvas |

## Events

| Attribute  | Description | Compulsory | Type | Default |
|----|---|---|---|---|
|  onRender  | render chart function | Yes | Function | - |

<br/>

## Usage

### Use as a custom component
> BasicRadarChart component
1. index.js
```javascript
Component({
  properties: {
    chartData: {
      type: Object,
      value: {}
    }
  },
  data: {
    chartId: '__jw-basic-radar'
  },
  methods: {
    renderChart(e) {
      const {F2, config, that} = e.detail;
      if(!F2 || !config || !that) return;
      const chart = new F2.Chart(config);
      chart.coord('polar');
      chart.source(this.properties.chartData, {
        score: {
          min: 0,
          max: 5,
          nice: false,
          tickInterval: 1
        }
      });
      chart.axis('score', {
        label: false,
        line: null,
        tickLine: null,
        grid: {
          stroke: '#999',
          line: {
            style: {
              lineDash: null
            }
          }
        }
      });
      chart.axis('stack', {
        line: null,
        tickLine: null,
        grid: {
          lineDash: null,
          stroke: '#999'
        }
      });
      chart.line().position('stack*score').color('type').size(2);;
      chart.point().position('stack*score').color('type').size(4)
        .style({
          stroke: '#fff',
          lineWidth: 1
        });
      chart.render();
      that.chart = chart;
      that.canvasEl = chart.get('el');
    }
  }
})
```
2. index.json
```json
{
  "component": true,
  "usingComponents": {
    "jw-f2": "jw-f2"
  }
}
```
3. index.wxml
```html
<view class="chart-container">
  <jw-f2 bindonRender="renderChart" id="{{chartId}}"/>
</view>
```
4. index.wxss
```css
.chart-container {
  width: 100%;
  height: 500rpx;
}
```

<br/>

### Use in a page
> BasicRadarChart in a page
1. index.js
```javascript
Page({
  data: {
    chartId: '__jw-basic-radar',
    chartData: []
  },
  ... //get your chart data
  renderChart(e) {
    const {F2, config, that} = e.detail;
    if(!F2 || !config || !that) return;
    const chart = new F2.Chart(config);
    chart.coord('polar');
    chart.source(this.properties.chartData, {
      score: {
        min: 0,
        max: 5,
        nice: false,
        tickInterval: 1
      }
    });
    chart.axis('score', {
      label: false,
      line: null,
      tickLine: null,
      grid: {
        stroke: '#999',
        line: {
          style: {
            lineDash: null
          }
        }
      }
    });
    chart.axis('stack', {
      line: null,
      tickLine: null,
      grid: {
        lineDash: null,
        stroke: '#999'
      }
    });
    chart.line().position('stack*score').color('type').size(2);;
    chart.point().position('stack*score').color('type').size(4)
      .style({
        stroke: '#fff',
        lineWidth: 1
      });
    chart.render();
    that.chart = chart;
    that.canvasEl = chart.get('el');
  }
})
```
2. index.json
```json
{
  "usingComponents": {
    "jw-f2": "jw-f2"
  }
}
```
3. index.wxml
```html
<view class="chart-container">
  <jw-f2 bindonRender="renderChart" id="{{chartId}}"/>
</view>
```
4. index.wxss
```css
.chart-container {
  width: 100%;
  height: 500rpx;
}
```

<br/>

## A list of examples >> [jw-f2-examples](https://github.com/Jerenyaoyelu/jw-f2-examples)

## Support this project
- Buy me a coffee

<span><img src="./assets/wcp.jpeg" width="200" height="300" /> <img src="./assets/alp.jpeg" width="200" height="300"/> </span>

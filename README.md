# vue-time-graph

A Vue component to have a time graph with filters

## Installation

```js
npm i vue-time-graph --save
```

### Module

```js
import VueTimeGraph from 'vue-time-graph';
...
export default  {
...
components:{
      VueTimeGraph
    }
...
}
```

## Usage

In the html
```html
<vue-time-graph v-on:filter="filter" :chardata="charData"> </vue-time-graph>
```
In the component
```js
export default  {
...
methods:{
      filter (values) 
        {
            //filter your info and set it to the charData variable
        }
    }
...
}
```

## Props

| Name | Default  | Type  | Definition |
| :---:   | :-: | :-: | :-: |
| title | 'Grafica de tiempo' | String | title of the graph |
| showFilter | 'true' | Bool | if you want to show the filters |
| periodItems | [ { text: 'Minuto', value: 'minute' } ... ]| Array | periods of time options |
| chardata | {} | Object | data of the graph, same structure of chatsjs |
| options | {} | Object | options of the graph, same structure of chatsjs |





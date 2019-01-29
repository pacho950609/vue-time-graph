!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue-chartjs")):"function"==typeof define&&define.amd?define("vue-time-graph",["vue-chartjs"],t):"object"==typeof exports?exports["vue-time-graph"]=t(require("vue-chartjs")):e["vue-time-graph"]=t(e["vue-chartjs"])}(this,function(e){return function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){var a=i(1)(i(2),i(6),null,null);e.exports=a.exports},function(e,t){e.exports=function(e,t,i,a){var n,o=e=e||{},r=typeof e["default"];"object"!==r&&"function"!==r||(n=e,o=e["default"]);var l="function"==typeof o?o.options:o;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),i&&(l._scopeId=i),a){var c=Object.create(l.computed||null);Object.keys(a).forEach(function(e){var t=a[e];c[e]=function(){return t}}),l.computed=c}return{esModule:n,exports:o,options:l}}},function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(3),o=a(n);t["default"]={components:{MainChart:o["default"]},name:"vue-time-graph",props:{title:{type:String,"default":"Grafica de tiempo"},showFilter:{type:Boolean,"default":!0},periodItems:{type:Array,"default":function(){var e=[{text:"Minuto",value:"minute"},{text:"Hora",value:"hour"},{text:"Día",value:"day"},{text:"Semana",value:"week"},{text:"Mes",value:"month"}];return e}},chardata:{type:Object,"default":function(){return{}}},options:{type:Object,"default":function(){var e={responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0}}]}};return e}}},data:function(){return{menudate1:!1,menutime1:!1,menudate2:!1,menutime2:!1,datepickedfloor:null,datepickedceil:null,timefloor:null,timeceil:null,graphPeriod:null,filterData:this.showFilter}},methods:{filter:function(){var e={datepickedfloor:this.datepickedfloor,datepickedceil:this.datepickedceil,timefloor:this.timefloor,timeceil:this.timeceil,graphPeriod:this.graphPeriod};this.$emit("filter",e)}}}},function(e,t,i){var a=i(1)(i(4),null,null,null);e.exports=a.exports},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(5),n=a.mixins.reactiveProp;t["default"]={"extends":a.Line,mixins:[n],props:["chartData","options"],watch:{"chartData.labels":function(e,t){e!==t&&this.renderChart(this.chartData,this.options)}},mounted:function(){this.chartData&&this.options&&this.renderChart(this.chartData,this.options)}}},function(t,i){t.exports=e},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{attrs:{tile:""}},[i("v-card-text",{staticStyle:{"padding-top":"3%","padding-left":"2%"}},[i("h1",{staticStyle:{"font-weight":"lighter",color:"#E67F23"}},[e._v(" "+e._s(e.title)+"\n      "),i("v-icon",{attrs:{color:"gray"},on:{click:function(t){e.filterData?e.filterData=!1:e.filterData=!0}}},[e._v(" filter_list ")])],1),e._v(" "),e.filterData?i("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[i("p",{staticStyle:{padding:"2%",color:"gray"}},[e._v("Rango de Fechas: ")]),e._v(" "),i("v-menu",{ref:"menudate1",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.datepickedfloor,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.datepickedfloor=t}},model:{value:e.menudate1,callback:function(t){e.menudate1=t},expression:"menudate1"}},[i("v-text-field",{attrs:{slot:"activator",label:"Fecha Inicial","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.datepickedfloor,callback:function(t){e.datepickedfloor=t},expression:"datepickedfloor"}}),e._v(" "),i("v-date-picker",{on:{input:function(t){e.$refs.menudate1.save(e.datepickedfloor)}},model:{value:e.datepickedfloor,callback:function(t){e.datepickedfloor=t},expression:"datepickedfloor"}})],1),e._v(" "),i("v-menu",{ref:"menutime1",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.timefloor,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.timefloor=t}},model:{value:e.menutime1,callback:function(t){e.menutime1=t},expression:"menutime1"}},[i("v-text-field",{attrs:{slot:"activator",label:"Hora Inicial","prepend-icon":"access_time",readonly:""},slot:"activator",model:{value:e.timefloor,callback:function(t){e.timefloor=t},expression:"timefloor"}}),e._v(" "),e.menutime1?i("v-time-picker",{attrs:{"full-width":""},on:{change:function(t){e.$refs.menutime1.save(e.timefloor)}},model:{value:e.timefloor,callback:function(t){e.timefloor=t},expression:"timefloor"}}):e._e()],1),e._v(" "),i("v-menu",{ref:"menudate2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.datepickedceil,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.datepickedceil=t}},model:{value:e.menudate2,callback:function(t){e.menudate2=t},expression:"menudate2"}},[i("v-text-field",{attrs:{slot:"activator",label:"Fecha Final","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.datepickedceil,callback:function(t){e.datepickedceil=t},expression:"datepickedceil"}}),e._v(" "),i("v-date-picker",{on:{input:function(t){e.$refs.menudate2.save(e.datepickedceil)}},model:{value:e.datepickedceil,callback:function(t){e.datepickedceil=t},expression:"datepickedceil"}})],1),e._v(" "),i("v-menu",{ref:"menutime2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.timeceil,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.timeceil=t}},model:{value:e.menutime2,callback:function(t){e.menutime2=t},expression:"menutime2"}},[i("v-text-field",{attrs:{slot:"activator",label:"Hora Final","prepend-icon":"access_time",readonly:""},slot:"activator",model:{value:e.timeceil,callback:function(t){e.timeceil=t},expression:"timeceil"}}),e._v(" "),e.menutime2?i("v-time-picker",{attrs:{"full-width":""},on:{change:function(t){e.$refs.menutime2.save(e.timeceil)}},model:{value:e.timeceil,callback:function(t){e.timeceil=t},expression:"timeceil"}}):e._e()],1),e._v(" "),i("v-flex",{staticStyle:{margin:"0px 20px"},attrs:{xs12:"",sm3:"","d-flex":""}},[i("v-select",{attrs:{items:e.periodItems,label:"Granularidad"},model:{value:e.graphPeriod,callback:function(t){e.graphPeriod=t},expression:"graphPeriod"}})],1),e._v(" "),i("v-icon",{attrs:{color:"orange"},on:{click:e.filter}},[e._v("check")])],1):e._e(),e._v(" "),i("main-chart",{attrs:{width:700,"chart-data":e.chardata,options:e.options}})],1)],1)},staticRenderFns:[]}}])});
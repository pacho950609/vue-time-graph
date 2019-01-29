<template>
      <v-card tile>
    <v-card-text style="padding-top:3%; padding-left:2%;">
      <h1 style="font-weight: lighter; color:#E67F23"> {{title}}
        <v-icon @click="filterData ? filterData = false : filterData = true" color="gray"> filter_list </v-icon>
      </h1>
      <v-layout align-center justify-center row fill-height v-if="filterData">
        <p style="padding:2%;color:gray;">Rango de Fechas: </p>
        <v-menu
          ref="menudate1"
          :close-on-content-click="false"
          v-model="menudate1"
          :nudge-right="40"
          :return-value.sync="datepickedfloor"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="datepickedfloor"
            label="Fecha Inicial"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="datepickedfloor" @input="$refs.menudate1.save(datepickedfloor)"></v-date-picker>
        </v-menu>
        <v-menu
          ref="menutime1"
          :close-on-content-click="false"
          v-model="menutime1"
          :nudge-right="40"
          :return-value.sync="timefloor"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="timefloor"
            label="Hora Inicial"
            prepend-icon="access_time"
            readonly
          ></v-text-field>
          <v-time-picker
            v-if="menutime1"
            v-model="timefloor"
            full-width
            @change="$refs.menutime1.save(timefloor)"
          ></v-time-picker>
        </v-menu>
        <v-menu
          ref="menudate2"
          :close-on-content-click="false"
          v-model="menudate2"
          :nudge-right="40"
          :return-value.sync="datepickedceil"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="datepickedceil"
            label="Fecha Final"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="datepickedceil" @input="$refs.menudate2.save(datepickedceil)"></v-date-picker>
        </v-menu>
        <v-menu
          ref="menutime2"
          :close-on-content-click="false"
          v-model="menutime2"
          :nudge-right="40"
          :return-value.sync="timeceil"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="timeceil"
            label="Hora Final"
            prepend-icon="access_time"
            readonly
          ></v-text-field>
          <v-time-picker
            v-if="menutime2"
            v-model="timeceil"
            full-width
            @change="$refs.menutime2.save(timeceil)"
          ></v-time-picker>
        </v-menu>
        <v-flex xs12 sm3 d-flex style="margin:0px 20px">
              <v-select
            v-model="graphPeriod"
            :items="periodItems"
            label="Granularidad"
          ></v-select>
        </v-flex>
        <v-icon color="orange" v-on:click="filter">check</v-icon>
      </v-layout>
       <main-chart  :width=700 :chart-data="chardata" :options="options"/>
    </v-card-text>
  </v-card>
</template>
<script>
import MainChart from './main-chart.vue';
export default {
    components:
    {
        MainChart
    },
    name: 'vue-time-graph',
    props: 
    {
        title: {type: String , default : 'Grafica de tiempo'},
        showFilter: {type:Boolean, default: true},
        periodItems: {type: Array , default : ()=>
        { 
          let rta = [
                      { text: 'Minuto', value: 'minute' },
                      { text: 'Hora', value: 'hour' },
                      { text: 'Día', value: 'day' },
                      { text: 'Semana', value: 'week' },
                      { text: 'Mes', value: 'month' }
                    ] 
          return  rta
        }},
        chardata: {type: Object , default : () => { return {} }},
        options: {type: Object , default : ()=>
        {
            let rta={ responsive: true,
                      maintainAspectRatio: false,
                      scales:{
                          yAxes: [{
                            ticks:{ beginAtZero: true },
                            gridLines:{ display: true }
                          }]
                      },
                    }
            return rta
        }}
    },
    data () 
    {
        return {
            menudate1: false,
            menutime1: false,
            menudate2: false,
            menutime2: false,
            datepickedfloor: null,
            datepickedceil: null,
            timefloor: null,
            timeceil: null,
            graphPeriod: null,
            filterData : this.showFilter

        }
    },
    methods:
    {
        filter()
        {
            let rta = {
              datepickedfloor : this.datepickedfloor,
              datepickedceil : this.datepickedceil,
              timefloor : this.timefloor,
              timeceil : this.timeceil,
              graphPeriod : this.graphPeriod
            }
            this.$emit('filter', rta)
        }
    }
 
}
</script>

<template>
  <div id="main">
    <header id="hd">
      <div class="path">
        <a href="" class="pathItem">{{ weather.province }}</a>
        >
        <a href="" class="pathItem">{{ weather.city }}</a>
      </div>
      <div id="reporttime">
        更新于：{{ reporttime }}
      </div>
    </header>
    <div class="body">
      <div class="temperature">
        <div id="temperatureNum">{{ temperature }}</div>
        <div id="weather">{{ weather.weather }}</div>
      </div>
      <div class="otherMsgs">
        <div id="wind"><send-outlined />风向：{{ wind }}</div>
        <div id="humidity"><fire-outlined />湿度：{{ humidity }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios'
import { computed, ref } from 'vue';
import { SendOutlined,FireOutlined } from '@ant-design/icons-vue';
import formatTime from '@/utils/formatTime.js'
const weather = ref({});
const wind = computed(()=>weather.value.winddirection + weather.value.windpower + '级')
const humidity = computed(()=> weather.value.humidity + '%');
const temperature = computed(()=>weather.value.temperature + "℃");
const reporttime = computed(()=>formatTime(weather.value.reporttime))
const getWeather = async ()=>{
  const {data:res} = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo?key=2ea286986c28a2620cc1195cc64c781d&city=110000')
  if(res.info === 'OK'){
    weather.value = res.lives[0];
  }
}
getWeather();

</script>
<style>
#main{
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background-image: url('./assets/bg.jpg');
  background-repeat: no-repeat;
  color: white;
  overflow: hidden;
}
#hd{
  position: relative;
  margin: 10px;
}
#reporttime{
  position: absolute;
  right: 0;
  top: 0;
}
.otherMsgs{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.temperature{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  justify-content: center;
}
#temperatureNum{
  font-size: 100px;
}
#weather{
  font-size: 40px;
}
a{
  color: inherit;
  text-decoration: none;
}
.pathItem{
  font-size: 18px;
}
</style>

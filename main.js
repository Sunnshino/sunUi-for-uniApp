import Vue from 'vue'
import App from './App'
import Rq from './util/Rq.js'
import Api from './api.js'
import sunStar from './components/sunui-star.vue'
import sunradioCheckbox from './components/sunradio-checkbox.vue'
import sunSwiper from './components/sunui-swiper.vue'
import sunUpImg from './components/sunui-upimg.vue'
import sunSpeaker from './components/sunui-speaker.vue'
import sunuiTab from './components/sunui-tab.vue'

Vue.component('sunui-tab',sunuiTab);
Vue.component('sunui-upimg', sunUpImg);
Vue.component('sunradio-checkbox', sunradioCheckbox);
Vue.component('sunui-star', sunStar);
Vue.component('sunui-speaker', sunSpeaker);
Vue.component('sunui-swiper', sunSwiper);

Vue.prototype.$Rq = Rq.Rq;
Vue.prototype.$Api = Api.api;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

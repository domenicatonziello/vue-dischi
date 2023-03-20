import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { router } from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faRotateLeft, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faRotateLeft, faHourglassHalf)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app')

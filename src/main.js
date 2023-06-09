import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppLoader from './components/AppLoader.vue'
import AppAlert from './components/AppAlert.vue'
import { router } from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faRotateLeft, faHourglassHalf, faBowlFood, faPerson, faClock, faBook, faEgg } from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faRotateLeft, faHourglassHalf, faBowlFood, faPerson, faClock, faBook, faEgg)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('app-loader', AppLoader)
app.component('app-alert', AppAlert)
app.use(router);
app.mount('#app')

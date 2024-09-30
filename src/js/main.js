import { createApp } from "vue";
import App from "../App.vue";
import "flag-icons/css/flag-icons.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


createApp(App)
    .component('fa-icon', FontAwesomeIcon)
    .mount("#app")
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from "primevue/toastservice";
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import FileUpload from "primevue/fileupload";
import Button from "primevue/button";
import Badge from "primevue/badge";
import ProgressBar from "primevue/progressbar";
import Toolbar from "primevue/toolbar";
import Toast from "primevue/toast";
import DataTable from "primevue/datatable";
import Rating from "primevue/rating";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Column from "primevue/column";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import RadioButton from "primevue/radiobutton";
import Dialog from "primevue/dialog";
import Password from "primevue/password";
import DataView from "primevue/dataview";
import Calendar from "primevue/calendar";
import InputMask from "primevue/inputmask";
import Message from "primevue/message";

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.use(ToastService)
app.component('FileUpload', FileUpload);
app.component('Button', Button);
app.component('Badge', Badge);
app.component('ProgressBar', ProgressBar);
app.component('Toolbar', Toolbar);
app.component('Toast', Toast);
app.component('DataTable', DataTable);
app.component('Rating', Rating);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('Column', Column);
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('RadioButton', RadioButton);
app.component('Dialog', Dialog);
app.component('Password', Password);
app.component('DataView', DataView);
app.component('Calendar', Calendar);
app.component('InputMask', InputMask);
app.component('Message', Message);


app.mount('#app')

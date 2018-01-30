import Vue from 'vue'

// Imports
import addHero from '../components/adminPanel/addHero.vue'
import addTalent from '../components/adminPanel/addTalent.vue'
import addEquipment from '../components/adminPanel/addEquipment.vue'


//Components
Vue.component('app-admin-add-hero', addHero);
Vue.component('app-admin-add-talent', addTalent);
Vue.component('app-admin-add-equipment', addEquipment);

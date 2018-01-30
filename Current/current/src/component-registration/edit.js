import Vue from 'vue'

// Imports
import EditOverlay from '../components/edit/EditOverlay.vue'
import EditCard from '../components/edit/EditCard.vue'
import EditDungeon from '../components/edit/EditDungeon.vue'
import EditHbm from '../components/edit/EditHbm.vue'
import EditLbf from '../components/edit/EditLbf.vue'
import EditGuildStatus from '../components/edit/EditGuildStatus.vue'
import EditLavaStatus from '../components/edit/EditLavaStatus.vue'
import EditShards from '../components/edit/EditShards.vue'


//Components
Vue.component('app-edit-overlay', EditOverlay);
Vue.component('app-edit-card', EditCard);
Vue.component('app-edit-dungeon', EditDungeon);
Vue.component('app-edit-hbm', EditHbm);
Vue.component('app-edit-lbf', EditLbf);
Vue.component('app-edit-guild-status', EditGuildStatus);
Vue.component('app-edit-lava-status', EditLavaStatus);
Vue.component('app-edit-shards', EditShards);

import Vue from 'vue'

// Imports
import RectangleHero from '../components/heroes/RectangleHero.vue'
import RoundHero from '../components/heroes/RoundHero.vue'
import NewHero from '../components/heroes/NewHero.vue'
import AddHeroCards from '../components/heroes/new-hero-components/AddHeroCards.vue'
import AddHeroDropdown from '../components/heroes/new-hero-components/AddHeroDropdown.vue'


// Components
Vue.component('app-rectangle-hero', RectangleHero);
Vue.component('app-round-hero', RoundHero);
Vue.component('app-new-hero', NewHero);
Vue.component('app-add-hero-cards', AddHeroCards);
Vue.component('app-add-hero-dropdown', AddHeroDropdown);

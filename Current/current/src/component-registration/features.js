import Vue from 'vue'

// Imports
import SearchBar from '../components/features/SearchBar.vue'
import Filter from '../components/features/Filter.vue'
import SortBy from '../components/features/SortBy.vue'
import PlatformFilter from '../components/features/filters/PlatformFilter.vue'
import LavaFilter from '../components/features/filters/LavaFilter.vue'
import NeedGuildFilter from '../components/features/filters/NeedGuildFilter.vue'

//Components
Vue.component('app-search-bar', SearchBar);
Vue.component('app-filter', Filter);
Vue.component('app-sort-by', SortBy);
Vue.component('app-platform-filter', PlatformFilter);
Vue.component('app-lava-filter', LavaFilter);
Vue.component('app-need-guild-filter', NeedGuildFilter);

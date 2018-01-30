// Admin
import AdminMain from './components/adminPanel/adminMain.vue'

// Global
import Home from './components/home/Home.vue'
import Signup from './components/Signup.vue'

// Players
import Players from './components/players/Players.vue'
import PlayerProfile from './components/players/PlayerProfile.vue'

// Guilds
import Guilds from './components/guilds/Guilds.vue'
import GuildProfile from './components/guilds/GuildProfile.vue'

export const routes = [
  // Admin Routes
  {path: '/AdminMain', component: AdminMain},

  // User Routes
  {path: '/Home', component: Home},
  {path: '/Signup', component: Signup},
  {path: '/Players', component: Players},
  {path: '/User/:Username', component: PlayerProfile},
  {path: '/Guilds', component: Guilds},
  {path: '/Guild/:guildName', component: GuildProfile},
];

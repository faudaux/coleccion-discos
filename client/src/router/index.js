import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'
import CollectionView from '../views/CollectionView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: UsersView,
    children: [
      {
        path: '/user/:user_id',
        component: CollectionView
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

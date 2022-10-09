import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Test = () => import('@/views/mainfun/Test')
const Test2 = () => import('@/views/mainfun/Test2')
const Test3 = () => import('@/views/mainfun/Test3')
const Test4 = () => import('@/views/mainfun/Test4')

const NotFound = () => import('@/views/NotFound.vue')
const routes = [
  {
    path: '/',
    redirect: '/test'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[{
      path:'/test',
      name:'test',
      component:Test
    },{
      path:'/test2',
      name:'test2',
      component:Test2
    },{
      path:'/test3',
      name:'test3',
      component:Test3
    },{
      path:'/test4',
      name:'test4',
      component:Test4
    }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router

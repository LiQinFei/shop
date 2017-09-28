import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/home/index.vue'

const homeCom = resolve => require(['@/components/home/homeCom.vue'], resolve)
const About = resolve => require(['@/components/home/about/about.vue'], resolve)
const homeIndex = resolve => require(['@/components/home/homeIndex/homeIndex.vue'], resolve)



Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'homeCom',
        component: homeCom,
        children: [{
                path: 'index',
                name: 'homeIndex',
                component: homeIndex
            }, {
                path: 'about',
                name: 'about',
                component: About
            }

        ]
    }]
})
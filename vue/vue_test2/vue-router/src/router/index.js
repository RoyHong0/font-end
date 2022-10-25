import VueRouter from 'vue-router'
import AboutOne from '../pages/AboutOne'
import HomeOne from '../pages/HomeOne'
import MessageOne from '../pages/MessageOne'
import NewsOne from '../pages/NewsOne'
import DetailOne from '../pages/DetailOne'

const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: AboutOne,
        },
        {
            name: 'zuye',
            path: '/home',
            component: HomeOne,
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: NewsOne
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: MessageOne,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: DetailOne,
                            // props:{a:1, b:'hello'}
                            // props:true
                            props({ params: { id, title } }) {
                                return {
                                    id: id,
                                    title: title
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to, from);
    if (to.path === './home/news' || to.path === './home/message') {
        next()
    } else {
        next()
    }
    // next()
})

export default router
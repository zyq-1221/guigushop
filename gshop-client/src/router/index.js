import Vue from 'vue'
import VueRouter from 'vue-router'


// import Msite from '../pages/Msite/Msite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

//路由懒加载
const Msite=()=> import('../pages/Msite/Msite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order=()=>import('../pages/Order/Order.vue')
const Profile=()=>import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'



//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
	//配置所有路由
	routes: [
		{
		path:'/msite',
		component: Msite,//返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在第一次请求路由路径时才会执行
			meta: {
			showFooter:true
		}
	},
	{
		path:'/search',
		component: Search,
			meta: {
			showFooter:true
		}
		},
	{
		path:'/order',
		component: Order,
			meta: {
			showFooter:true
		}
		},
	{
		path:'/profile',
		component: Profile,
			meta: {
			showFooter:true
		}
		},
	{
		path:'/login',
		component: Login
		},
	{
			path: '/',
			redirect:'/msite'
		},
		{
		path:'/shop',
		component: Shop,
		children:[
				{
		path:'/shop/goods',
		component: ShopGoods
			},
				{
		path:'/shop/ratings',
		component: ShopRatings
			},
				{
		path:'/shop/info',
		component: ShopInfo
			},	
	            {
			path: '',
			redirect:'/shop/goods'
		}
		]
		}
	]
})
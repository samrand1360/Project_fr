import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { LoadingBar } from 'quasar'
import { api } from "boot/axios";
import store from 'src/store';


/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)

  })



  Router.beforeEach(async(to, from, next) => {

    if ( to.name !== 'Login') {
      try {
        const user_response = await api
          .get("usersapi/user")
          .then(async (user_response) => {
            await store.dispatch("setUser", user_response.data);
            await store.dispatch("setIsLogged", true);
          })
          .catch(function (error) {
            store.dispatch("setIsLogged", false);

          });
      } catch (error) {
         store.dispatch("setIsLogged", false);
      }



    }else {
      LoadingBar.stop()
    }






    const loggedIn =  store.state.isLogged
    if (to.matched.some(record => record.meta.requiresAuth) && ((!loggedIn && to.name !== 'Login') || (!loggedIn))) {
      LoadingBar.start()
      next({
        name: "Login"
        ,query: { redirect: to.fullPath }
      });
    } else {
      if (loggedIn && to.name == 'Login') {


      next(false);

    } else {
      LoadingBar.start()
      next()
    }
  }
  });


  Router.afterEach(() => {
    LoadingBar.stop()
  })



  return Router
})




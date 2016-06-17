export default function(router){

  // set the default router-view


  router.map({
    '*':{
      component: require('../components/about/index.vue')
    },
    '/': {
      component: require('../components/inbox/index.vue')
    },
    '/inbox' : {
      component: require('../components/inbox/message.vue')
    },

    '/user/:userId': {
      component: require('../components/user/index.vue'),
      subRoutes: {
        // matches "/user/:userId/posts"
        'posts': {
          component: require('../components/user/posts.vue')
        },
        // matches "/user/:userId/settings"
        'settings': {
          component: require('../components/user/settings.vue')
        }
      }
    },




  })



  router.redirect({
    '/postlist': '/postlist/test',
  })


}

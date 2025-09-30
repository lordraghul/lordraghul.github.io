// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  } ,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true } ,
  app: {
    head: {
      title: 'lordrag',
      meta: [
        { name: 'description', content: 'Description de mon projet' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})

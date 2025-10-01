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
    baseURL: '/',
    head: {
      title: 'lordraghul - Linktree',
      meta: [
        { name: 'description', content: 'Linktree de lordraghul - Data Engineer & ML Engineer' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})

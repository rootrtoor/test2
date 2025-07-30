import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        bucket: './bucket.html',
        cart: './cart.html',
        checkout: './checkout.html',
        follow: './follow.html',
        friends: './friends.html',
        login: './login.html',
        menu: './menu.html',
        order: './order.html',
        posts: './posts.html',
        product: './product.html',
        profile: './profile.html',
        search: './search.html',
        send: './send.html',
        share: './share.html',
        social: './social.html',
        wallet: './wallet.html',
        welcome: './welcome.html'
      }
    }
  }
});
<template>
  <body class="bg-light-color scroll-smooth">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </body>
</template>

<script setup>
useHead({
  meta: [
    {
      name: 'google-site-verification',
      content: 'zc_i19IX1q3Aq2YqC0BsR329dFCr-S2Uu3EhecI1o70' // Ton code de vérification Search Console
    }
  ],
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-0X03W5CCH6',
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0X03W5CCH6', { anonymize_ip: true, send_page_view: true });
      `,
      type: 'text/javascript',
    }
  ]
})
</script>
<i18n lang="yaml">
es:
  title: "Blog"
  description: "Contenido especializado para aparender lo referente a la tecnologia Blockchain."
  image: "https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_960_720.jpg"
en:
  title: "Blog"
  description: "Specialized content to learn about Blockchain technology."
  image: "https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_960_720.jpg"
</i18n>
<template lang="pug">
  v-container
    section.post-container
      CardPost(
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
      )
</template>
<script>
export default {
  name: 'Posts',
  async asyncData({ app, error, store }) {
    const posts = await app.$content(app.i18n.locale + '/blog')
      .where({
        published: true
      })
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Página no encontrada' })
      })

    return {
      posts: posts.map((post) => ({
      ...post,
      path: post.path.replace('/es', ''),
    }))
    }
  },
  head() {
    return {
      title: this.$t('title'),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t('description'),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t('title'),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t('description'),
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "page",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://lucanos.co${this.$route.fullPath}`,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: `https://lucanos.co${this.$route.fullPath}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t('title'),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t('description'),
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.$t('image'),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.$t('image'),
        }
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://lucanos.co${this.$route.fullPath}`,
        },
      ],
    };
  }
}
</script>
<style>
  .post-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 290px);
    justify-content: center;
  }
</style>

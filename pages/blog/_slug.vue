<template lang="pug">
  v-row( justify="center")
    v-col( cols="12" sm="10" md="7")
      header
        h1.display-2.mb-4 {{post.title}}
      nuxt-content(:document="post")
</template>
<script>
export default {
  name: 'Post',
  async asyncData ({ app, params }) {
    const post = await app.$content(app.i18n.locale + '/blog', params.slug).fetch()
    return {
      post
    }
  },
//   head() {
//     return {
//       title: this.post.title,
//       meta: [
//         {
//           hid: "description",
//           name: "description",
//           content: this.article.description,
//         },
//         {
//           hid: "og:title",
//           name: "og:title",
//           content: this.article.title,
//         },
//         {
//           hid: "og:description",
//           name: "og:description",
//           content: this.article.description,
//         },
//         {
//           hid: "og:type",
//           property: "og:type",
//           content: "article",
//         },
//         {
//           hid: "og:url",
//           property: "og:url",
//           content: `https://bobross.com/articles/${this.$route.params.slug}`,
//         },
//         {
//           hid: "twitter:url",
//           name: "twitter:url",
//           content: `https://bobross.com/articles/${this.$route.params.slug}`,
//         },
//         {
//           hid: "twitter:title",
//           name: "twitter:title",
//           content: this.article.title,
//         },
//         {
//           hid: "twitter:description",
//           name: "twitter:description",
//           content: this.article.description,
//         },
//         {
//           hid: "twitter:image",
//           name: "twitter:image",
//           content: this.article.image,
//         },
//         {
//           hid: "og:image",
//           property: "og:image",
//           content: this.article.image,
//         },
//         {
//           property: "article:published_time",
//           content: this.article.createdAt,
//         },
//         {
//           property: "article:modified_time",
//           content: this.article.updatedAt,
//         },
//         {
//           property: "article:tag",
//           content: this.article.tags ? this.article.tags.toString() : "",
//         },
//         { name: "twitter:label1", content: "Written by" },
//         { name: "twitter:data1", content: "Bob Ross" },
//         { name: "twitter:label2", content: "Filed under" },
//         {
//           name: "twitter:data2",
//           content: this.article.tags ? this.article.tags.toString() : "",
//         },
//       ],
//       link: [
//         {
//           hid: "canonical",
//           rel: "canonical",
//           href: `https://bobross.com/articles/${this.$route.params.slug}`,
//         },
//       ],
//     };
//   }
}
</script>

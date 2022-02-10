<i18n lang="yaml">
es:
  posted-on: "Publicado el"
en:
  posted-on: "Posted-on"
</i18n>
<template lang="pug">
  v-row( justify="center")
    v-col( cols="12" sm="10" md="7")
      header
        v-img.my-4(
          :src="post.image"
        )
      section.px-4
        h1.display-2.my-10 {{post.title}}
        h2.text-subtitle-1.text--secondary {{$t('posted-on')}} {{ new Date(post.createdAt).toLocaleDateString()}}
        nuxt-content.body-1(:document="post")
</template>
<script>
export default {
  name: 'Post',
  async asyncData ({ axios, app, params }) {
    const post = await app.$content(app.i18n.locale + '/blog', params.slug).fetch()

    return {
      post
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.post.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.post.description,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://lucanos.co/blog/${this.$route.params.slug}`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${this.post.image}`,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: `https://lucanos.co/blog/${this.$route.params.slug}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.post.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.post.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${this.post.image}`,
        },
        {
          property: "article:published_time",
          content: this.post.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.post.updatedAt,
        },
        {
          property: "article:tag",
          content: this.post.tags ? this.post.tags.toString() : "",
        },
        // { name: "twitter:label1", content: "Written by" },
        // { name: "twitter:data1", content: "Bob Ross" },
        // { name: "twitter:label2", content: "Filed under" },
        // {
        //   name: "twitter:data2",
        //   content: this.post.tags ? this.post.tags.toString() : "",
        // },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://lucanos.co/blog/${this.$route.params.slug}`,
        },
      ],
    };
  }
}
</script>

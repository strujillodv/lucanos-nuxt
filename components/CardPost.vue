<i18n lang="yaml">
es:
  read-more: "Leer Más"
en:
  read-more: "Read More"
</i18n>
<template lang="pug">
  v-hover(
      v-slot="{ hover }"
    )
      v-card.transitions(
        v-for="(post, index) in posts"
        :key="index"
        :elevation="hover ? 6 : 0"
        nuxt
        :to="post.path"
      )
        v-img(
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="150px"
        )
        v-container
          v-card-title(
            class="truncate-overflow title-truncate pa-0 mb-4"
          ) {{post.title}}
          v-card-subtitle(
            class="truncate-overflow pa-0"
          ) {{post.description}}
        v-card-actions.justify-center
          nuxt-link(
            :to="post.path"
          ) {{$t('read-more')}}
</template>
<script>
export default {
  name: 'CardPost',
  props: {
    posts: {
      type: Array,
      default() {
        return []
      },
      require: true
    }
  }
}
</script>
<style>
  .truncate-overflow {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title-truncate {
    -webkit-line-clamp: 2;
  }
  .transitions {
    transition: all .25s ease;
  }
</style>

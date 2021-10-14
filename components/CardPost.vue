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
    v-card.transitions.ma-2.pt-0(
      :elevation="hover ? 6 : 0"
      nuxt
      :to="post.path"
      max-width="280"
    )
      v-img(
        :src="post.image"
        height="150px"
      )
      v-container
        v-card-title(
          style="word-break: normal;"
          class="truncate-overflow title-truncate pa-0 mb-4"
        ) {{post.title}}
        v-card-subtitle(
          style="word-break: normal;"
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
    post: {
      type: Object,
      default() {
        return {}
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

<i18n lang="yaml">
es:
  read-more: "Leer Más"
  posted-on: "Publicado el"
en:
  read-more: "Read More"
  posted-on: "Posted-on"
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
          class="truncate-overflow title-truncate pa-0 mb-4"
        ) {{post.title}}
        v-card-subtitle(
          class="truncate-overflow pa-0"
        )
          span.text--secondary {{$t('posted-on')}} {{ new Date(post.createdAt).toLocaleDateString()}}
          br
          | {{post.description}}
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
    word-break: normal;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title-truncate {
    -webkit-line-clamp: 2;
    min-height: 64px;
  }
  .transitions {
    transition: all .25s ease;
  }
</style>

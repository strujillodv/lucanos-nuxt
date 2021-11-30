<template lang="pug">
  v-card(
    elevation="0"
    max-width="400"
    width="100%"
  )
    v-card-text
      v-form(
        action="https://lucanos.us5.list-manage.com/subscribe/post?u=6aad02dd5cccc2eba44ee0c77&amp;id=19f558926d"
        method="post" id="mc-embedded-subscribe-form"
        target="_blank"
        novalidate
        color="primary"
      )
        v-text-field(
          name="FNAME"
          label="Nombre"
          id="mce-LNAME"
          required
        )

        v-text-field(
          name="LNAME"
          label="Apellido"
          id="mce-FNAME"
          required
        )

        v-text-field(
          name="EMAIL"
          label="correo:"
          id="mce-EMAIL"
          required
        )

        v-btn(
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          color="primary"
        ) Suscribete

</template>

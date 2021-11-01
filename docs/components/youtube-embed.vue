<template>
  <div class="embed">
    <iframe
      :src="`https://www.youtube.com/embed/${youtube_id}`"
      width="100%"
      height="400px"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export interface IEmbedProps {
  youtube_id: string;
}

export default defineComponent({
  props: ["youtube_id"],
  setup(props: IEmbedProps) {
    const { youtube_id } = props;
  },
});
</script>
<style scoped>
.embed {
  position: relative;
  margin: 2rem 0;
}
.embed iframe {
  border-radius: 1rem;
}
</style>
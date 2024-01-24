<template>
    <h3>Choose the cap color</h3>
 <div class="colors-top">
    <div v-for="(color, index) in colorOptions" :key="index" class="color-square" 
    :style="{ backgroundColor: color }" 
    @click="selezionaColoreTop(color)"></div>
  </div>
   
</template>

<script>
export default {
    props: {
        cambiaColoreTop: Function,
    },
  data() {
    return {
      colorOptions: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', 
      '#dc1414', '#74db16', '#16DBC6', '#dc9d2f', '#74db16', ],
    };
  },

  methods: {
    selezionaColoreTop(colore) {
        this.cambiaColoreTop(colore);
    }
  }
};
</script>

<style scoped></style>
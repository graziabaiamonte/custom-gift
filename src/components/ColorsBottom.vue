<template>
    <h3>Choose the bottom color</h3>
 <div class="colors-bottom">
    <div v-for="(color, index) in colorOptions" :key="index" class="color-square" :style="{ backgroundColor: color }" @click="selezionaColoreBottom(color)"></div>
  </div>
   
</template>

<script>
export default {
    props: {
        cambiaColoreBottom: Function,
    },
  data() {
    return {
      colorOptions: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', 
      '#dc1414', '#74db16', '#16DBC6', '#dc9d2f', '#74db16',],
    };
  },

  methods: {
    selezionaColoreBottom(colore) {
        this.cambiaColoreBottom(colore);
    }
  }
  
};
</script>

<style scoped></style>
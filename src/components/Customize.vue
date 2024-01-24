<template>
    <div class="boxGenerale" >

        <div class="product">
            <img src="../assets/body.png" class="imgStart" alt="">
            <img src="../assets/top.png" class="imgTop" alt="">
            <img src="../assets/bodyTransparent.png" class="imgBody" alt="">
            <img src="../assets/bodyTransparent.png" class="imgBottom" alt="">
            <div class="colorTop" :style="{ backgroundColor: selectedTopColor }"></div>
            <div class="colorBody" :style="{ backgroundColor: selectedBodyColor }"></div>
            <div class="colorBottom" :style="{ backgroundColor: selectedBottomColor }"></div>
        </div>
    
        <div class="boxChangeColor">
            <ColorsTop v-if="mostraColorsTopFlag" :cambiaColoreTop="cambiaColoreTop"></ColorsTop>
            <ColorsBody v-if="mostraColorsBodyFlag" :cambiaColoreBody="cambiaColoreBody"></ColorsBody>
            <ColorsBottom v-if="mostraColorsBottomFlag" :cambiaColoreBottom="cambiaColoreBottom"></ColorsBottom>
            <div class="boxButton">
                <button class="startBtn" v-if="showColorTop" @click="mostraColorsTop">Start</button>
                <button v-if="showColorBody" @click="mostraColorsBody">Change Body</button>
                <button v-if="showAvantiSottoButton" @click="mostraColorsBottom">Change Bottom</button>
                <button v-if="showBackButton" @click="mostraColorsTop">Back</button>
            </div>
            <router-link v-if="completedCustomize" to="/completed"><button class="sendBtn">Send</button></router-link>
            
        </div>
    </div>
</template>

<script >
import ColorsBody from './ColorsBody.vue'
import ColorsBottom from './ColorsBottom.vue'
import ColorsTop from './ColorsTop.vue'

export default {
    components: {
        ColorsBody,
        ColorsBottom,
        ColorsTop
    },
    data() {
        return {
            colorOptions: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff',
             '#16DBC6' ],
            selectedColor: '#ff0000',
            selectedBodyColor: '',
            selectedBottomColor: '',
            selectedTopColor: '',
            mostraColorsBottomFlag: false,
            mostraColorsTopFlag: false,
            mostraColorsBodyFlag: false,
            showAvantiSottoButton: false,
            showColorBody: false,
            showColorTop: true,
            showBackButton: false,
            completedCustomize: false,
        };
    },

    methods: {
        mostraColors(){
            this.mostraColorsBodyFlag = true
            this.mostraColorsBottomFlag = false;
            this.mostraColorsTopFlag = false;
            this.showAvantiSottoButton = false;
            this.showColorBody = false;
        },

        mostraColorsBody(){
            this.mostraColorsBottomFlag = false;
            this.mostraColorsTopFlag = false;
            this.showAvantiSottoButton = true;
            this.mostraColorsBodyFlag = true;
            this.showColorBody = false;
            this.showBackButton = true;
        },

        mostraColorsBottom(){
            this.mostraColorsBottomFlag = true;
            this.mostraColorsBodyFlag = false;
            this.mostraColorsTopFlag = false;
            this.showAvantiSottoButton = false;
            this.showColorBody = false;
        },

        mostraColorsTop(){
            this.mostraColorsTopFlag = true;
            this.mostraColorsBodyFlag = false;
            this.showAvantiSottoButton = false;
            this.mostraColorsBottomFlag = false;
            this.showColorBody = false;
            this.showBackButton = false;
        },
        cambiaColoreBody(colore) {
            this.selectedBodyColor = colore;
            this.showAvantiSottoButton =true;
            this.showColorBody = false;
        },

        cambiaColoreTop(colore) {
            this.selectedTopColor = colore;
            this.showAvantiSottoButton = false;
            this.showColorBody = true;
            this.showColorTop = false;
        },
        cambiaColoreBottom(colore) {
            this.selectedBottomColor = colore;
            this.completedCustomize = true;
        }
    },
}
</script>

<style scoped></style>
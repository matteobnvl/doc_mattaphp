<template>
    <textarea v-model="content" :id="this.el"></textarea>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/yonce.css'
import 'codemirror/mode/php/php.js'

export default {
    name: 'BlocCodeComponents',
    props: {
        code: String,
        el: String
    },
    data() {
        return {
            content: this.code
        }
    },
    mounted() {
        const isMobile = window.innerWidth < 800; // Vérifie si la largeur de l'écran est inférieure à 800px

        const editorWidth = isMobile ? '100%' : '75%';
        CodeMirror.fromTextArea(document.getElementById(this.el), {
            lineNumbers: true,
            theme: 'yonce',
            mode: 'php',
            readOnly: "nocursor",
            smartIndent: true
        }).setSize(editorWidth, 'auto')
    }
}
</script>

<style>
textarea{
    border-radius: 10px;
}
</style>
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
        CodeMirror.fromTextArea(document.getElementById(this.el), {
            lineNumbers: true,
            theme: 'yonce',
            mode: 'php',
            readOnly: "nocursor",
            smartIndent: true
        }).setSize('75%', 'auto')
    }
}
</script>

<style>
textarea{
    border-radius: 10px;
    
}
</style>
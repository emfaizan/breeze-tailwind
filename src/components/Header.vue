<template>
    <!--HEADER-->

    <header class="py-4">
        <a href="/">
            <img src="./../assets/logo.png" class="m-auto md:w-auto w-20" alt="">
        </a>
    </header>

    <!--HEADER-->
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>
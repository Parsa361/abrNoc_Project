<script setup>
import { ref } from 'vue';
const props = defineProps(['quantity']);
const emit = defineEmits(['quantity-update']);

const propQuantity = ref(props.quantity);

const incrementQuantity = () => {
    propQuantity.value += 1;
    emit('quantity-update', propQuantity.value);
};

const decrementQuantity = () => {
    if (propQuantity.value > 1) {
        propQuantity.value--;
        emit('quantity-update', propQuantity.value);
    }
};
</script>

        
<template>
    <div
        class="tw-w-[243px] tw-h-10 tw-flex tw-items-center tw-justify-between tw-mb-6 tw-border tw-border-greyLighten tw-rounded">
        <div class="tw-w-12 tw-h-10 tw-border-r tw-border-greyLighten tw-flex tw-items-center tw-justify-center tw-cursor-pointer"
            :class="{ 'tw-cursor-not-allowed': quantity === 1 }" @click="decrementQuantity">
            <VIcon color="#00000042">mdi-minus</VIcon>
        </div>
        <div>
            {{ propQuantity }}
        </div>
        <div class="tw-w-12 tw-h-10 tw-border-l tw-border-greyLighten tw-flex tw-items-center tw-justify-center tw-cursor-pointer"
            @click="incrementQuantity">
            <VIcon color="#757575">mdi-plus</VIcon>
        </div>
    </div>
</template>

<style scoped></style>
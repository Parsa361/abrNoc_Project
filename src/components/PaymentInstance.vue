<script setup>

const props = defineProps(['quantity']);
const emit = defineEmits(['quantity-update']);

const incrementQuantity = () => {
    emit('quantity-update', props.quantity + 1);
};

const decrementQuantity = () => {
    if (props.quantity > 1) {
        emit('quantity-update', props.quantity - 1);
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
            {{ quantity }}
        </div>
        <div class="tw-w-12 tw-h-10 tw-border-l tw-border-greyLighten tw-flex tw-items-center tw-justify-center tw-cursor-pointer"
            @click="incrementQuantity">
            <VIcon color="#757575">mdi-plus</VIcon>
        </div>
    </div>
</template>

<style scoped></style>
<script setup>
import { ref, onMounted } from 'vue';
import { useApiStore } from '../stores';
import { storeToRefs } from 'pinia';

const emit = defineEmits(['selected-region']);

const useApi = useApiStore();
const { regions } = storeToRefs(useApi);
let selectedRegion = ref('US');

const selectRegion = (region) => {
    selectedRegion.value = region;
    // add the region name to the pinia virtualMachineInfo state
    useApi.virtualMachineInfo.region = region;
    emit('selected-region', region);
};
const isSelected = (region) => {
    return region === selectedRegion.value;
};

onMounted(async () => {
    await useApi.handleRegions();
    useApi.virtualMachineInfo.region = selectedRegion.value;
    emit('selected-region', selectedRegion.value);
});
</script>
        
<template>
    <div class="tw-px-8 tw-pt-8">
        <p class="tw-pb-4 h6">Region</p>
        <!-- Regions container-->
        <div class="tw-flex tw-flex-wrap tw-gap-5">
            <!-- region -->
            <div v-for="region in regions" :key="region.name" @click="selectRegion(region.name)"
                class="tw-w-[226px] tw-h-[72px] tw-flex tw-items-center tw-py-4 tw-ps-4 tw-border-2 tw-rounded tw-cursor-pointer body-1"
                :class="[isSelected(region.name) ? 'selected' : '']">
                <img :src="`/images/${region.name}.png`" alt="german" class="tw-h-10 tw-w-10 tw-rounded-[50%]">
                <span class="tw-ps-4">{{ region.name }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
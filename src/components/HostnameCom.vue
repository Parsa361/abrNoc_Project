<script setup>
import { ref, watch, nextTick } from 'vue';
import { useApiStore } from '../stores';
import { storeToRefs } from 'pinia';

const useApi = useApiStore();
const { virtualMachineInfo } = storeToRefs(useApi);

const props = defineProps(['hostnameNumbers']);

const hostName = ref('');
const selectedIndex = ref(-1);

const setHostname = (index) => {
    selectedIndex.value = index;
    hostName.value = `Name ${index}`;
    useApi.virtualMachineInfo.host_name = hostName.value;
};


watch(
    () => props.hostnameNumbers,
    () => {
        // Reset the selected index when hostnameNumbers updates
        selectedIndex.value = -1;
        hostName.value = '';
        delete virtualMachineInfo.value.host_name;
        nextTick(() => {
            // Ensure that the DOM is updated before setting the hostname
            if (selectedIndex.value !== -1) {
                setHostname(selectedIndex.value);
            }
        });
    }
);

</script>
        
<template>
    <div class="tw-px-8 tw-mt-14 tw-pb-8">
        <p class="tw-pb-4 h6">Hostname</p>

        <div class="tw-flex tw-flex-wrap tw-gap-x-5 tw-gap-y-4">
            <div v-for="index in hostnameNumbers + 1" :key="index"
                class="tw-w-[349px] tw-h-10 tw-py-2.5 tw-ps-4 tw-border tw-rounded body-2"
                :class="selectedIndex === index ? 'selected' : 'tw-border-greyLighten'" @click="setHostname(index)">
                {{ `Name ${index}` }}
            </div>
        </div>
    </div>
</template>

<style scoped></style>
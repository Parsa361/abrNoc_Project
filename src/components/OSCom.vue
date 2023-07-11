<script setup>
import { onMounted, ref } from 'vue';
import { useApiStore } from '../stores';
import { storeToRefs } from 'pinia';

const useApi = useApiStore();
const { operatingSystems, virtualMachineInfo } = storeToRefs(useApi);

const formattedOSResponse = ref({});

const selectedOS = ref({ family: '', version: '' });
const selectedIndex = ref(-1);

const selectCard = (family, index, item) => {
    selectedOS.value.family = family;
    selectedOS.value.version = item;
    selectedIndex.value = index;
    useApi.virtualMachineInfo.OS = selectedOS.value;
};
// This function do format the response and store different versions of OSs in unique family
const formatOSResponse = (response) => {
    response.forEach(item => {
        const { family, version } = item;
        if (formattedOSResponse.value[family]) {
            formattedOSResponse.value[family].push(version);
        } else {
            formattedOSResponse.value[family] = [version];
        }
    });
};
onMounted(async () => {
    try {
        await useApi.handleOS();
        const response = operatingSystems.value;
        formatOSResponse(response);
    } catch (error) {
        console.error('handle Os error: ', error);
    }
});
</script>

<template>
    <div class="tw-px-8 tw-mt-14">
        <p class="tw-pb-4 h6">Opertating System</p>
        <div class="tw-flex tw-flex-wrap tw-gap-x-5 tw-gap-y-6">
            <!-- card div -->
            <div v-for="(versions, family, index) in formattedOSResponse" :key="index"
                class="tw-w-[226px] tw-h-[133px] tw-border-2 tw-rounded tw-p-4 body-1"
                :class="selectedIndex === index ? 'selected' : ''">
                <div class="tw-flex tw-items-center tw-mb-4">
                    <img :src="`/images/${family}.png`" :alt="family" class="tw-w-11 tw-h-11 tw-mr-5">
                    <p>{{ family }}</p>
                </div>
                <VSelect label="Select version" :items="versions" variant="outlined" density="compact"
                    @update:modelValue="selectCard(family, index, $event)"></VSelect>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
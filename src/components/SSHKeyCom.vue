<script setup>
import { ref } from 'vue';
import { useApiStore } from '../stores';
import { storeToRefs } from 'pinia';

const emit = defineEmits(['hostname-numbers']);
const useApi = useApiStore();
const { virtualMachineInfo } = storeToRefs(useApi);

const selectedKey = ref('');
// default ssh key numbers
const keyNumbers = ref(3);

// each user only can check a single checkbox
const handleCheckboxChange = (event, n) => {
    let keyName = `Key name ${n}`;
    if (event.target.checked) {
        selectedKey.value = keyName;
        useApi.virtualMachineInfo.ssh_key = keyName;
        emit('hostname-numbers', n);
    } else {
        selectedKey.value = '';
        delete virtualMachineInfo.value.ssh_key;
        emit('hostname-numbers', 0);
    }
};


const addNewSSHKey = () => {
    keyNumbers.value += 1;
};
</script>

<template>
    <div v-if="virtualMachineInfo && virtualMachineInfo.user_info" class="tw-mt-14 tw-px-8">
        <div class="tw-pb-4">
            <span class="h6">SSH Key </span>
            <span class="tw-text-[#9E9E9E]">(optional)</span>
        </div>
        <div class="tw-flex tw-flex-wrap tw-gap-5">
            <!-- Add New -->
            <div @click="addNewSSHKey"
                class="tw-w-[226px] tw-h-14 tw-flex tw-items-center tw-py-4 tw-ps-5 tw-cursor-pointer tw-border tw-border-greyLighten tw-rounded">
                <VIcon>mdi-plus-circle-outline</VIcon>
                <p class="tw-ps-2">Add New</p>
            </div>
            <!-- Key names -->
            <div v-for="n in keyNumbers" :key="n"
                class="tw-w-[226px] tw-h-14 tw-flex tw-py-4 tw-ps-5 tw-border tw-border-greyLighten tw-rounded body-1">

                <div class="tw-mr-4">
                    <input type="checkbox" :value="`Key name ${n}`" :checked="selectedKey === `Key name ${n}`"
                        @change="handleCheckboxChange($event, n)">
                </div>
                <p>Key name {{ n }}</p>
                <div class="tw-ml-auto">
                    <VBtn density="compact" flat rounded="circle">
                        <VIcon>mdi-alert-circle-outline</VIcon>
                        <VTooltip activator="parent" location="bottom">
                            ...={{
                                virtualMachineInfo.user_info.first_name }}{{ virtualMachineInfo.user_info.last_name }}@hostname
                        </VTooltip>
                    </VBtn>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>
<script setup>
import { ref, watchEffect } from 'vue';
import { useApiStore } from '../stores';
import { storeToRefs } from 'pinia';

const useApi = useApiStore();
const { virtualMachineInfo, selectedRegionHasPlans } = storeToRefs(useApi);

const emit = defineEmits(['show-alert', 'alert-type', 'alert-message']);

const quantity = ref(1);
const enableIPv4 = ref(false);
const deployButtonDisabled = ref(true);
const showAlert = ref(false);
const alertType = ref('');
const alertMessage = ref('');


const incrementQuantity = () => {
    quantity.value++;
};

const decrementQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const handleIPv4Change = (event) => {
    enableIPv4.value = event.target.checked;
    useApi.virtualMachineInfo.enable_ipv4 = enableIPv4.value;
};

const emitAlerts = () => {
    emit('show-alert', showAlert.value);
    emit('alert-type', alertType.value);
    emit('alert-message', alertMessage.value);
};

const handleDeploy = () => {
    // Check for required data
    if (!selectedRegionHasPlans.value) {
        showAlert.value = true;
        alertType.value = 'warning';
        alertMessage.value = 'Plan is not available for selected region.';
        emitAlerts();
    }
    else if (!virtualMachineInfo.value.host_name) {
        showAlert.value = true;
        alertType.value = 'error';
        alertMessage.value = 'Please enter hostname.';
        emitAlerts();
    } else if (!virtualMachineInfo.value.ssh_key) {
        showAlert.value = true;
        alertType.value = 'error';
        alertMessage.value = 'Invalid SSH key.';
        emitAlerts();
    }
    else {
        showAlert.value = false;
        alertMessage.value = '';
        alertType.value = '';
        useApi.virtualMachineInfo.quantity = quantity.value;
        emitAlerts();
        console.log(virtualMachineInfo.value);
    }
};

// Watch for changes in required data
watchEffect(() => {
    deployButtonDisabled.value = !(
        virtualMachineInfo.value.selected_plan &&
        virtualMachineInfo.value.region &&
        virtualMachineInfo.value.OS &&
        virtualMachineInfo.value.user_info
    );
});
</script>
        
<template>
    <div class="tw-px-5 tw-py-8">
        <p class="tw-mb-1 body-2">Instance quantity:</p>
        <!-- instance quantity frame -->
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

        <div class="tw-flex tw-items-center">
            <input v-model="enableIPv4" @change="handleIPv4Change" type="checkbox">
            <p class="tw-ml-4 body-1">Enable IPv4</p>
        </div>

        <!-- horizontal line -->
        <div class="tw-border-b tw-text-greyLightenLine tw-my-6"></div>

        <!-- Total money -->
        <div class="tw-flex tw-items-center tw-justify-between tw-mb-7">
            <p class="h6">Total</p>
            <div>
                <span class="tw-text-[24px] tw-text-textPrimary tw-font-roboto tw-font-medium">$ 57.95 </span>
                <span class="tw-text-[#757575]">/month</span>
            </div>
        </div>

        <button class="tw-h-10 tw-w-full tw-text-center tw-rounded tw-text-[14px] tw-font-roboto tw-font-medium"
            :class="deployButtonDisabled ? 'tw-cursor-not-allowed tw-text-[#00000042] tw-bg-[#0000001F]' : 'tw-cursor-pointer tw-bg-greenBtn tw-text-white'"
            @click="handleDeploy" :disabled="deployButtonDisabled">
            DEPLOY NOW
        </button>


    </div>
</template>

<style scoped></style>
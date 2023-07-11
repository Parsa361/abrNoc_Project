<script setup>
import RegionsCom from './RegionsCom.vue';
import PlansCom from './PlansCom.vue';
import OSCom from './OSCom.vue';
import SSHKeyCom from './SSHKeyCom.vue';
import HostnameCom from './HostnameCom.vue';
import { ref } from 'vue';

const selectedRegion = ref('');
const hostnameNumbers = ref(0);

const selectRegion = (regionName) => {
    selectedRegion.value = regionName;
};

const setHostnameNumbers = (n) => {
    hostnameNumbers.value = n;
};
</script>
        
<template>
    <div class="tw-mb-11">
        <!-- Regions -->
        <RegionsCom @selected-region="selectRegion" />

        <!-- Plans -->
        <PlansCom :selectedRegion="selectedRegion" v-if="selectedRegion" :key="selectedRegion" />

        <!-- Opertating system -->
        <OSCom />

        <SSHKeyCom @hostname-numbers="setHostnameNumbers" />

        <HostnameCom :hostnameNumbers="hostnameNumbers" />
    </div>
</template>

<style scoped></style>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useApiStore } from '../stores';
import { storeToRefs } from 'pinia';

const props = defineProps(['selectedRegion']);

const useApi = useApiStore();
const { plansByRegion, virtualMachineInfo } = storeToRefs(useApi);

const headers = [
    { title: 'CPU', align: 'start', key: 'cpu_cores' },
    { title: 'Memory (GB)', align: 'end', key: 'memory_size_in_GB' },
    { title: 'Connection Speed (Mbps)', align: 'end', key: 'connection_up_bound_speed' },
    { title: 'Monthly Price', align: 'end', key: 'monthly_price' },
    { title: 'Hourly Price', align: 'end', key: 'hourly_price' },
];

const plans = ref([]);

const formattedPlans = computed(() => {
    return plans.value.map(plan => {
        return {
            ...plan,
            cpu_cores: `${plan.cpu_cores} CPU`,
            memory_size_in_GB: `${plan.memory_size_in_GB} GB`,
            connection_up_bound_speed: `${plan.connection_up_bound_speed} Mbps`,
            monthly_price: `$ ${plan.monthly_price}`,
            hourly_price: `$ ${plan.hourly_price}`,
        };
    });
});

const selectedPlan = ref(null);

const selectPlan = (item) => {
    console.log(item[0].raw);
    if (selectedPlan.value === item[0].raw) {
        selectedPlan.value = null;
        delete virtualMachineInfo.value.selected_plan;
    } else {
        selectedPlan.value = item[0].raw;
        virtualMachineInfo.value.selected_plan = {
            id: item[0].raw.id,
            region_id: item[0].raw.region_id,
            cpu_cores: item[0].raw.cpu_cores,
            memory_size_in_GB: item[0].raw.memory_size_in_GB,
            connection_up_bound_speed: item[0].raw.connection_up_bound_speed,
            monthly_price: item[0].raw.monthly_price,
            hourly_price: item[0].raw.hourly_price,
        };
    }
};

onMounted(async () => {
    try {
        await useApi.handlePlans(props.selectedRegion);
        plans.value = plansByRegion.value;
    } catch (error) {
        console.error('Failed to fetch plans:', error);
    }
});
</script>

<template>
    <div class="tw-mt-14">
        <p class="tw-px-8 tw-pb-4 h6">Plans</p>
        <VDataTable class="elevation-0 subtitle-2" :headers="headers" :items="formattedPlans" item-value="name"
            select-strategy="single" single-select show-select bg-color="#FFFFFF" @update:modelValue="selectPlan">
            <template #item.hourly_price="{ item }">
                <div class="tw-flex tw-items-end">
                    <VBtn density="compact" flat rounded="circle" class="tw-ml-auto">
                        <VIcon>mdi-alert-circle-outline</VIcon>
                        <VTooltip activator="parent" location="bottom">{{ item.selectable.hourly_price }}/hour</VTooltip>
                    </VBtn>
                </div>
            </template>
            <template #item.data-table-select="{ item, isSelected, toggleSelect }">
                <VRadio color="#2C5EFF" :value="isSelected([{ value: item.raw, selectable: true }])"
                    :checked="item === selectedPlan" @change="toggleSelect({ value: item, selectable: true })">
                </VRadio>
            </template>
        </VDataTable>
    </div>
</template>

<style>
.v-data-table-footer {
    display: none;
}

.v-data-table .v-data-table-header .v-data-table-header__content span {
    color: var(--standart-theme-primary, #2F3857);

    /* caption/caption, medium */
    font-family: Roboto;
    font-size: 12px !important;
    font-style: normal !important;
    font-weight: 500 !important;
    line-height: 20px;
    letter-spacing: 0.048px;
}
</style>

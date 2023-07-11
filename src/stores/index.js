import { reactive, ref } from 'vue';
import {
    fetchRegions,
    fetchPlansByRegion,
    fetchOperatingSystems,
    fetchUserInfo
} from '../services/apiServices';
import { defineStore } from "pinia";

export const useApiStore = defineStore('api', () => {

    const virtualMachineInfo = reactive({});
    const regions = ref([]);
    const plansByRegion = ref([]);
    const operatingSystems = ref([]);
    const userInfo = ref(null);

    const selectedRegionHasPlans = ref(true);


    const handleRegions = async () => {
        try {
            const response = await fetchRegions();
            regions.value = response.data;
        }
        catch (error) {
            console.error('fetch regions error: ', error);
        }
    };

    const handlePlans = async (region) => {
        try {
            const response = await fetchPlansByRegion(region);
            plansByRegion.value = response.data;
            selectedRegionHasPlans.value = true;
        } catch (error) {
            console.error('fetch plans error: ', error);
            selectedRegionHasPlans.value = false;
        }
    };

    const handleOS = async () => {
        try {
            const response = await fetchOperatingSystems();
            operatingSystems.value = response.data;
        } catch (error) {
            console.error('fetch plans error: ', error);
        }
    };

    const handleUserInfo = async () => {
        try {
            const response = await fetchUserInfo();
            userInfo.value = response.data;
        } catch (error) {
            console.error('fetch plans error: ', error);
        }
    };


    return {
        regions, plansByRegion, operatingSystems, userInfo, virtualMachineInfo, selectedRegionHasPlans,
        handleRegions, handlePlans, handleOS, handleUserInfo
    };
});
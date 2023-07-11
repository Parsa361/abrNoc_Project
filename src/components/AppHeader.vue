<script setup>
import { useApiStore } from '../stores';
import { storeToRefs } from 'pinia';

const useApi = useApiStore();
const { virtualMachineInfo } = storeToRefs(useApi);

</script>

<template>
    <header v-if="virtualMachineInfo && virtualMachineInfo.user_info" class="tw-mx-auto tw-flex tw-border-b ">
        <!-- logo -->
        <div class="tw-w-[220px] tw-border-r">
            <img class="tw-px-[45px] tw-py-[11.5px]" src="../assets/icons/logo.svg" alt="Cloudzy">
        </div>

        <div class="tw-w-[1146px] tw-flex tw-justify-between tw-items-center tw-px-[33px] tw-py-4">
            <!-- instance -->
            <div class="tw-flex tw-items-center">
                <span class="subtitle-1">Instances</span>
                <span class="tw-px-[12px] subtitle-1">/</span>
                <span class="tw-font-roboto tw-font-normal tw-text-[14px]">New Instance</span>
            </div>

            <!-- userInfo -->
            <div class="tw-flex tw-justify-between tw-items-center tw-gap-4">
                <VBadge dot color="error">
                    <VIcon>mdi-bell-outline</VIcon>
                </VBadge>
                <!-- User's money -->
                <div
                    class="tw-flex tw-items-center tw-w-[133px] tw-h-[36px] tw-border tw-rounded-[4px] tw-border-greyLighten tw-p-2">
                    <VIcon color="grey-darken-1" :size="20">mdi-plus</VIcon>
                    <span class="tw-ps-1 tw-font-roboto tw-font-medium tw-text-[14px] tw-text-textPrimary">$ {{
                        virtualMachineInfo.user_info.balance }}</span>
                </div>
                <!-- Vertical line -->
                <div class="tw-h-5 tw-border-r"></div>

                <VBtn flat rounded="circle">
                    <VAvatar size="36" color="grey-lighten-1">
                        <VIcon icon="mdi-account" size="24" color="white"></VIcon>
                        <VTooltip activator="parent" location="bottom">
                            {{ virtualMachineInfo.user_info.first_name }} {{ virtualMachineInfo.user_info.last_name }}
                        </VTooltip>
                    </VAvatar>
                </VBtn>


            </div>

        </div>
    </header>
</template>

<style scoped></style>
<script setup>
const getUrl = (name) => {
    return new URL(`../assets/icons/${name}.svg`, import.meta.url).href;
};

const first_icons = [
    'Dashboard',
    'Instances',
    'Snapshots',
    'SSH',
    'Volume',
];
const second_icons = [
    'Billing',
    'Networking',
    'Report',

];
const third_icons = [
    'Support',
    'Help',
];

</script>

<template>
    <div class="tw-flex tw-flex-col tw-justify-between tw-border-r tw-pt-10 tw-pb-6 tw-px-5 body-2">
        <!-- upper frame container -->
        <div class="tw-inline-flex tw-flex-col tw-items-start tw-gap-1 ">
            <!-- items -->
            <div v-for="(icon, index) in first_icons" :key="icon" class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4"
                :class="index === 1 ? 'tw-bg-activeBlue tw-w-full tw-rounded tw-text-white' : ''">
                <img :src="getUrl(icon)" alt="">
                <span class="tw-ps-3">{{ icon }}</span>
            </div>

            <!-- horizontal line -->
            <div class="tw-w-40 tw-border-b tw-ms-3"></div>

            <!-- second frame container -->
            <div class="tw-inline-flex tw-flex-col tw-items-start tw-gap-1 ">
                <!-- items -->
                <div v-for="icon in second_icons" :key="icon" class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4">
                    <img :src="getUrl(icon)" alt="">
                    <span class="tw-ps-3">{{ icon }}</span>
                </div>
            </div>
        </div>

        <!-- down frame container -->
        <div class="tw-inline-flex tw-flex-col tw-items-start tw-gap-1">
            <!-- items -->
            <div v-for="icon in third_icons" :key="icon"
                class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4 tw-border tw-w-full">
                <img :src="getUrl(icon)" alt="">
                <span class="tw-ps-3">{{ icon }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
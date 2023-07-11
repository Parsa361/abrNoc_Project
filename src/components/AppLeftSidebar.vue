<script setup>

</script>

<template>
    <div class="tw-flex tw-flex-col tw-justify-between tw-border-r tw-pt-10 tw-pb-6 tw-px-5 body-2">
        <!-- upper frame container -->
        <div class="tw-inline-flex tw-flex-col tw-items-start tw-gap-1 ">
            <!-- items -->
            <div class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4">
                <img src="../assets/icons/dashboard.svg" alt="">
                <span class="tw-ps-3">Dashboard</span>
            </div>
            <div class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4 tw-bg-activeBlue tw-w-full tw-rounded">
                <img src="../assets/icons/instances.svg" alt="">
                <span class="tw-ps-3 tw-text-white">Instances</span>
            </div>
            <div class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4">
                <img src="../assets/icons/snapshots.svg" alt="">
                <span class="tw-ps-3">Snapshots</span>
            </div>
            <div class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4">
                <img src="../assets/icons/ssh.svg" alt="">
                <span class="tw-ps-3">SSH Keys</span>
            </div>
            <div class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4">
                <img src="../assets/icons/volume.svg" alt="">
                <span class="tw-ps-3 tw-text-[#00000042]">Volume</span>
            </div>

            <!-- horizontal line -->
            <div class="tw-w-40 tw-border-b tw-ms-3"></div>

            <!-- second frame container -->
            <div class="tw-inline-flex tw-flex-col tw-items-start tw-gap-1 ">
                <!-- items -->
                <div class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4">
                    <img src="../assets/icons/billing.svg" alt="">
                    <span class="tw-ps-3">Billing</span>
                </div>
                <div class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4">
                    <img src="../assets/icons/networking.svg" alt="">
                    <span class="tw-ps-3">Networking</span>
                </div>
                <div class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4">
                    <img src="../assets/icons/report.svg" alt="">
                    <span class="tw-ps-3">Report</span>
                </div>
            </div>
        </div>
        <!-- down frame container -->
        <div class="tw-inline-flex tw-flex-col tw-items-start tw-gap-1">
            <!-- items -->
            <div class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4 tw-border tw-w-full">
                <img src="../assets/icons/support.svg" alt="">
                <span class="tw-ps-3">Support</span>
            </div>
            <div class="tw-flex tw-items-center h-10 tw-py-2.5 tw-ps-4 tw-border tw-w-full">
                <img src="../assets/icons/help.svg" alt="">
                <span class="tw-ps-3">Help</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
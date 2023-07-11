<script setup>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppLeftSidebar from './components/AppLeftSidebar.vue';
import { onMounted } from 'vue';
import { useApiStore } from './stores';
import { storeToRefs } from 'pinia';

const useApi = useApiStore();
const { userInfo } = storeToRefs(useApi);

// fetch UserInfo
onMounted(async () => {
  try {
    await useApi.handleUserInfo();
    useApi.virtualMachineInfo.user_info = userInfo.value;
  } catch (error) {
    console.error('userInfo error', error);
  }
});
</script>

<template>
  <!-- header -->
  <AppHeader class="tw-h-[60px] tw-max-w-[1366px]" />
  <!-- body -->
  <div class="tw-max-w-container tw-flex tw-mx-auto tw-h-full">
    <!-- leftSidebar -->
    <AppLeftSidebar class="tw-w-[220px] tw-h-[707px]" />
    <!-- pages -->
    <RouterView class="tw-w-[1146px] tw-bg-bgBlue" />
  </div>
</template>

<style scoped></style>

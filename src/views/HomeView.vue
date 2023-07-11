<script setup>
import { ref } from 'vue';
import HomeMain from '../components/HomeMain.vue';
import HomePayment from '../components/HomePayment.vue';

const showAlert = ref(false);
const alertType = ref('');
const alertMessage = ref('');

const handleShowAlert = (value) => {
  showAlert.value = value;
};
const handleAlertType = (value) => {
  alertType.value = value;
};
const handleAlertMessage = (value) => {
  alertMessage.value = value;
}

</script>

<template>
  <main class="tw-relative tw-max-w-full tw-flex tw-h-full">
    <!-- This is ALert box -->
    <div class="tw-absolute -tw-top-10 tw-left-1/4 tw-z-10">
      <VAlert v-if="showAlert" :type="alertType" dismissible transition="scale-transition" variant="flat"
        :color="alertType === 'warning' ? '#FAC802' : '#FF4465'" :width="360" position="fixed">
        {{ alertMessage }}
      </VAlert>
    </div>
    <!-- HomeView page main components -->
    <div class="tw-w-[782px] tw-bg-white tw-rounded-lg tw-mt-8 tw-ms-8">
      <HomeMain />
    </div>
    <div class="tw-w-[283px] tw-h-[324px] tw-bg-white tw-rounded-lg tw-ms-4 tw-mr-8 tw-mt-8 tw-sticky tw-top-0 tw-z-10">
      <HomePayment @show-alert="handleShowAlert" @alert-message="handleAlertMessage" @alert-type="handleAlertType" />
    </div>
  </main>
</template>

<style scoped></style>
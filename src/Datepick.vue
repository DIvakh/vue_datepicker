<template>
  <div>
    <datepicker
      placeholder="Date of Purchase"
      v-model="date"
      :maxDate="new Date()"
      autoApply
      :enableTimePicker="false"
      modelType="timestamp"
      :data-date="date / 1000"
      :format="'MMM dd yyyy'"
    ></datepicker>
    {{ date ? date / 1000 : '' }}
  </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'datePick',
  components: {
    Datepicker
  },
  data() {
    return {
      date: null
    };
  }
};
</script>

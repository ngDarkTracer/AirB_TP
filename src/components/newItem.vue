<style lang="scss" scoped>
  .form-demo {
    .card {
      min-width: 450px;

    form {
      margin-top: 2rem;
    }

    .field {
      margin-bottom: 1.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}
</style>

<template>
  <div class="form-demo">
    <Dialog v-model:visible="showMessage" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
      <div class="flex align-items-center flex-column pt-6 px-3">
        <i class="pi pi-check-circle" :style="{fontSize: '5rem', color: 'var(--green-500)' }"></i>
        <h5>Success!</h5>
        <p :style="{lineHeight: 1.5, textIndent: '1rem'}">
          Ticket information saved.
        </p>
      </div>
      <template #footer>
        <div class="flex justify-content-center">
          <Button label="OK" @click="toggleDialog" class="p-button-text" />
        </div>
      </template>
    </Dialog>

    <div class="flex justify-content-center">
      <div class="card">
        <h2 class="text-center">New ticket</h2>
        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
          <div class="field">
            <div class="p-float-label">
              <InputMask id="ticketnumber" v-model="v$.ticketnumber.$model" :class="{'p-invalid':v$.ticketnumber.$invalid && submitted}" mask="999-9999999999" />
              <label for="ticketnumber" :class="{'p-error':v$.ticketnumber.$invalid && submitted}">Ticket No</label>
            </div>
            <small v-if="(v$.ticketnumber.$invalid && submitted) || v$.ticketnumber.$pending.$response" class="p-error">{{v$.ticketnumber.required.$message.replace('Value', 'Ticket number')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <InputText id="passengername" v-model="v$.passengername.$model" :class="{'p-invalid':v$.passengername.$invalid && submitted}" />
              <label for="passengername" :class="{'p-error':v$.passengername.$invalid && submitted}">Passenger Name</label>
            </div>
            <small v-if="(v$.passengername.$invalid && submitted) || v$.passengername.$pending.$response" class="p-error">{{v$.passengername.required.$message.replace('Value', 'Passenger Name')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <Calendar id="date" v-model="v$.date.$model" :class="{'p-invalid':v$.date.$invalid && submitted}" :showIcon="true" />
              <label for="date" :class="{'p-error':v$.date.$invalid && submitted}">Issuing date</label>
            </div>
            <small v-if="(v$.date.$invalid && submitted) || v$.date.$pending.$response" class="p-error">{{v$.date.required.$message.replace('Value', 'Issuing date')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <Dropdown id="traveltype" optionLabel="label" optionValue="value" v-model="v$.traveltype.$model" :class="{'p-invalid':v$.traveltype.$invalid && submitted}" :options="travelOption" />
              <label for="traveltype" :class="{'p-invalid':v$.traveltype.$invalid && submitted}">Travel type</label>
            </div>
            <small v-if="(v$.traveltype.$invalid && submitted) || v$.traveltype.$pending.$response" class="p-error">{{v$.traveltype.required.$message.replace('Value', 'Travel type')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <InputText id="intinerary" v-model="v$.intinerary.$model" :class="{'p-invalid':v$.intinerary.$invalid && submitted}" />
              <label for="intinerary" :class="{'p-error':v$.intinerary.$invalid && submitted}">Intinerary</label>
            </div>
            <small v-if="(v$.intinerary.$invalid && submitted) || v$.intinerary.$pending.$response" class="p-error">{{v$.intinerary.required.$message.replace('Value', 'Intinerary')}}</small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <InputText id="amount" v-model="v$.amount.$model" :class="{'p-invalid':v$.amount.$invalid && submitted}" />
              <label for="amount" :class="{'p-error':v$.amount.$invalid && submitted}">Amount</label>
            </div>
            <small v-if="(v$.amount.$invalid && submitted) || v$.amount.$pending.$response" class="p-error">{{v$.amount.required.$message.replace('Value', 'Amount')}}</small>
          </div>
          <div class="flex flex-row">
            <Button type="submit" label="Save" icon="pi pi-save" iconPos="left" class="p-button-success mt-2 mr-3" />
            <Button type="reset" label="Cancel" icon="pi pi-times" iconPos="left" class="p-button-danger mt-2" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import CountryService from '../service/CountryService';

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      ticketnumber: '',
      passengername: '',
      date: null,
      traveltype: '',
      intinerary: '',
      amount: '',
      travelOption: [],
      submitted: false,
      showMessage: false
    }
  },
  validations() {
    return {
      ticketnumber: {
        required
      },
      passengername: {
        required
      },
      date: {
        required
      },
      traveltype: {
        required
      },
      intinerary: {
        required
      },
      amount: {
        required
      }
    }
  },
  created() {
    this.travelOption = [
      {label: 'Flight', value: 'F'},
      {label: 'Hotel', value: 'H'},
      {label: 'Car', value: 'C'},
      {label: 'Misc', value: 'M'}
    ]
  },
  mounted() {

  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if(!this.showMessage) {
        this.resetForm();
      }
    },
    resetForm() {
      this.ticketnumber = '';
      this.passengername = '';
      this.date = null;
      this.traveltype = '';
      this.intinerary = '';
      this.amount = '';
      this.submitted = false;
      this.showMessage = false;
    }
  }
}
</script>
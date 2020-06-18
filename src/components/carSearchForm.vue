<template>
  <div class="w-full py-6 px-5 shadow-md border-t-4 border-blue-900">
    <div class="text-left">
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="search-icon-mg inline icon icon-tabler icon-tabler-search" width="14" height="14" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <circle cx="10" cy="10" r="7"/>
          <line x1="21" y1="21" x2="15" y2="15"/>
        </svg>
        <span>Search for a Car</span>
      </p>
    </div>
    <form class="w-full mt-8">
      <div class="flex mb-6">

        <div class="w-full md:w-3/4 pr-3 mb-6 md:mb-0">
          <label class=" flex block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="location">
            location
          </label>
          <input v-model="searchCarForm.location" class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="location" type="text" placeholder="Lagos, NGA">
          <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
        </div>

        <div class="w-full md:w-2/5 px-3">
          <label class=" flex block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="pkup-date">
            pick-up date
          </label>
          <datepicker
          id="pkup-date"
          placeholder="12-10-2012"
          v-model="searchCarForm.pickUpDate"
          class="appearance-none block w-full text-gray-700 border border-gray-200 py-3 pl-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          ></datepicker>
        </div>

        <div class="w-full form-time-input-mg md:w-1/3">
          <timeselector v-model="searchCarForm.pickUpDateTimeValue" :h24="false" :placeholder="'10:00'" class="text-gray-700 border form-time-input-pd px-4"></timeselector>
        </div>

        <div class="w-full md:w-2/5 px-3">
          <label class=" flex block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="drup-date">
            drop-off date
          </label>
          <datepicker
          id="pkup-date"
          placeholder="12-10-2012"
          v-model="searchCarForm.dropOffDate"
          class="appearance-none block w-full text-gray-700 border border-gray-200 py-3 pl-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          ></datepicker>
        </div>

        <div class="w-full form-time-input-mg md:w-1/3">
          <timeselector v-model="searchCarForm.dropOffDateTimeValue" :h24="false" :placeholder="'10:00'" class="text-gray-700 border form-time-input-pd px-4"></timeselector>
        </div>

        <div class="w-full md:w-4/12 px-3 mb-6 md:mb-0">
          <label class=" flex block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="cartype">
            car type
          </label>
          <div class="relative">
            <select v-model="searchCarForm.carType" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cartype">
              <option>standard</option>
              <option>premium</option>
              <option>mid</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div class="w-full md:w-4/12 mt-6 md:mb-0">
          <button @click.prevent="searchCar" class=" inline-flex bg-blue-500 hover:bg-blue-700 w-full text-white font-bold form-btn-pd px-4">
            <span>Update</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="inline mt-1 ml-1 icon icon-tabler icon-tabler-rotate" width="15" height="15" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5"/>
            </svg> 
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import Timeselector from 'vue-timeselector';
export default {
  name: "carsearchform",
  components: {
    Datepicker,
    Timeselector
  },
  data(){
    return{
      searchCarForm:{
        location: "",
        pickUpDate: "",
        pickUpDateTimeValue: new Date(),
        dropOffDate: "",
        dropOffDateTimeValue: new Date(),
        carType: ""
      }
    }
  },
  methods:{
    searchCar(){
      console.log(this.searchCarForm)
    }
  }
}
</script>

<style>
.search-icon-mg{
  margin-bottom: 4px;
  margin-right: 4px;
}
  .mt-7{
    margin-top: 26px;
  }
  .form-btn-pd{
    padding-top: 0.79rem;
    padding-bottom: 0.79rem;
  }
  .select-list{
    display: flex;
  }
  .form-time-input-pd{
    padding: 10px 8px;
  }
  .form-time-input-mg{
    margin-top: 26px;
  }

</style>
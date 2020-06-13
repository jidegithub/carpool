<template>
  <div class="w-full">
    <div class="text-left">
      <p>Search for a Car</p>
    </div>
    <form class="w-full mt-10">
      <div class="flex mb-6">

        <div class="w-full md:w-3/4 pr-3 mb-6 md:mb-0">
          <label class=" flex block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="location">
            location
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="location" type="text" placeholder="Lagos, NGA">
          <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
        </div>

        <div class="w-full md:w-2/5 px-3">
          <label class=" flex block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="pkup-date">
            pick-up date
          </label>
          
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pkup-date" type="text" placeholder="12-10-2012">
        </div>

        <div class="w-full mt-7 md:w-1/5 px-3">
          <!-- <label class=" flex block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            time
          </label> -->
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="10:00">
        </div>

        <div class="w-full md:w-2/5 px-3">
          <label class=" flex block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="drup-date">
            drop-off date
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="drup-date" type="text" placeholder="12-10-2012">
        </div>

        <div class="w-full mt-7 md:w-1/5 px-3">
          <!-- <label class=" flex block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
           time
          </label> -->
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="10:00">
        </div>

        <div class="w-full md:w-4/12 px-3 mb-6 md:mb-0">
          <label class=" flex block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="cartype">
            car type
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cartype">
              <option>standard</option>
              <option>premium</option>
              <option>mid</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div class="w-full md:w-4/12 mt-7 md:mb-0">
          <button class="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold form-btn-pd px-4">
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
  name: "carsearchform",
  components: {
    Datepicker
  },
  data(){
    return{
      pickupDate: ""
    }
  }
}
</script>

<style>
  .mt-7{
    margin-top: 26px;
  }
  .form-btn-pd{
    padding-top: 0.8rem;
    padding-bottom: 0.6rem;
  }

</style>
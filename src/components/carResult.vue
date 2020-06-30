<template>
<main id="car-result">
           
    <div class="flex pt-2 pb-2 pr-4 pl-4" >
      <p class=" font-bold py-2">Results</p>
      <div class="py-1"><svg class="fill-current h-6 w-6 text-black-500 mr-2" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                        />
                        </svg>
                    </div>
      </div>  
 <div class="car-result-block max-w-sm w-full lg:max-w-full lg:flex">
   
<div class=" h-48 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="audi">
 <img class="car_pic" src="../assets/audi.png" alt="Avatar of Jonathan Reinink">
  </div>
  <div class=" flex mb-4 h-48 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4  justify-between leading-normal">
      <div class="w-1/2 text-gray-900 font-bold text-xl mb-2">
      <h1 class="car_name">Audi | Economy </h1>
      <ol>
  <li>5 passengers</li>
  <li>3 large suitcase, 2 small suitcase</li>
  <li>Automaic transmission</li>
  <li>Air conditioning</li>
  <li>9km/l</li>
</ol>
  <span class="extra_details text-brand-light cursor-pointer border-b border-dashed border-blue-400">View Car Details</span></div>
       <div class="w-1/2 text-gray-900 font-bold text-xl mb-2">$290 <br> <br><span class="miles">Unlimited free miles included</span> <br>
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  SELECT
</button></div>
  </div>
  
</div>
<div class="car-result-block max-w-sm w-full lg:max-w-full lg:flex">
<div class=" h-48 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="audi">
 <img class="car_pic"  src="../assets/audiyellow.png" alt="Avatar of Jonathan Reinink">
  </div>
  <div class=" flex mb-4 h-48 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4  justify-between leading-normal">
      <div class="w-1/2 text-gray-900 font-bold text-xl mb-2">
      <h1 class="car_name">Audi | Compact </h1>
      <ol>
  <li>5 passengers</li>
  <li>3 large suitcase, 2 small suitcase</li>
  <li>Automaic transmission</li>
  <li>Air conditioning</li>
  <li>9km/l</li>
</ol>
  <span class=" extra_details text-brand-light cursor-pointer border-b border-dashed border-blue-400">View Car Details</span></div>
       <div class="w-1/2 text-gray-900 font-bold text-xl mb-2">$300 <br> <br> <span class="miles">Unlimited free miles included</span>  <br>
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  SELECT
</button></div>
  </div>
  
</div>
<div class="car-result-block max-w-sm w-full lg:max-w-full lg:flex">
<div class=" h-48 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="audi">
 <img class="car_pic" src="../assets/audired.png" alt="Audi">
  </div>
  <div class=" flex mb-4 h-48 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4  justify-between leading-normal">
      <div class="w-1/2 text-gray-900 font-bold text-xl mb-2">
      <h1 class="car_name">Audi | Intermediate </h1>
      <ol>
  <li>5 passengers</li>
  <li>3 large suitcase, 2 small suitcase</li>
  <li>Automaic transmission</li>
  <li>Air conditioning</li>
  <li>9km/l</li>
</ol>
 <span class=" extra_details text-brand-light cursor-pointer border-b border-dashed border-blue-400">View Car Details</span></div>
       <div class="w-1/2 text-gray-900 font-bold text-xl mb-2">$400 <br> <br> <span class="miles">Unlimited free miles included</span> <br>
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  SELECT
</button>
</div>
  </div>
  
</div>




</main>
</template>
<script>
export default {
  
}
</script>

<style scoped>
#car-result .car-result-block {
  width: 56rem;
  margin-top: 2rem;
  margin-left: 2rem;
}
.car_name {
  font-weight: 500;
}
ol {
  font-size: 15px;
  font-weight: 100;
}
.extra_details{
  font-size: 15px;
  font-weight: 500;
}
.car_pic {
width: 200px;
  height: 150px;
}
</style>
<template>
    <main id="sidebar-car">
        <aside class="sidebar__container">
            <div class="sidebar">
                <div class="flex pt-2 pb-2 pr-4 pl-4">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-black-500 mr-2" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                        />
                        </svg>
                    </div>
        
                    <p class="font-bold py-2">Info</p>
                </div>
                <hr>
                <p class="car-info py-2"><b>Please Note:</b>
                 <span class="car-info-text">The vehicles shown are examples. Specific models within a car class may vary in availability and features, such as passenger seatin, luggage capacity and mileage
                     </span>
                </p>
            </div>

            <div class="sidebar">
                <div class="flex pt-2 pb-2 pr-4 pl-4">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-black-500 mr-2" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                        />
                        </svg>
                    </div>
        
                    <p class="font-bold py-2">Filter results</p>
                </div>
                <hr>
                <div class="price-range-block bg-gray-100">
                <p class="price-range ml-4 py-2">PRICE RANGE</p>
                </div>
                <hr>
                
                <div id="app">
    <div class="track-container">
      <span class="range-value min">{{ minValue}} </span> <span class="range-value max">{{ maxValue }}</span>
      <div class="track" ref="_vpcTrack"></div>
      <div class="track-highlight" ref="trackHighlight"></div>
      <button class="track-btn track1" ref="track1"></button>
      <button class="track-btn track2" ref="track2"></button>
    </div>
  </div>
            </div>
        </aside>
    </main>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #sidebar-car .sidebar__container .sidebar {
  background: #FFFFFF;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  /* box-shadow: 4px 4px 20px #0000000F; */
  width: 22rem;
  height: 11.5rem;
  margin-top: 2rem;
}

#sidebar-car .sidebar__container .sidebar .car-info {
    margin-left: 0.8rem;
    word-wrap: break-word;
}

#sidebar-car .sidebar__container .sidebar .car-info .car-info-text {
 margin-right: 50px;
}

#sidebar-car .sidebar__container .sidebar .price-range {
    text-align: left;
    font-size: 14px;
}


/* SLider */
#app {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    flex-direction: column;
  }

.range-value{
    position: absolute;
    top: -2rem;
  }
  .range-value.min{
    left: 0;
  }

  .range-value.max{
    right: 0;
  }
  .track-container{
    width: 100%;
    position: relative;
    cursor: pointer;
    height: 0.5rem;
  }

  .track,
  .track-highlight {
    display: block;
    position: absolute;
    width: 100%;
    height: 0.5rem;
  }

  .track{
    background-color: #ddd;
  }

  .track-highlight{
    background-color: black;
    z-index: 2;
  }

  .track-btn{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    display: block;
    position: absolute;
    z-index: 2;
    width: 1.5rem;
    height: 1.5rem;
    top: calc(-50% - 0.25rem);
    margin-left: -1rem;
    border: none;
    background-color: black;
    -ms-touch-action: pan-x;
    touch-action: pan-x;
    transition: box-shadow .3s ease-out,background-color .3s ease,-webkit-transform .3s ease-out;
    transition: transform .3s ease-out,box-shadow .3s ease-out,background-color .3s ease;
    transition: transform .3s ease-out,box-shadow .3s ease-out,background-color .3s ease,-webkit-transform .3s ease-out;
  }
</style>
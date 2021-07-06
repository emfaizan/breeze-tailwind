<template>
  <Header />
  
  <!--BANNER--->

  <div class="w-full lg:pl-64 md:pl-28 pl-8 pr-8 lg:pr-40 md:pr-24 py-16" style="background-image: url(./src/assets/banner.png);">
      <div class="flex xl:flex-row flex-col">
          <div class="xl:w-2/5 w-full lg:pr-40 pr-0">
            <h2 class="md:text-6xl sm:text-4xl text-2xl text-white">Get started today</h2>
          </div>
          <div class="xl:w-3/5 xl:mt-0 mt-6 w-full lg:px-20 px-4 lg:pt-36 pt-16 pb-16" style="background-color: #304b6d;">
            <div>
                <input type="text" name="" id="" class="w-full md:h-10 h-8 rounded-sm mb-4 pl-4" placeholder="Full Name">
                <div class="flex md:flex-row flex-col mb-4">
                    <input type="text" name="" id="" class="md:mb-0 mb-3 w-full md:h-10 h-8 rounded-sm mr-6 pl-4" placeholder="Email">
                    <input type="text" name="" id="" class="w-full md:h-10 h-8 rounded-sm pl-4" placeholder="Phone Number">
                </div>
                <input type="text" name="" id="" class="w-full md:h-10 h-8 rounded-sm mb-4 pl-4" placeholder="Address">
                <div class="flex md:flex-row flex-col mb-4">
                  <input type="text" name="" id="" class="md:mb-0 mb-3 w-full md:h-10 h-8 rounded-sm pl-4 mr-6" placeholder="City">
                    <input type="text" name="" id="" class="w-full md:h-10 h-8 rounded-sm pl-4" placeholder="Zip">
                  </div>
                  <div class="flex md:flex-row flex-col mb-4">
                    <a href="" class="text-center md:mb-0 mb-3 font-bold w-full md:h-10 h-8 rounded-sm border border-white md:leading-10 leading-8 text-white rounded-sm mr-6 text-xs">Shopping for my garage</a>
                    <a href="" class="text-center font-bold w-full md:h-10 h-8 rounded-sm bg-white text-xs md:leading-10 leading-8">Shopping for covered porch</a>
                  </div>
            </div>
            <div class="flex md:flex-row flex-col md:items-center items-start my-8 text-gray-400">
                <h4 class="mr-9 text-xs">My garage is...</h4>
                <div>
                <input type="radio" name="" id=""> <label for="" class="pl-2 pr-3 text-xs"> 1 car </label>
                </div>
                <div>
                  <input type="radio" name="" id=""> <label for="" class="pl-2 pr-3 text-xs"> 2 car </label>
                </div>
                <div>
                  <input type="radio" name="" id=""> <label for="" class="pl-2 pr-3 text-xs"> 3 car </label>
                </div>
                <div>
                <input type="radio" name="" id=""> <label for="" class="pl-2 text-xs"> Bigger </label>
                </div>
            </div>
            <div class="flex md:flex-row flex-col text-sm text-white">
                <div class="md:w-2/4 w-full">
                    <h4 class="mb-1.5">I want panels that open...</h4>
                    <div>
                    <input type="radio" name="" id=""> <label for="">Up and Down (Vertical Sliders)</label>
                    </div>
                    <div>
                    <input type="radio" name="" id=""> <label for="">Side to Side (Horizontal Sliders)</label>
                    </div>
                      <div>
                    <input type="radio" name="" id=""> <label for="">Fixed(Do Not Open)</label>
                    </div>
                    <div>
                    <input type="radio" name="" id=""> <label for="">Up and Down (Vertical Sliders)</label>
                    </div>
                    <div>
                    <input type="radio" name="" id=""> <label for="">Not Sure, help me decide</label>
                  </div>
                </div>
                <div class="md:w-2/4 md:mt-0 mt-2 w-full">
                    <h4 class="mb-1.5">Do you need a door?</h4>
                    <div>
                    <input type="radio" name="" id=""> <label for="">Yes</label>
                  </div>
                    <div>
                    <input type="radio" name="" id=""> <label for="">No</label>
                    </div>
                    <div>
                    <input type="radio" name="" id=""> <label for="">Fixed(Do Not Open)</label>
                  </div>
                </div>
            </div>
            <div class="flex md:flex-row flex-col text-sm text-white mt-6">
              <div class="md:w-2/4 md:mt-0">
                  <h4 class="mb-1.5">Do you have measurements?</h4>
                  <div>
                  <input type="radio" name="" id=""> <label for="">Yes</label>
                  </div>
                  <div>
                  <input type="radio" name="" id=""> <label for="">No, please help me take them myself</label>
                  </div>
                    <div>
                  <input type="radio" name="" id=""> <label for="">No,</label>
                  </div>
                  <div>
                  <input type="radio" name="" id=""> <label for="">please send somebody</label>
                  </div>
                  <div>
                  <input type="radio" name="" id=""> <label for="">to take them for me.</label>
                </div>
              </div>
              <div class="md:w-2/4 md:mt-0 mt-2">
                  <h4 class="mb-1.5">Do you need installation services for this?</h4>
                  <div>
                  <input type="radio" name="" id=""> <label for="">Yes</label>
                </div>
                  <div>
                  <input type="radio" name="" id=""> <label for="">No, I will DIY.</label>
                  </div>
                  <div>
                  <input type="radio" name="" id=""> <label for="">No, I have installer.</label>
                </div>
                <div>
                  <input type="radio" name="" id=""> <label for="">Not sure, help me decide.</label>
                </div>
              </div>
            </div>
            <div class="text-sm text-white flex items-center my-6">
                <h4 class="pr-14">Special financing?</h4>
                <input type="radio" name="" id=""> <label for="" class="pl-2">Yes</label>
                <input type="radio" name="" id="" class="ml-14"> <label for="" class="pl-2">No</label>
            </div>
            <div>
                <a href="/" class="w-full text-white text-sm block h-10 leading-10 text-center font-bold" style="background-color: #5AC1A7;">GET QUOTE</a>
            </div>
          </div>
      </div>
  </div>

  <!--BANNER--->

  <!--OWN REASEARCH-->

    <div>
        <div class="py-16 md:px-0 px-4 lg:text-left text-center">
        <h2 class="text-center md:text-2xl text-xl font-bold pb-4 text-blue-800">Prefer to do Your Own Research</h2>
        <p class="text-base text-center text-gray-600">We sell exclusively through a dealer network who can you finds the right products for you home or property. </p>
        <p class="text-base font-bold text-center text-gray-600">To find an authorized dealer in your area, please enter your zip code right here</p>
        <div class="flex justify-center lg:flex-row flex-col pt-7 text-gray-600">
            <div class="md:w-96 w-auto lg:mx-0 md:mx-auto mx-0">
                <h4 class="text-sm pb-2.5">Zip Code</h4>
                <div class="mb-6">
                    <input type="text" name="" id="" placeholder="Enter your zip code" class="rounded-sm border border-gray w-full h-10 pl-2">
                </div>
                <h4 class="text-xs pb-6">Select the type of dealer you're looking for</h4>
                <div>
                    <input type="checkbox" name="" id=""> <label for="" class="text-base pl-2 text-blue-800">Dealers with showrooms</label>
                    <h4 class="text-base pt-6">Dealers with homeowners</h4>
                </div>
            </div>
            <div class="md:w-96 w-auto lg:mx-0 md:mx-auto mx-0 lg:pl-10 pl-0">
                <h4 class="text-sm pb-2.5">From</h4>
                <div>
                   <select name="" id="" class="w-full h-10 border border-blue-800 rounded-sm text-blue-800 font-bold">
                       <option value="">15 miles</option>
                       <option value="">15 miles</option>
                       <option value="">15 miles</option>
                   </select>
                </div>
                <div class="mt-16">
                    <input type="checkbox" name="" id=""> <label for="">Dealers for trade/industry professionals</label>
                    <h4 class="mt-6">Dealers for international exports</h4>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <a href="/" class="w-2/5 rounded-sm bg-blue-800 text-white font-bold text-center h-10 leading-10 block m-auto">Submit</a>
        </div>
       </div>
    </div>

    <!--OWN REASEARCH-->

    <!---MAP-->

    <div>
        <a href="/">
         <img src="./assets/map.png" class="m-auto" alt="">
        </a>
    </div>

    <!---MAP-->

    <!--SHOWROOMS SECTION--->

    <div class="lg:px-56 md:px-20 px-4 my-16">
        <div class="flex items-center justify-between">
            <div class="flex">
                <h4 class="text-gray-600"> Showing </h4>
                <h5 class="text-blue-800 font-bold pl-3">Dealers with showrooms</h5>
            </div>
            <div>
                <h4 class="text-gray-600 underline">Change</h4>
            </div>
        </div>
        <div class="flex justify-between md:flex-row flex-col md:text-left text-center 2xl:px-20 px-0 mt-8 pb-8">
            <div>
                <h4 class="text-blue-800 font-bold ">PGT Test Dealer</h4>
                <p class="md:w-3/4 w-full text-sm text-gray-600 my-4">632 West 6th Avenue Anchorage, Alaska 99501</p>
                <div class="flex items-center md:justify-start justify-center">
                  <div> <img src="./assets/phone.png" class="mr-2" alt=""> </div><span class="text-blue-800 font-bold ">904-295-1020</span>
                </div>
            </div>
            <div class="md:text-right text-center">
                <div class="flex md:justify-end justify-center mb-4 md:mt-0 mt-4">
                    <img src="./assets/companylogo.png" alt="">
                </div>
                <div>
                    <a href="/" class="h-10 leading-10 text-center border border-blue-800 rounded-sm text-blue-800 lg:px-8 px-6 inline-block">Directions</a>
                    <a href="/" class="h-10 leading-10 text-center border border-blue-800 rounded-sm text-blue-800 ml-4 lg:px-8 px-6 inline-block">Live Chat</a>
                    <a href="/" class="h-10 leading-10 text-center border bg-blue-800 rounded-sm text-white ml-4 lg:px-8 px-6 inline-block 2xl:mt-0 mt-4">Get Qoute</a>
                </div>
            </div>
        </div>
        <div class="flex justify-between md:flex-row flex-col md:text-left text-center 2xl:px-20 px-0 mt-8 pb-8">
            <div>
                <h4 class="text-blue-800 font-bold ">PGT Test Dealer</h4>
                <p class="md:w-3/4 w-full text-sm text-gray-600 my-4">632 West 6th Avenue Anchorage, Alaska 99501</p>
                <div class="flex items-center md:justify-start justify-center">
                  <div> <img src="./assets/phone.png" class="mr-2" alt=""> </div><span class="text-blue-800 font-bold ">904-295-1020</span>
                </div>
            </div>
            <div class="md:text-right text-center">
                <div class="flex md:justify-end justify-center mb-4 md:mt-0 mt-4">
                    <img src="./assets/companylogo.png" alt="">
                </div>
                <div>
                    <a href="/" class="h-10 leading-10 text-center border border-blue-800 rounded-sm text-blue-800 lg:px-8 px-6 inline-block">Directions</a>
                    <a href="/" class="h-10 leading-10 text-center border border-blue-800 rounded-sm text-blue-800 ml-4 lg:px-8 px-6 inline-block">Live Chat</a>
                    <a href="/" class="h-10 leading-10 text-center border bg-blue-800 rounded-sm text-white ml-4 lg:px-8 px-6 inline-block 2xl:mt-0 mt-4">Get Qoute</a>
                </div>
            </div>
        </div>
        <div class="flex justify-between md:flex-row flex-col md:text-left text-center 2xl:px-20 px-0 mt-8 pb-8">
            <div>
                <h4 class="text-blue-800 font-bold ">PGT Test Dealer</h4>
                <p class="md:w-3/4 w-full text-sm text-gray-600 my-4">632 West 6th Avenue Anchorage, Alaska 99501</p>
                <div class="flex items-center md:justify-start justify-center">
                  <div> <img src="./assets/phone.png" class="mr-2" alt=""> </div><span class="text-blue-800 font-bold ">904-295-1020</span>
                </div>
            </div>
            <div class="md:text-right text-center">
                <div class="flex md:justify-end justify-center mb-4 md:mt-0 mt-4">
                    <img src="./assets/companylogo.png" alt="">
                </div>
                <div>
                    <a href="/" class="h-10 leading-10 text-center border border-blue-800 rounded-sm text-blue-800 lg:px-8 px-6 inline-block">Directions</a>
                    <a href="/" class="h-10 leading-10 text-center border border-blue-800 rounded-sm text-blue-800 ml-4 lg:px-8 px-6 inline-block">Live Chat</a>
                    <a href="/" class="h-10 leading-10 text-center border bg-blue-800 rounded-sm text-white ml-4 lg:px-8 px-6 inline-block 2xl:mt-0 mt-4">Get Qoute</a>
                </div>
            </div>
        </div>
        <div class="flex justify-between md:flex-row flex-col md:text-left text-center 2xl:px-20 px-0 mt-8 pb-8">
            <div>
                <h4 class="text-blue-800 font-bold ">PGT Test Dealer</h4>
                <p class="md:w-3/4 w-full text-sm text-gray-600 my-4">632 West 6th Avenue Anchorage, Alaska 99501</p>
                <div class="flex items-center md:justify-start justify-center">
                  <div> <img src="./assets/phone.png" class="mr-2" alt=""> </div><span class="text-blue-800 font-bold ">904-295-1020</span>
                </div>
            </div>
            <div class="md:text-right text-center">
                <div class="flex md:justify-end justify-center mb-4 md:mt-0 mt-4">
                    <img src="./assets/companylogo.png" alt="">
                </div>
                <div>
                    <a href="/" class="h-10 leading-10 text-center border border-blue-800 rounded-sm text-blue-800 lg:px-8 px-6 inline-block">Directions</a>
                    <a href="/" class="h-10 leading-10 text-center border border-blue-800 rounded-sm text-blue-800 ml-4 lg:px-8 px-6 inline-block">Live Chat</a>
                    <a href="/" class="h-10 leading-10 text-center border bg-blue-800 rounded-sm text-white ml-4 lg:px-8 px-6 inline-block 2xl:mt-0 mt-4">Get Qoute</a>
                </div>
            </div>
        </div>
        <div class="flex justify-between md:flex-row flex-col md:text-left text-center 2xl:px-20 px-0 mt-8 pb-8">
            <div>
                <h4 class="text-blue-800 font-bold ">PGT Test Dealer</h4>
                <p class="md:w-3/4 w-full text-sm text-gray-600 my-4">632 West 6th Avenue Anchorage, Alaska 99501</p>
                <div class="flex items-center md:justify-start justify-center">
                  <div> <img src="./assets/phone.png" class="mr-2" alt=""> </div><span class="text-blue-800 font-bold ">904-295-1020</span>
                </div>
            </div>
            <div class="md:text-right text-center">
                <div class="flex md:justify-end justify-center mb-4 md:mt-0 mt-4">
                    <img src="./assets/companylogo.png" alt="">
                </div>
                <div>
                    <a href="/" class="h-10 leading-10 text-center border border-blue-800 rounded-sm text-blue-800 lg:px-8 px-6 inline-block">Directions</a>
                    <a href="/" class="h-10 leading-10 text-center border border-blue-800 rounded-sm text-blue-800 ml-4 lg:px-8 px-6 inline-block">Live Chat</a>
                    <a href="/" class="h-10 leading-10 text-center border bg-blue-800 rounded-sm text-white ml-4 lg:px-8 px-6 inline-block 2xl:mt-0 mt-4">Get Qoute</a>
                </div>
            </div>
        </div>
    </div>

    <!--SHOWROOMS SECTION--->

    <!---CIRCLE OF INNOVATIONS-->

    <div class="2xl:px-60 lg:px-36 md:px-20 px-4">
        <div>
            <img src="./assets/circle.png" class="m-auto" alt="">
        </div>
        <h2 class="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-blue-800 font-bold text-center pt-10 pb-6">Circle Of Innovations</h2>
        <p class="md:max-w-4xl lg:text-xl md:text-lg text-sm w-full text-center m-auto text-gray-600">Each year,we honor exceptional dealers who haved showcased the highest dedication to serving their communities with products that are built for the everyday and a once in a lifetime.</p>
        <br>
        <p class="lg:text-xl md:text-lg text-sm text-center m-auto text-gray-600">This Program,The circle of Innovators,is divided into three tiers:gold,platinum and diamond.</p>
        <div class="flex md:flex-row flex-col justify-between items-center lg:px-20 px-0 pt-20 pb-7">
            <div>
                <h3 class="lg:text-2xl md:text-xl text-lg font-bold text-blue-800">Gold Dealers</h3>
            </div>
            <div class="flex">
                <div class="flex mt-4">
                   <h4 class="text-gray-600 text-sm"> PGT Test Dealer </h4>
                   <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                   <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                   <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                </div>
            </div>
        </div>
        <div class="flex justify-between md:flex-row flex-col items-center lg:px-20 px-0 pb-7">
            <div>
                <h3 class="lg:text-2xl md:text-xl text-lg font-bold text-gray-400">Platinum Dealers</h3>
            </div>
            <div class="flex">
                <div class="flex mt-4">
                    <h4 class="text-gray-600 text-sm"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                 </div>
            </div>
        </div>
        <div class="flex justify-between md:flex-row flex-col items-center lg:px-20 px-0 pb-7">
            <div>
                <h3 class="lg:text-2xl md:text-xl text-lg font-bold text-gray-400">Diamond Dealers</h3>
            </div>
            <div class="flex">
                <div class="flex mt-4">
                    <h4 class="text-gray-600 text-sm"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                 </div>
            </div>
        </div>
        <div class="flex justify-between md:flex-row flex-col items-center lg:px-20 px-0 pb-7">
            <div>
                <h3 class="lg:text-2xl md:text-xl text-lg font-bold text-gray-400">Diamond Dealers</h3>
            </div>
            <div class="flex">
                <div class="flex mt-4">
                    <h4 class="text-gray-600 text-sm"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                 </div>
            </div>
        </div>
        <div class="flex justify-between md:flex-row flex-col items-center lg:px-20 px-0 pb-7">
            <div>
                <h3 class="lg:text-2xl md:text-xl text-lg font-bold text-gray-400">Diamond Dealers</h3>
            </div>
            <div class="flex">
                <div class="flex mt-4">
                    <h4 class="text-gray-600 text-sm"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                    <h4 class="text-gray-600 text-sm md:pl-10 pl-2"> PGT Test Dealer </h4>
                 </div>
            </div>
        </div>
    </div>

    <!---CIRCLE OF INNOVATIONS-->

  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>

</style>

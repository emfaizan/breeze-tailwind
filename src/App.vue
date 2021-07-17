<template>
    <Header />

        <!--BANNER--->
    <div class="w-full py-10 lg:py-16" style="background-image: url(/src/assets/banner.png);">
        
        <div class="flex justify-between xl:flex-row flex-col xl:container mx-auto px-0 md:px-16 lg:px-20">
            
            <div class="lg:w-2/5 w-full">
                <h2 class="md:text-6xl sm:text-4xl text-2xl font-bold text-center md:text-left text-white my-6 lg:mt-20">Get started today</h2>
            </div>
            
            <div class="max-w-2xl lg:w-3/5 w-full lg:px-20 lg:py-16 md:px-16 md:py-12 p-6 text-white" style="background-color: rgba(58,98,149, 0.7);">
                <h3 class="text-center text-white font-bold text-base mb-8">Getting the most out of your backyard and/or garage has never been so Eze! Please fill out this form to get your quote.</h3>
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
                        <a href="#" class="text-center md:mb-0 mb-3 font-bold w-full md:h-10 h-8 rounded-sm border border-white md:leading-10 leading-8 text-white rounded-sm mr-6 text-xs">Shopping for my garage</a>
                        <a href="#" class="text-center font-bold w-full md:h-10 h-8 rounded-sm bg-white text-primary text-xs md:leading-10 leading-8">Shopping for covered porch</a>
                    </div>
                </div>


                <div class="flex md:flex-row flex-col md:items-center items-start my-8">
                    <h4 class="mr-9 text-sm">My garage is...</h4>
                    <div class="mb-1">
                        <label class="pl-2 pr-3 text-sm"><input type="radio" name="garage" id=""> 1 car </label>
                    </div>
                    <div class="mb-1">
                        <label class="pl-2 pr-3 text-sm"><input type="radio" name="garage" id=""> 2 car </label>
                    </div>
                    <div class="mb-1">
                        <label class="pl-2 pr-3 text-sm"><input type="radio" name="garage" id=""> 3 car </label>
                    </div>
                    <div class="mb-1">
                        <label class="pl-2 text-sm"><input type="radio" name="garage" id=""> Bigger </label>
                    </div>
                </div>


                <div class="flex md:flex-row flex-col text-sm text-white">
                    <div class="md:w-2/4 w-full">
                        <h4 class="mb-1.5">I want panels that open...</h4>
                        <div class="mb-1">
                            <label><input type="radio" name="panels" id=""> Up and Down (Vertical Sliders)</label>
                        </div>
                        <div class="mb-1">
                            <label><input type="radio" name="panels" id=""> Side to Side (Horizontal Sliders)</label>
                        </div>
                        <div class="mb-1">
                            <label><input type="radio" name="panels" id=""> Fixed(Do Not Open)</label>
                        </div>
                        <div class="mb-1">
                            <label><input type="radio" name="panels" id=""> Up and Down (Vertical Sliders)</label>
                        </div>
                        <div class="mb-1">
                            <label><input type="radio" name="panels" id=""> Not Sure, help me decide</label>
                        </div>
                    </div>

                  
                    <div class="md:w-2/4 md:mt-0 mt-2 w-full">
                        <h4 class="mb-1.5">Do you need a door?</h4>
                        <div class="mb-1">
                            <label><input type="radio" name="door" id=""> Yes</label>
                        </div>
                        <div>
                            <label><input type="radio" name="door" id=""> No</label>
                        </div>
                        <div>
                            <label><input type="radio" name="door" id=""> Fixed(Do Not Open)</label>
                        </div>
                    </div>
                </div>
            
            
                <div class="flex md:flex-row flex-col text-sm text-white mt-6">

                    <div class="md:w-2/4 md:mt-0">
                        <h4 class="mb-1.5">Do you have measurements?</h4>
                        <div class="mb-1">
                            <label><input type="radio" name="measurement" id=""> Yes</label>
                        </div>
                        <div class="mb-1">
                            <label><input type="radio" name="measurement" id=""> No, please help me take them myself</label>
                        </div>
                        <div class="mb-1">
                            <label><input type="radio" name="measurement" id=""> No,</label>
                        </div>
                        <div class="mb-1">
                            <label><input type="radio" name="measurement" id=""> please send somebody</label>
                        </div>
                        <div class="mb-1">
                            <label><input type="radio" name="measurement" id=""> to take them for me.</label>
                        </div>
                    </div>

                    <div class="md:w-2/4 md:mt-0 mt-2">
                        <h4 class="mb-1.5">Do you need installation services for this?</h4>
                        
                        <div>
                            <label>
                                <input type="radio" name="inst_service" id=""> Yes
                            </label>
                        </div>
                        
                        <div>
                            <label>
                                <input type="radio" name="inst_service" id=""> No, I will DIY.
                            </label>
                        </div>
                        
                        <div>
                            <label>
                                <input type="radio" name="inst_service" id=""> No, I have installer.
                            </label>
                        </div>

                        <div>
                            <label>
                                <input type="radio" name="inst_service" id=""> Not sure, help me decide.
                            </label>
                        </div>
                    </div>
                </div>
                
                <div class="text-sm text-white flex items-center my-6">
                    <h4 class="pr-14">Special financing?</h4>
                    <input type="radio" name="" id=""> <label class="pl-2">Yes</label>
                    <input type="radio" name="" id="" class="ml-14"> <label class="pl-2">No</label>
                </div>
                
                <div>
                    <a href="/" class="w-full text-white text-sm block h-10 leading-10 text-center font-bold bg-secondary">GET QUOTE</a>
                </div>
            </div>
        </div>
    </div>

    <!--BANNER--->



    <!--OWN REASEARCH-->

    <div class="max-w-5xl px-4 mx-auto">
        <div class="py-16">
            <h2 class="text-center md:text-2xl text-xl font-bold pb-4 text-primary">Prefer to do Your Own Research</h2>
            <p class="text-base text-center text-gray-600">We sell exclusively through a dealer network who can you finds the right products for you home or property. </p>
            <p class="text-base font-bold text-center text-gray-600">To find an authorized dealer in your area, please enter your zip code right here</p>
            
            <div class="flex flex-wrap justify-center mt-7 md:px-8 lg:px-20 text-gray-600">
                <div class="md:w-1/2 w-full md:px-2">
                    <h4 class="text-sm pb-2.5">Zip Code</h4>
                    <div class="mb-6">
                        <input type="text" name="" id="" placeholder="Enter your zip code" class="rounded-sm border border-gray px-2 w-full h-10 pl-2">
                    </div>
                </div>

                <div class="md:w-1/2 w-full md:px-2">
                    <h4 class="text-sm pb-2.5">From</h4>
                    <div>
                        <select name="" id="" class="w-full h-10 border border-blue-800 rounded-md px-2 text-primary font-bold">
                            <option value="">15 miles</option>
                            <option value="">15 miles</option>
                            <option value="">15 miles</option>
                        </select>
                    </div>
                </div>
            </div>


            

            <div class="flex flex-wrap justify-center mt-7 md:px-8 lg:px-20 text-gray-600">

                <div class="w-full md:px-2">
                    <h4 class="text-sm md:pb-6 pb-3">Select the type of dealer you're looking for</h4>
                </div>

                <div class="md:w-1/2 w-full md:px-2">
                    <div class="pb-3">
                        <label class="text-base text-primary"><input type="checkbox" name="" id=""> Dealers with showrooms</label>
                    </div>

                    <div class="pb-3">
                        <label class="text-base text-primary"><input type="checkbox" name="" id=""> Dealers with homeowners</label>
                    </div>
                </div>

                <div class="md:w-1/2 w-full md:px-2">
                    <div class="pb-3">
                        <label class="text-base text-primary"><input type="checkbox" name="" id=""> Dealers for trade/industry professionals</label>
                    </div>

                    <div class="pb-3">
                        <label class="text-base text-primary"><input type="checkbox" name="" id=""> Dealers for international exports</label>
                    </div>
                </div>

                <div class="w-full md:px-2 mt-10">
                    <a href="/" class="rounded-md bg-primary text-white font-bold text-center py-4 block m-auto">Submit</a>
                </div>
            </div>

            
        </div>
    </div>

    <!--OWN REASEARCH-->


    <!---MAP-->

    <div class="max-w-5xl px-4 mx-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31647.95269391666!2d-149.89224542561507!3d61.20691980872838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c8966b30ae409b%3A0xab46dcebcd69b958!2sMountain%20View%2C%20Anchorage%2C%20AK%2C%20USA!5e0!3m2!1sen!2s!4v1626539910672!5m2!1sen!2s" width="975" height="450" class="max-w-full" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <!---MAP-->


    <!--SHOWROOMS SECTION--->

    <div class="max-w-5xl px-6 mx-auto my-16">
        <div class="flex items-center justify-between mb-4">
            <div class="flex">
                <h4 class="text-gray-600"> Showing </h4>
                <h5 class="text-primary font-bold pl-3">Dealers with showrooms</h5>
            </div>
            <div>
                <h4 class="text-gray-600 underline">Change</h4>
            </div>
        </div>


        <div class="flex justify-between md:flex-row flex-col md:text-left text-center 2xl:px-20 px-4 py-8 bg-gray-50">
            <div>
                <h4 class="text-primary font-bold ">PGT Test Dealer</h4>
                <p class="md:w-3/4 w-full text-sm text-gray-600 mb-4">632 West 6th Avenue Anchorage, Alaska 99501</p>
                <div class="flex items-center md:justify-start justify-center">
                  <div> <img src="/src/assets/phone.png" class="mr-2" alt=""> </div><span class="text-primary font-bold ">904-295-1020</span>
                </div>
            </div>
            <div class="md:text-right text-center">
                <div class="flex md:justify-end justify-center mb-4 md:mt-0 mt-4">
                    <img src="/src/assets/companylogo.png" alt="">
                </div>
                <div class="mt-8">
                    <a href="/" class="btn-outline inline-block sm:w-auto w-full mb-1 sm:mb-0">Directions</a>
                    <a href="/" class="btn-outline  sm:ml-4 inline-block sm:w-auto w-full mb-1 sm:mb-0">Live Chat</a>
                    <a href="/" class="leading-9 text-center border bg-primary hover:bg-white hover:text-primary rounded-md text-white sm:ml-4 lg:px-8 px-6 inline-block sm:w-auto w-full mb-1 sm:mb-0">Get quote</a>
                </div>
            </div>
        </div>


        <div class="flex justify-between md:flex-row flex-col md:text-left text-center 2xl:px-20 px-0 py-8 bg-white">
            <div>
                <h4 class="text-primary font-bold ">PGT Test Dealer</h4>
                <p class="md:w-3/4 w-full text-sm text-gray-600 mb-4">632 West 6th Avenue Anchorage, Alaska 99501</p>
                <div class="flex items-center md:justify-start justify-center">
                  <div> <img src="/src/assets/phone.png" class="mr-2" alt=""> </div><span class="text-primary font-bold ">904-295-1020</span>
                </div>
            </div>
            <div class="md:text-right text-center">
                <div class="flex md:justify-end justify-center mb-4 md:mt-0 mt-4">
                    <img src="/src/assets/companylogo.png" alt="">
                </div>
                <div class="mt-8">
                    <a href="/" class="btn-outline  inline-block sm:w-auto w-full mb-1 sm:mb-0">Directions</a>
                    <a href="/" class="btn-outline  sm:ml-4 inline-block sm:w-auto w-full mb-1 sm:mb-0">Live Chat</a>
                    <a href="/" class="leading-9 text-center border bg-primary hover:bg-white hover:text-primary rounded-md text-white sm:ml-4 lg:px-8 px-6 inline-block sm:w-auto w-full mb-1 sm:mb-0">Get quote</a>
                </div>
            </div>
        </div>

        <div class="flex justify-between md:flex-row flex-col md:text-left text-center 2xl:px-20 px-0 py-8 bg-gray-50">
            <div>
                <h4 class="text-primary font-bold ">PGT Test Dealer</h4>
                <p class="md:w-3/4 w-full text-sm text-gray-600 mb-4">632 West 6th Avenue Anchorage, Alaska 99501</p>
                <div class="flex items-center md:justify-start justify-center">
                  <div> <img src="/src/assets/phone.png" class="mr-2" alt=""> </div><span class="text-primary font-bold ">904-295-1020</span>
                </div>
            </div>
            <div class="md:text-right text-center">
                <div class="flex md:justify-end justify-center mb-4 md:mt-0 mt-4">
                    <img src="/src/assets/companylogo.png" alt="">
                </div>
                <div class="mt-8">
                    <a href="/" class="btn-outline  inline-block sm:w-auto w-full mb-1 sm:mb-0">Directions</a>
                    <a href="/" class="btn-outline  sm:ml-4 inline-block sm:w-auto w-full mb-1 sm:mb-0">Live Chat</a>
                    <a href="/" class="leading-9 text-center border bg-primary hover:bg-white hover:text-primary rounded-md text-white sm:ml-4 lg:px-8 px-6 inline-block sm:w-auto w-full mb-1 sm:mb-0">Get quote</a>
                </div>
            </div>
        </div>

        <div class="flex justify-between md:flex-row flex-col md:text-left text-center 2xl:px-20 px-0 py-8 bg-white">
            <div>
                <h4 class="text-primary font-bold ">PGT Test Dealer</h4>
                <p class="md:w-3/4 w-full text-sm text-gray-600 mb-4">632 West 6th Avenue Anchorage, Alaska 99501</p>
                <div class="flex items-center md:justify-start justify-center">
                  <div> <img src="/src/assets/phone.png" class="mr-2" alt=""> </div><span class="text-primary font-bold ">904-295-1020</span>
                </div>
            </div>
            <div class="md:text-right text-center">
                <div class="flex md:justify-end justify-center mb-4 md:mt-0 mt-4">
                    <img src="/src/assets/companylogo.png" alt="">
                </div>
                <div class="mt-8">
                    <a href="/" class="btn-outline  inline-block sm:w-auto w-full mb-1 sm:mb-0">Directions</a>
                    <a href="/" class="btn-outline  sm:ml-4 inline-block sm:w-auto w-full mb-1 sm:mb-0">Live Chat</a>
                    <a href="/" class="leading-9 text-center border bg-primary hover:bg-white hover:text-primary rounded-md text-white sm:ml-4 lg:px-8 px-6 inline-block sm:w-auto w-full mb-1 sm:mb-0">Get quote</a>
                </div>
            </div>
        </div>

        <div class="flex justify-between md:flex-row flex-col md:text-left text-center 2xl:px-20 px-0 py-8 bg-gray-50">
            <div>
                <h4 class="text-primary font-bold ">PGT Test Dealer</h4>
                <p class="md:w-3/4 w-full text-sm text-gray-600 mb-4">632 West 6th Avenue Anchorage, Alaska 99501</p>
                <div class="flex items-center md:justify-start justify-center">
                  <div> <img src="/src/assets/phone.png" class="mr-2" alt=""> </div><span class="text-primary font-bold ">904-295-1020</span>
                </div>
            </div>
            <div class="md:text-right text-center">
                <div class="flex md:justify-end justify-center mb-4 md:mt-0 mt-4">
                    <img src="/src/assets/companylogo.png" alt="">
                </div>
                <div class="mt-8">
                    <a href="/" class="btn-outline  inline-block sm:w-auto w-full mb-1 sm:mb-0">Directions</a>
                    <a href="/" class="btn-outline  sm:ml-4 inline-block sm:w-auto w-full mb-1 sm:mb-0">Live Chat</a>
                    <a href="/" class="leading-9 text-center border bg-primary hover:bg-white hover:text-primary rounded-md text-white sm:ml-4 lg:px-8 px-6 inline-block sm:w-auto w-full mb-1 sm:mb-0">Get quote</a>
                </div>
            </div>
        </div>
    </div>

    <!--SHOWROOMS SECTION--->


    <!---CIRCLE OF INNOVATIONS-->
    <div class="border-t py-12 lg:py-16">
        <div class="max-w-5xl px-6 mx-auto">
            <div>
                <img src="/src/assets/circle.png" class="m-auto" alt="">
            </div>
            <h2 class="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-primary font-bold text-center pt-10 pb-6">Circle Of Innovations</h2>
            <p class="md:max-w-4xl lg:text-xl md:text-lg text-sm w-full text-center m-auto text-gray-600">Each year,we honor exceptional dealers who haved showcased the highest dedication to serving their communities with products that are built for the everyday and a once in a lifetime.</p>
            <br>
            <p class="lg:text-xl md:text-lg text-sm text-center m-auto text-gray-600">This Program,The circle of Innovators,is divided into three tiers:gold,platinum and diamond.</p>
            <div class="items-center pt-20 pb-7">

                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/4">
                        <h3 class="tab" v-bind:class="{ active: isActive == 'Gold' }" @click="selectTab('Gold')">Gold Dealers</h3>
                        <h3 class="tab" v-bind:class="{ active: isActive == 'Platinum' }" @click="selectTab('Platinum')">Platinum Dealers</h3>
                        <h3 class="tab" v-bind:class="{ active: isActive == 'Diamond' }" @click="selectTab('Diamond')">Diamond Dealers</h3>
                    </div>

                    <div class="w-full md:w-3/4 flex flex-wrap items-start" v-if="isActive == 'Gold'">
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                    </div>
                    <div class="w-full md:w-3/4 flex flex-wrap items-start" v-if="isActive == 'Platinum'">
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                    </div>
                    <div class="w-full md:w-3/4 flex flex-wrap items-start" v-if="isActive == 'Diamond'">
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                        <div class="text-gray-600 text-sm w-1/3 lg:w-1/4 p-3 text-center"> PGT Test Dealer </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!---CIRCLE OF INNOVATIONS-->


    <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'




export default {
    components: {
        Header,
        Footer
    },
    props: {
        title: {
            type: String,
            default: 'Tab'
        }
    },
    data () {
        return {
            isActive: "Gold"
        }
    },
    mounted () {
        this.selectTab("Gold")
    },
    methods: {
        selectTab (i) {
            this.isActive = i;
        }
    }
}
</script>



<style>

</style>

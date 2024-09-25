<template>
    <div class="h-full w-full gradient">
        <div class="flex px-5 py-5">
            <h1 class="rubik text-2xl flex-auto"><span class="text-orange-400">My</span>Schedular</h1>
            
            <button class="font-sans font-bold px-2"><NuxtLink to="/signup">Log in</NuxtLink></button>
            <button class="bg-black text-white rounded-full font-sans font-bold px-4 py-2"><NuxtLink to="/signup">Sign up</NuxtLink></button>      
        </div>
        <div class="flex px-14 py-8 relative">
            <img class="w-[35rem] h-[35rem]" src="/public/schedulerpic.svg" alt="image of schedule">
            <h1 class="absolute right-64 top-36 modak text-center text-[30px] w-96">Simplify your college experience!</h1>
            <div class="absolute top-40 right-48">
                <img class="w-[30rem] h-[19rem]" src="/public/Union.svg" alt="chat bubble">
                <img class="w-[25rem] h-[15rem] absolute top-10 left-8" src="/public/MySchedular.svg" alt="Schedular">
            </div>
            <img class="w-[25rem] h-[15rem] absolute bottom-0 left-[600px]" src="/public/morebubble.svg" alt="more chat bubbles">
        </div>
        <div class="flex justify-center">
            <h1 class="righteous text-2xl text-center">We're here to help you succeed.<br/> <span class="speed">Graduate fast!</span></h1>
        </div>
        <div class="flex justify-center px-28 py-24 justify-between">
            <div>
                <img class="w-[19rem] h-[19rem]" src="/public/1stbtmimg.svg" alt="far left bottom image">
                <h1 class="text-center righteous text-xl">No need to worry<br/> about how it can be done.</h1>   
            </div>
            <div>
                <img class="w-[19rem] h-[19rem]" src="/public/middleimg.svg" alt="middle image">
                <h1 class="text-center righteous text-xl">Become a college graduate!</h1> 
            </div>
            <div>
                <img class="w-[19rem] h-[19rem]" src="/public/rightimg.svg" alt="right image">
                <h1 class="text-center righteous text-xl">Plan for success.</h1>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .gradient{
        
        background-color: rgb(209, 213, 219);
        background-image: radial-gradient(at 89% 5%, rgb(254, 215, 170) 0, transparent 54%);
    }
    .rubik{
        font-family: 'Rubik Glitch';
    }
    .modak{
        font-family: 'Modak'
    }
    .righteous{
        font-family: 'Righteous';
    }
    .speed{
        font-family: 'Faster One'
    }
</style>
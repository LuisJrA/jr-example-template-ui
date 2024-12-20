<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    
    let visible = false;
    
    onMount(() => {
        visible = true;
    });
</script>

<div class="flex flex-col justify-center items-center w-screen h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
    {#if visible}
        <h1 class="text-center text-5xl font-bold text-white" 
            in:fade={{ duration: 1000, delay: 100 }}>
            Welcome to <br> My Portfolio Website
        </h1>
    {/if}
</div>

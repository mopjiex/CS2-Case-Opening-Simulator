<script setup>
defineProps({
    keyCost: Number,
    skinValue: Number,
    profitLoss: Number,
});
</script>

<template>
    <div class="text-xl bg-[#6C5B7B] w-[600px] py-2 px-6">
        <h2>
            Сумма потраченных рублей на ключи:
            {{ keyCost }}руб
        </h2>
        <h2>
            Сумма стоимости выбитого дропа:
            {{ skinValue }}руб
        </h2>
        <h2>
            Насколько ушли в + или - :
            {{ profitLoss }}руб
        </h2>
    </div>
</template>

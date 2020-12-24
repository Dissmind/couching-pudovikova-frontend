import React from 'react'

import { createSlice } from '@reduxjs/toolkit';


export const slice = createSlice({
    name: 'program',
    initialState: {
        card: []
    },
    reducers: {
        fetchData: state => {

            state.card.push(
                {
                    cardTitle: 'Продажи',
                    cardType: 'VIP-формат',
                    list: [
                        'Психология продаж',
                        'Владение переговорами',
                        'Создание вечных отношений с клиентом',
                        'Ценности и боли клиентов'
                    ],
                    timeStudy: '12 месяцев',
                    price: '14 999',
                    themeNumber: 0
                },
                {
                    cardTitle: 'Продажи',
                    cardType: 'VIP-формат',
                    list: [
                        'Психология продаж',
                        'Владение переговорами',
                        'Создание вечных отношений с клиентом',
                        'Ценности и боли клиентов'
                    ],
                    timeStudy: '12 месяцев',
                    price: '9 999',
                    themeNumber: 1
                },
                {
                    cardTitle: 'Продажи',
                    cardType: 'Базовый формат',
                    list: [
                        'Психология продаж',
                        'Владение переговорами',
                        'Создание вечных отношений с клиентом',
                        'Ценности и боли клиентов'
                    ],
                    timeStudy: '12 месяцев',
                    price: '4 999',
                    themeNumber: 2
                }
            )
        }
    },
});

export const { fetchData } = slice.actions;

export const selectCards = state => state.counter.card;

export default slice.reducer;

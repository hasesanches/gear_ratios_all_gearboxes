const presets = [
    {
        id: 'custom_mod',
        label: 'Кастомная коробка',
        model: 'Getrag M66 Ford / Volvo',
        main: 4.529,
        gears: [3.39, 1.91, 1.27, 0.95, 0.77, 0.65],
        redline: 5500,
        tire: { width: 215, aspect: 45, rim: 17 }
    },
    {
        id: 'ford_kuga_25t',
        label: 'Ford Kuga 2.5T MT',
        model: 'Getrag M66 Ford / Volvo',
        main: 4.529,
        gears: [3.39, 1.91, 1.27, 0.95, 0.77, 0.65],
        redline: 5500,
        tire: { width: 235, aspect: 45, rim: 19 }
    },
    {
        id: 'ford_focus_st_25t',
        label: 'Ford Focus 2 ST 2.5T MT',
        model: 'Getrag M66 Ford / Volvo',
        main: 4,
        gears: [3.385, 2.05, 1.433, 1.088, 0.868, 0.7],
        redline: 5500,
        tire: { width: 225, aspect: 40, rim: 19 }
    },
    {
        id: 'ford_mondeo_25t',
        label: 'Ford Mondeo 2.5T MT',
        model: 'Getrag M66 Ford / Volvo',
        main: 4,
        gears: [3.385, 1.905, 1.267, 0.949, 0.755, 0.652],
        redline: 5500,
        tire: { width: 235, aspect: 45, rim: 19 }
    },
    {
        id: 'ford_mondeo_22_tdci',
        label: 'Ford Mondeo 2.2 TDCi MT',
        model: 'Getrag M66 Ford / Volvo',
        main: 4,
        gears: [3.385, 1.905, 1.193, 0.837, 0.644, 0.53],
        redline: 4500,
        tire: { width: 235, aspect: 45, rim: 19 }
    },
    {
        id: 'volvo_s40_25t',
        label: 'Volvo S40 2.5T MT',
        model: 'Getrag M66 Ford / Volvo',
        main: 4,
        gears: [3.385, 1.905, 1.267, 0.949, 0.775, 0.652],
        redline: 5500,
        tire: { width: 235, aspect: 45, rim: 19 }
    },
    {
        id: 'volvo_s60r_v70r_25t',
        label: 'Volvo S60R / V70R 2.5T MT',
        model: 'Getrag M66 Ford / Volvo',
        main: 3.77,
        gears: [3.385, 2.05, 1.433, 1.088, 0.868, 0.7],
        redline: 5500,
        tire: { width: 235, aspect: 45, rim: 19 }
    },
    {
        id: 'volvo_xc60_24d',
        label: 'Volvo XC60 2.4 TDCi MT',
        model: 'Getrag M66 Ford / Volvo',
        main: 4.267,
        gears: [3.385, 1.905, 1.194, 0.838, 0.652, 0.54],
        redline: 4500,
        tire: { width: 235, aspect: 45, rim: 19 }
    },
    {
        id: 'volvo_v70_24d5',
        label: 'Volvo V70 2.4 TDCi MT',
        model: 'Getrag M66 Ford / Volvo',
        main: 4.53,
        gears: [3.75, 1.905, 1.194, 0.838, 0.652, 0.54],
        redline: 4500,
        tire: { width: 235, aspect: 45, rim: 19 }
    },
    {
        id: 'volvo_xc90_d5',
        label: 'Volvo XC90 2.4 TDCi MT',
        model: 'Getrag M66 Ford / Volvo',
        main: 4.786,
        gears: [3.75, 1.905, 1.194, 0.838, 0.652, 0.54],
        redline: 4500,
        tire: { width: 235, aspect: 45, rim: 19 }
    },
    {
        id: 'volvo_xc90_25t',
        label: 'Volvo XC90 2.5T MT',
        model: 'Getrag M66 Ford / Volvo',
        main: 4.786,
        gears: [3.39, 1.91, 1.27, 0.95, 0.77, 0.65],
        redline: 5500,
        tire: { width: 235, aspect: 45, rim: 19 }
    },
    {
        id: 'nissan_juke_16t',
        label: 'Nissan Juke 1.6T MT',
        model: 'Reno JR5 / Nissan RS5F92R',
        main: 4.214,
        gears: [3.364, 1.947, 1.393, 1.114, 0.914, 0.767],
        redline: 5500,
        tire: { width: 225, aspect: 45, rim: 18 }
    },
    {
        id: 'nissan_juke_16',
        label: 'Nissan Juke / Qashqai 1.6 MT',
        model: 'Reno JR5 / Nissan RS5F92R',
        main: 4.5,
        gears: [3.727, 2.048, 1.393, 1.097, 0.892],
        redline: 5500,
        tire: { width: 225, aspect: 45, rim: 18 }
    },
    {
        id: 'nissan_tiida_16',
        label: 'Nissan Tiida / Note 1.6 MT',
        model: 'Reno JR5 / Nissan RS5F91R',
        main: 4.067,
        gears: [3.727, 2.048, 1.393, 1.097, 0.892],
        redline: 5500,
        tire: { width: 215, aspect: 45, rim: 17 }
    },
    {
        id: 'nissan_scenic_3_14t',
        label: 'Nissan Scenic 3 1.4T MT',
        model: 'Reno Tl4 / Nissan RS6F94R',
        main: 4.57,
        gears: [3.73, 2.11, 1.45, 1.09, 0.87, 0.73],
        redline: 5500,
        tire: { width: 205, aspect: 50, rim: 17 }
    },
    {
        id: 'nissan_qashqai_12t',
        label: 'Nissan Qashqai / Captur 1.2T MT',
        main: 4.214,
        model: 'Reno Tl4 / Nissan RS6F94R',
        gears: [3.727, 1.947, 1.323, 0.975, 0.763, 0.638],
        redline: 5500,
        tire: { width: 215, aspect: 65, rim: 17 }
    },
    {
        id: 'nissan_juke_12t',
        label: 'Nissan Juke 1.2T MT',
        main: 4.214,
        model: 'Reno Tl4 / Nissan RS6F94R',
        gears: [3.364, 1.947, 1.393, 1.114, 0.914, 0.767],
        redline: 5500,
        tire: { width: 225, aspect: 45, rim: 18 }
    },
    {
        id: 'nissan_megane_4_12t',
        label: 'Nissan Megane 4 1.2T MT',
        model: 'Reno Tl4 / Nissan RS6F94R',
        main: 4.214,
        gears: [3.916, 2.428, 1.435, 1.021, 0.866, 0.702],
        redline: 5500,
        tire: { width: 225, aspect: 40, rim: 18 }
    }
]

export default presets;

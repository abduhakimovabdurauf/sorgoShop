export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 'M01',
        name: {
          en: 'Standard (M01)',
          uz: 'Standart (M01)',
          ru: 'Стандарт (M01)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread. 2-stitched. Mini.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip. 2-tikuvli. Mini.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить. 2-х прошивной. Мини.'
        },
        imagePath: '/assets/images/products/M01.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'M02',
        name: {
          en: 'Standard (M02)',
          uz: 'Standart (M02)',
          ru: 'Стандарт (M02)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread; high-quality polyethylene film. 3-beam. Small.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip; sifatli polietilen plyonka. 3-nurlik. Kichik.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить; качественная полиэтиленовая пленка. 3-х лучевой. Маленький.'
        },
        imagePath: '/assets/images/products/M02.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'M03',
        name: {
          en: 'Standard (M03)',
          uz: 'Standart (M03)',
          ru: 'Стандарт (M03)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread. 2-stitched. Small.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip. 2-tikuvli. Kichik.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить. 2-х прошивной. Маленький.'
        },
        imagePath: '/assets/images/products/M03.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'M04',
        name: {
          en: 'Standard (M04)',
          uz: 'Standart (M04)',
          ru: 'Стандарт (M04)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread; high-quality polyethylene film. 3-stitched. Small.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip; sifatli polietilen plyonka. 3-tikuvli. Kichik.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить; качественная полиэтиленовая пленка. 3-х прошивной. Маленький.'
        },
        imagePath: '/assets/images/products/M04.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'M05',
        name: {
          en: 'Standard (M05)',
          uz: 'Standart (M05)',
          ru: 'Стандарт (M05)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread. 3-stitched. Standard.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip. 3-tikuvli. Standart.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить. 3-х прошивной. Стандарт.'
        },
        imagePath: '/assets/images/products/M05.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'M06',
        name: {
          en: 'Standard (M06)',
          uz: 'Standart (M06)',
          ru: 'Стандарт (M06)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread. 5-stitched. Large.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip. 5-tikuvli. Katta.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить. 5-ти прошивной. Большой.'
        },
        imagePath: '/assets/images/products/M06.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'M07',
        name: {
          en: 'Standard (M07)',
          uz: 'Standart (M07)',
          ru: 'Стандарт (M07)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread. 6-stitched. Large.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip. 6-tikuvli. Katta.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить. 6-ти прошивной. Большой.'
        },
        imagePath: '/assets/images/products/M07.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'L01',
        name: {
          en: 'Classic (L01)',
          uz: 'Klassik (L01)',
          ru: 'Classic (L01)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; high-quality steel wire. 3-beam. Mini (Automotive).',
          uz: 'Materiallar: ekologik toza jo\'xori; sifatli po\'lat sim. 3-nurlik. Mini (Avtomobil uchun).',
          ru: 'Материалы: экологически чистый сорго; качественная стальная проволока. 3-х лучевой. Мини (Автомобильный).'
        },
        imagePath: '/assets/images/products/L01.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'L02',
        name: {
          en: 'Classic (L02)',
          uz: 'Klassik (L02)',
          ru: 'Classic (L02)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; high-quality steel wire. 3-beam. Small.',
          uz: 'Materiallar: ekologik toza jo\'xori; sifatli po\'lat sim. 3-nurlik. Kichik.',
          ru: 'Материалы: экологически чистый сорго; качественная стальная проволока. 3-х лучевой. Маленький.'
        },
        imagePath: '/assets/images/products/L02.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'L03',
        name: {
          en: 'Classic (L03)',
          uz: 'Klassik (L03)',
          ru: 'Classic (L03)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; high-quality steel wire. 5-beam. Small.',
          uz: 'Materiallar: ekologik toza jo\'xori; sifatli po\'lat sim. 5-nurlik. Kichik.',
          ru: 'Материалы: экологически чистый сорго; качественная стальная проволока. 5-ти лучевой. Маленький.'
        },
        imagePath: '/assets/images/products/L03.jpg'
      },
      {
        id: 'L04',
        name: {
          en: 'Classic (L04)',
          uz: 'Klassik (L04)',
          ru: 'Classic (L04)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; high-quality steel wire; high-quality polyethylene film. 3-beam. Large.',
          uz: 'Materiallar: ekologik toza jo\'xori; sifatli po\'lat sim; sifatli polietilen plyonka. 3-nurlik. Katta.',
          ru: 'Материалы: экологически чистый сорго; качественная стальная проволока; качественная полиэтиленовая пленка. 3-х лучевой. Большой.'
        },
        imagePath: '/assets/images/products/L04.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'L05',
        name: {
          en: 'Classic (L05)',
          uz: 'Klassik (L05)',
          ru: 'Classic (L05)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread. 4-beam. Large.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip. 4-nurlik. Katta.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить. 4-х лучевой. Большой.'
        },
        imagePath: '/assets/images/products/L05.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'L06',
        name: {
          en: 'Classic (L06)',
          uz: 'Klassik (L06)',
          ru: 'Classic (L06)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread; high-quality polyethylene film. 4-beam. Large.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip; sifatli polietilen plyonka. 4-nurlik. Katta.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить; качественная полиэтиленовая пленка. 4-х лучевой. Большой.'
        },
        imagePath: '/assets/images/products/L06.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'L07',
        name: {
          en: 'Classic (L07)',
          uz: 'Klassik (L07)',
          ru: 'Classic (L07)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread; high-quality polyethylene film. 5-beam. Large.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip; sifatli polietilen plyonka. 5-nurlik. Katta.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить; качественная полиэтиленовая пленка. 5-ти лучевой. Большой.'
        },
        imagePath: '/assets/images/products/L07.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'A01',
        name: {
          en: 'Lux (A01)',
          uz: 'Lyuks (A01)',
          ru: 'Lux (A01)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread; high-quality polyethylene film. 3-stitched. 3-beam. Standard.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip; sifatli polietilen plyonka. 3-tikuvli. 3-nurlik. Standart.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить; качественная полиэтиленовая пленка. 3-х прошивной. 3-х лучевой. Стандарт.'
        },
        imagePath: '/assets/images/products/A01.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'A02',
        name: {
          en: 'Lux (A02)',
          uz: 'Lyuks (A02)',
          ru: 'Lux (A02)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread. LUX. 5-stitched. 3-beam. Standard.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip. LUX. 5-tikuvli. 3-nurlik. Standart.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить. LUX. 5-ти прошивной. 3-х лучевой. Стандарт.'
        },
        imagePath: '/assets/images/products/A02.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'A03',
        name: {
          en: 'Lux (A03)',
          uz: 'Lyuks (A03)',
          ru: 'Lux (A03)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread. 5-stitched. 4-beam. Large.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip. 5-tikuvli. 4-nurlik. Katta.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить. 5-ти прошивной. 4-х лучевой. Большой.'
        },
        imagePath: '/assets/images/products/A03.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'A04',
        name: {
          en: 'Lux (A04)',
          uz: 'Lyuks (A04)',
          ru: 'Lux (A04)'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread. 5-stitched. 3-beam.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip. 5-tikuvli. 3-nurlik.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить. 5-ти прошивной. 3-х лучевой.'
        },
        imagePath: '/assets/images/products/A04.jpg' // Siz to'g'irlaysiz
      },
      {
        id: 'A05',
        name: {
          en: 'Lux (A05) Broom on a handle',
          uz: 'Lyuks (A05) Dasta bilan supurgi',
          ru: 'Lux (A05) Метла на черенке'
        },
        description: {
          en: 'Materials: environmentally friendly sorghum; durable polypropylene thread; wooden stick. 5-stitched. Large.',
          uz: 'Materiallar: ekologik toza jo\'xori; mustahkam polipropilen ip; yog\'och dasta. 5-tikuvli. Katta.',
          ru: 'Материалы: экологически чистый сорго; прочная полипропиленовая нить; деревянная палка. 5-ти прошивной. Большой.'
        },
        imagePath: '/assets/images/products/A05.jpg' // Siz to'g'irlaysiz
      }
    ]
  })
});
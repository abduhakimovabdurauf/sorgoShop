export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 'M01',
        category: 'Standard',
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
        imagePath: '/products/1.png'
      },
      {
        id: 'M02',
        category: 'Standard',
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
        imagePath: '/products/2.png'
      },
      {
        id: 'M03',
        category: 'Standard',
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
        imagePath: '/products/3.png'
      },
      {
        id: 'M04',
        category: 'Standard',
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
        imagePath: '/products/4.png'
      },
      {
        id: 'M05',
        category: 'Standard',
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
        imagePath: '/products/5.png'
      },
      {
        id: 'M06',
        category: 'Standard',
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
        imagePath: '/products/6.png'
      },
      {
        id: 'M07',
        category: 'Standard',
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
        imagePath: '/products/7.png'
      },
      {
        id: 'L01',
        category: 'Classic',
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
        imagePath: '/products/8.png'
      },
      {
        id: 'L02',
        category: 'Classic',
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
        imagePath: '/products/9.png'
      },
      {
        id: 'L03',
        category: 'Classic',
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
        imagePath: '/products/10.jpg'
      },
      {
        id: 'L04',
        category: 'Classic',
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
        imagePath: '/products/11.png'
      },
      {
        id: 'L05',
        category: 'Classic',
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
        imagePath: '/products/12.png'
      },
      {
        id: 'L06',
        category: 'Classic',
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
        imagePath: '/products/13.png'
      },
      {
        id: 'L07',
        category: 'Classic',
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
        imagePath: '/products/14.png'
      },
      {
        id: 'A01',
        category: 'Lux',
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
        imagePath: '/products/15.png'
      },
      {
        id: 'A02',
        category: 'Lux',
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
        imagePath: '/products/16.png'
      },
      {
        id: 'A03',
        category: 'Lux',
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
        imagePath: '/products/17.png'
      },
      {
        id: 'A04',
        category: 'Lux',
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
        imagePath: '/products/18.png'
      },
      {
        id: 'A05',
        category: 'Lux',
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
        imagePath: '/products/20.png'
      }
    ]
  }),
  getters: {
    getProductsByCategory: (state) => {
      return (category) => state.products.filter(product => product.category === category);
    }
  }

});
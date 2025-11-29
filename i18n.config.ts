export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  globalInjection: true,
  messages: {
    uz: {
      navbar: {
        home: 'Bosh sahifa',
        product: 'Mahsulotlar',
        about: 'Biz haqimizda',
        contact: 'Aloqa',
        language: 'Til',
        english: 'Inglizcha',
        russian: 'Ruscha',
        uzbek: 'O‘zbekcha',
        openMenu: 'Menyuni ochish',
      },
      vatchAll: 'Barchasini ko‘rish',
      downloadCatalog: 'Katalogni yuklab olish',
      heroSection: {
        intro: "SORGO TRADE - O‘zbekistondagi eng yirik sorgo supurgilari ishlab chiqaruvchisi",
        text: "Biz tabiiy sorgoni mustahkam va qulay supurgilarga aylantiramiz, ular sifati va ishonchliligi bilan qadrlanadi. 20 dan ortiq model, zamonaviy ishlab chiqarish, qo‘lda yig‘ish va qat’iy sifat nazorati — barchasi sizga kechikishlar va ortiqcha to‘lovlarsiz barqaror yetkazib berishni ta’minlash uchun. Biz MDH va Yevropaning 10 dan ortiq davlati bilan muvaffaqiyatli hamkorlik qilamiz, hamkorlarimizga foydali shartlar va barqaror sifatni kafolatlaymiz."
      },

      offerSection: {
        title: "BIZNING IMKONIYATLARIMIZ",
        offer1: "Sorgo yetishtirish — O‘zimizga tegishli dalalar",
        offer2: "Xomashyo yetkazib berish — Barqaror xomashyo ta’minoti",
        offer3: "Katta tanlov — Keng assortiment",
        offer4: "MDH mamlakatlariga eksport — MDH va Yevropaga eksport"
      },
      advantagesSection: {
        title: "BIZNING RAQOBATDOSH USTUNLIKLARIMIZ",
        advantage1: "Sifat kafolati",
        advantage2: "Buyurtmani tezkor rasmiylashtirish",
        advantage3: "20+ mahsulot modeli",
        advantage4: "Mijozga mos individual dizayn"
      },
      bestSellers: {
        title: "BIZNING MAHSULOTLARIMIZ",
        1: {
          name: "LUX A01",
          desc: "LUX A01 «Balalayka» — uch qanotli, uch qator tikilgan klassik supurgi. Yillar davomida sinovdan o‘tgan an’anaviy shakl va avlodlar ishonchini qozongan ishonchli sifat."
        },
        2: {
          name: "Classic L06",
          desc: "Classic L06 — Markaziy Osiyo va ko‘plab mamlakatlar uchun an’anaviy simli klassik supurgi. To‘rt qanotli konstruksiya mustahkamlik va uzoq xizmat qilishni ta’minlaydi, shakli va materiali esa o‘n yilliklar davomida sinovdan o‘tgan."
        },
        3: {
          name: "LUX A02",
          desc: "LUX A02 — uch qanotli, uch qator tikilgan to‘g‘ri shaklli supurgi. Kundalik ishlatishda ham mustahkamligini va samaradorligini saqlaydi, qulay va amaliy."
        },
        4: {
          name: "LUX A05",
          desc: "LUX A05 — yog‘och (qarag‘ay) sopli besh qator tikilgan supurgi. Yuqori sifatli sorgodan tayyorlangan, uzoq muddat xizmat qiladi va ishlatishda qulay. Ko‘cha, hovli va katta ochiq maydonlarni supurish uchun ideal bo‘lib, mustahkamlikni tartibli va chiroyli ko‘rinish bilan uyg‘unlashtiradi."
        }
      },
      footer: {
        address: "Namangan, Kosonsoy, Chorbog‘",
        contactTitle: "Raqamingizni qoldiring va biz siz bilan bog'lanamiz",
        emailPlaceholder: "Sizning telefon raqamingiz",
        send: "Yuborish",
        sentSuccess: "Sizning xabaringiz yuborildi!",
        error: "Xatolik yuz berdi. Qayta urinib ko‘ring.",
        menu: {
          home: "Bosh sahifa",
          product: "Mahsulotlar",
          about: "Biz haqimizda",
          contact: "Aloqa",
        },
        links: {
          faq: "Ko‘p so‘raladigan savollar",
          shipping: "Yetkazib berish va qaytarish",
          wholesale: "Ulgurji va hamkorlik",
          terms: "Foydalanish shartlari"
        }
      },
      cart: {
        title: "Savatcha",
        remove: "Olib tashlash",
        emptyLine1: "Savat biroz xafa ko'rinadi...",
        emptyLine2: "Uni yangi xaridlar bilan quvontiring! 🛒",
        totalItems: "Jami mahsulotlar",
        checkout: "Buyurtma berish",
        modalTitle: "Buyurtma ma'lumotlari",
        name: "Ismingiz",
        phone: "Telefon raqamingiz",
        email: "Email manzilingiz",
        namePlaceholder: "Ism kiriting",
        phonePlaceholder: "*Ixtiyoriy",
        emailPlaceholder: "Emailni kiriting",
        cancel: "Bekor qilish",
        confirm: "Buyurtma berish",
        success: "Buyurtma muvaffaqiyatli yuborildi! Biz siz bilan bog'lanamiz!",
        error: "Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.",
        sending: 'Yuborilmoqda...',
        added: 'Mahsulot savatga qo‘shildi!',
      },
      about: {
        title: "Biz haqimizda",
        intro: "Sorgo Trade — ekologik toza sorgodan supurgi va ko‘chalar supuradigan supurgilar ishlab chiqaruvchi zamonaviy kompaniya. Biz 2018-yildan beri faoliyat yuritamiz va an’ana hamda zamonaviy texnologiyalarni uyg‘unlashtirgan mahsulotlar taklif qilamiz.",
        productionTitle: "Ishlab chiqarish",
        productionText: "Biz sorgoni o‘z dalalarimizda yetishtiramiz, xom ashyoni sinchkovlik bilan tanlab, tozalaymiz. Supurgi to‘qishda ustalarning qo‘l mehnatini ham, zamonaviy uskunalarni ham qo‘llaymiz, bu esa aniq tikuv va yuqori mustahkamlikni ta’minlaydi. Bunday yondashuv an’anaviy sifatni saqlab qolish va ishlab chiqarish samaradorligini oshirishga yordam beradi.",
        exportTitle: "Eksport",
        exportText: "Mahsulotimiz Belarus, Rossiya, Ozarbayjon, Gruziya, Armaniston, Ukraina, Qozog‘iston, Tojikiston, Qirg‘iziston, Turkiya, Litva, Polsha va boshqa 10 dan ortiq davlatlarga yetkazib beriladi. Biz barqaror yetkazib berish, ishonchli logistika va har bir mijozga individual yondashuvni kafolatlaymiz.",
        offerTitle: "Biz nima taklif qilamiz",
        offerText: "Sorgo Trade avtomobil uchun supurgilardan tortib xo‘jalik supurgilarigacha keng assortimentni taklif qiladi. Biz barqaror sifat, halol narx va individual yondashuvni ta’minlaymiz. Bizning missiyamiz — qo‘l mehnati va zamonaviy sifat standartlarini birlashtirgan mahsulotlar yaratish."
      },
      contact: {
        title: 'Bog`lanish',
        name: 'Ismingiz',
        email: 'Email',
        message: 'Xabaringiz',
        send: 'Yuborish',
        sending: 'Yuborilmoqda...',
        success: 'Xabaringiz yuborildi!',
        error: 'Xatolik yuz berdi. Qayta urinib ko‘ring.'
      },
      contactSection: {
        commonContact: "Umumiy aloqa",
        generalDirector: "Muhammad Bobur — Bosh direktor",
        manager: "Usmonxonov Xojiakbar - Manager",
      },
      addToCart: "Savatchaga qo'shish"

    },
    ru: {
      navbar: {
        home: 'Главная',
        product: 'Продукты',
        about: 'О нас',
        contact: 'Контакты',
        language: 'Язык',
        english: 'Английский',
        russian: 'Русский',
        uzbek: 'Узбекский',
        openMenu: 'Открыть меню',
      },
      vatchAll: 'Посмотреть все',
      downloadCatalog: 'Скачать каталог',
      heroSection: {
        intro: "SORGO TRADE - Крупнейший производитель веников из сорго в Узбекистане",
        text: "Мы превращаем натуральное сорго в долговечные и удобные веники, которые ценят за качество и надёжность. Более 20 моделей, современное производство, ручная сборка и строгий контроль качества — всё ради того, чтобы вы получали стабильные поставки без задержек и переплат. Мы успешно работаем с более чем 10 странами СНГ и Европы, обеспечивая нашим партнёрам выгодные условия и предсказуемое качество."
      },
      offerSection: {
        title: "НАШИ ВОЗМОЖНОСТИ",
        offer1: "Выращивание сорго - Собственные поля",
        offer2: "Поставка сырья - Стабильные поставки сырья",
        offer3: "Большой выбор - большой ассортимент",
        offer4: "Экспорт в страны СНГ - Экспорт в СНГ и Европу",
      },
      advantagesSection: {
        title: "НАШИ КОНКУРЕНТНЫЕ ПРЕИМУЩЕСТВА",
        advantage1: "Гарантия качества",
        advantage2: "Быстрое оформление заказа",
        advantage3: "20+ моделей продукции",
        advantage4: "Индивидуальный дизайн под клиента",
      },
      footer: {
        address: "Узбекистан, Ташкент, улица Зульфия 22",
        contactTitle: "Оставьте номер и мы свяжемся с вами",
        emailPlaceholder: "Ваш номер телефона",
        send: "Отправить",
        sentSuccess: "Ваше сообщение отправлено!",
        error: "Что-то пошло не так. Пожалуйста, попробуйте ещё раз.",
        menu: {
          home: "Главная",
          product: "Продукты",
          about: "О нас",
          contact: "Контакты",
        },
        links: {
          faq: "Часто задаваемые вопросы",
          shipping: "Доставка и возврат",
          wholesale: "Оптовая торговля",
          terms: "Условия использования"
        }
      },
      cart: {
        title: "Корзина",
        remove: "Удалить",
        emptyLine1: "Похоже, корзина немного грустит...",
        emptyLine2: "Порадуйте её новыми покупками! 🛒",
        totalItems: "Всего товаров",
        checkout: "Оформить заказ",
        modalTitle: "Информация о заказе",
        name: "Ваше имя",
        phone: "Ваш номер телефона",
        email: "Ваш email",
        namePlaceholder: "Введите имя",
        phonePlaceholder: "*Необязательный",
        emailPlaceholder: "Введите email",
        cancel: "Отмена",
        confirm: "Оформить заказ",
        success: "Ваш заказ успешно отправлен! Мы свяжемся с вами!",
        error: "Произошла ошибка. Пожалуйста, попробуйте позже.",
        sending: 'Отправка...',
        added: 'Товар добавлен в корзину!',
      },
      about: {
        title: "О нас",
        intro: "Sorgo Trade — современный производитель веников и метёл из экологически чистого сорго. Мы работаем с 2018 года и предлагаем продукцию, которая сочетает традиции и новейшие технологии.",
        productionTitle: "Производство",
        productionText: "Мы выращиваем сорго на собственных полях, тщательно отбираем и очищаем сырьё. Для плетения используем как ручной труд мастеров, так и современное оборудование, обеспечивая точную прошивку и высокую прочность изделий. Такой подход позволяет сохранять традиционное качество и повышать производительность.",
        exportTitle: "Экспорт",
        exportText: "Наша продукция поставляется более чем в 10 стран, включая Белоруссию, Россию, Азербайджан, Грузию, Армению, Украину, Казахстан, Таджикистан, Киргизию, Турцию, Литву, Польшу  и другие. Мы гарантируем стабильные поставки, надёжную логистику и индивидуальный подход к каждому клиенту.",
        offerTitle: "Что мы предлагаем",
        offerText: "Sorgo Trade предлагает широкий ассортимент веников: от автомобильных до хозяйственных моделей. Мы обеспечиваем стабильное качество, честные цены и индивидуальный подход. Наша миссия — создавать продукцию, которая сочетает в себе ручной труд и современные стандарты качества."
      },
      bestSellers: {
        title: "НАША ПРОДУКЦИЯ",
        1:{
          name: "LUX A01",
          desc: "LUX A01 «Балалайка» — классический трёхлучевой, трёхпрошивной веник. Традиционная форма, проверенная годами, и надёжное качество, которому доверяют поколениями"
        },
        2:{
          name: "Classic L06",
          desc: "Classic L06 — традиционный для Средней Азии и многих стран классический веник с проволокой. Четырёхлучевая конструкция обеспечивает прочность и долговечность, а форма и материалы проверены десятилетиями использования."
        },
        3:{
          name: "LUX A02",
          desc: "LUX A02 — трёхлучевой, трёхпрошивной веник с прямой формо. Практичный и удобный в работе, сохраняет долговечность и эффективность при ежедневном использовании."
        },
        4:{
          name: "LUX A05",
          desc: "LUX A05 — пяти прошивная метла на деревянном черенке из сосны. Изготовлена из высокосортного сорго, долговечна и удобна в работе. Идеальна для подметания улиц, дворов и больших открытых площадок, сочетает прочность с аккуратным и эстетичным видом."
        },
      },
      contact: {
        title: 'Связаться с нами',
        name: 'Ваше имя',
        email: 'Электронная почта',
        message: 'Ваше сообщение',
        send: 'Отправить',
        sending: 'Отправка...',
        success: 'Ваше сообщение было отправлено!',
        error: 'Что-то пошло не так. Пожалуйста, попробуйте снова.'
      },
      contactSection: {
        commonContact: "Общая связь",
        generalDirector: "Мухаммад Бобур — генеральный директор",
        manager: "Усмонхонов Ходжиакбар - менеджер",
      },
      addToCart: "Добавить в корзину"



    },
    en: {
      navbar: {
        home: 'Home',
        product: 'Products',
        about: 'About Us',
        contact: 'Contact',
        language: 'Language',
        english: 'English',
        russian: 'Russian',
        uzbek: 'Uzbek',
        openMenu: 'Open menu',
      },
      vatchAll: 'View All',
      downloadCatalog: 'Download Catalog',
      heroSection: {
        intro: "SORGO TRADE - The largest sorghum broom manufacturer in Uzbekistan",
        text: "We transform natural sorghum into durable and convenient brooms valued for their quality and reliability. With over 20 models, modern production, handcrafted assembly, and strict quality control, we ensure stable deliveries without delays or overpayments. We successfully cooperate with more than 10 countries across the CIS and Europe, providing our partners with favorable terms and consistent quality."
      },
      offerSection: {
        title: "OUR CAPABILITIES",
        offer1: "Sorghum cultivation — Our own fields",
        offer2: "Raw material supply — Stable raw material deliveries",
        offer3: "Wide selection — Large assortment",
        offer4: "Export to CIS countries — Export to the CIS and Europe"
      },
      advantagesSection: {
        title: "OUR COMPETITIVE ADVANTAGES",
        advantage1: "Quality guarantee",
        advantage2: "Fast order processing",
        advantage3: "20+ product models",
        advantage4: "Custom design tailored to the client"
      },
      bestSellers: {
        title: "OUR PRODUCTS",
        1: {
          name: "LUX A01",
          desc: "LUX A01 'Balalaika' — a classic three-strand, triple-stitched broom. A traditional shape tested over the years and reliable quality trusted by generations."
        },
        2: {
          name: "Classic L06",
          desc: "Classic L06 — a traditional wire broom common in Central Asia and many other countries. Its four-strand construction ensures durability and longevity, while its shape and materials have been proven over decades of use."
        },
        3: {
          name: "LUX A02",
          desc: "LUX A02 — a three-strand, triple-stitched broom with a straight shape. Practical and convenient to use, it maintains durability and efficiency even with daily use."
        },
        4: {
          name: "LUX A05",
          desc: "LUX A05 — a five-stitched broom with a pine wooden handle. Made from high-grade sorghum, it is durable and comfortable to work with. Ideal for sweeping streets, yards, and large open areas, combining strength with a neat and aesthetic appearance."
        }
      },
      footer: {
        address: "Namangan, Kosonsoy, Chorbog",
        contactTitle: "Leave your number and we will contact you",
        emailPlaceholder: "Your phone number",
        send: "Send",
        sentSuccess: "Your message has been sent!",
        error: "Something went wrong. Please try again.",
        menu: {
          home: "Home",
          product: "Product",
          about: "About Us",
          contact: "Contact Us",
        },
        links: {
          faq: "FAQ",
          shipping: "Shipping & Returns",
          wholesale: "Wholesale & Trade",
          terms: "Terms & Conditions"
        }
      },
      cart: {
        title: "Shopping Cart",
        remove: "Remove",
        emptyLine1: "Your cart looks a bit sad...",
        emptyLine2: "Cheer it up with some new items! 🛒",
        totalItems: "Total items",
        checkout: "Proceed to Checkout",
        modalTitle: "Order Information",
        name: "Your Name",
        phone: "Phone Number",
        email: "Your Email",
        namePlaceholder: "Enter name",
        phonePlaceholder: "Optional",
        emailPlaceholder: "Enter email",
        cancel: "Cancel",
        confirm: "Place Order",
        success: "Your order has been successfully sent! We will contact you!",
        error: "An error occurred. Please try again later.",
        sending: 'Sending...',
        added: 'Product added to cart!',
      },
      about: {
        title: "About Us",
        intro: "Sorgo Trade is a modern manufacturer of brooms and sweepers made from eco-friendly sorghum. Since 2018, we have been offering products that combine tradition with the latest technologies.",
        productionTitle: "Production",
        productionText: "We grow sorghum in our own fields, carefully selecting and cleaning the raw materials. For weaving, we use both skilled manual labor and modern equipment, ensuring precise stitching and high durability. This approach helps preserve traditional quality while increasing productivity.",
        exportTitle: "Export",
        exportText: "Our products are supplied to more than 10 countries, including Belarus, Russia, Azerbaijan, Georgia, Armenia, Ukraine, Kazakhstan, Tajikistan, Kyrgyzstan, Turkey, Lithuania, Poland, and others. We guarantee stable deliveries, reliable logistics, and an individual approach to each client.",
        offerTitle: "What We Offer",
        offerText: "Sorgo Trade offers a wide range of brooms — from car brooms to household models. We ensure consistent quality, fair prices, and a personalized approach. Our mission is to create products that combine craftsmanship with modern quality standards."
      },
      contact: {
        title: 'Contact Us',
        name: 'Your Name',
        email: 'Email',
        message: 'Your Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Your message has been sent!',
        error: 'Something went wrong. Please try again.'
      },
      contactSection: {
        commonContact: "Common Contact",
        generalDirector: "Muhammad Bobur — General Director",
        manager: "Usmonxonov Xojiakbar - Manager",
      },
      addToCart: "Add to Cart"
    }
  }
}))

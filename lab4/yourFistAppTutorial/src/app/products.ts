export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  addressUrl: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Бумажные салфетки Карина DOSTYQ 200 шт',
    price: 390,
    description: 'Белые однослойные салфетки из 100% целлюлозы Карина Dostyq, отлично подходят для сервировки стола или использования в повседневной жизни. Благодаря рифленой поверхности несмотря на однослойность легко и быстро впитывают большое количество влаги с любой поверхности.',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h4f/ha5/85102499397662.png?format=gallery-medium",
    addresUrl: 'https://kaspi.kz/shop/p/bumazhnye-salfetki-karina-dostyq-200-sht-110230386/?c=351010000&utm_source=google_search&utm_medium=cpc&utm_campaign=Reprise_KASPI_google_search_cpc&gclid=CjwKCAiA29auBhBxEiwAnKcSqgztMZxvMPVVOv46oMllD5VFJ_Zh5gy4MseHrhNPuEBr1yc5OrYiUBoCSfAQAvD_BwE',
    link: "https://wa.me/77470916741?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fbumazhnye-salfetki-karina-dostyq-200-sht-110230386%2F%3Fc%3D351010000%26utm_source%3Dgoogle_search%26utm_medium%3Dcpc%26utm_campaign%3DReprise_KASPI_google_search_cpc%26gclid%3DCjwKCAiA29auBhBxEiwAnKcSqgztMZxvMPVVOv46oMllD5VFJ_Zh5gy4MseHrhNPuEBr1yc5OrYiUBoCSfAQAvD_BwE"
  },
  {
    id: 2,
    name: 'Стабилизатор напряжения Ресанта',
    price: 11990,
    description: 'Стабилизатор напряжения Ресанта АСН-1000Д/1-Ц',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h57/haf/64342264152094.jpg?format=gallery-medium",
    addresUrl: 'https://kaspi.kz/shop/p/stabilizator-naprjazhenija-resanta-asn-1000d-1-ts-102130100/?c=351010000&utm_source=google_search&utm_medium=cpc&utm_campaign=Reprise_KASPI_google_search_cpc&gclid=CjwKCAiA29auBhBxEiwAnKcSqgztMZxvMPVVOv46oMllD5VFJ_Zh5gy4MseHrhNPuEBr1yc5OrYiUBoCSfAQAvD_BwE',
    link: "https://wa.me/77470916741?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fstabilizator-naprjazhenija-resanta-asn-1000d-1-ts-102130100%2F%3Fc%3D351010000%26utm_source%3Dgoogle_search%26utm_medium%3Dcpc%26utm_campaign%3DReprise_KASPI_google_search_cpc%26gclid%3DCjwKCAiA29auBhBxEiwAnKcSqgztMZxvMPVVOv46oMllD5VFJ_Zh5gy4MseHrhNPuEBr1yc5OrYiUBoCSfAQAvD_BwE"
  },
  {
    id: 3,
    name: 'SPF-крем',
    price: 4890,
    description: 'Round Lab крем Birch Juice Moisturizing SPF50+ для лица 50 мл',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h58/h4a/64516795826206.jpg?format=gallery-medium",
    addresUrl: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-spf50-dlja-litsa-50-ml-105263927/?c=750000000',
    link: "https://wa.me/77470916741?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fround-lab-krem-birch-juice-moisturizing-spf50-dlja-litsa-50-ml-105263927%2F%3Fc%3D750000000"
  },
  {
    id: 4,
    name: 'Apple iPhone 15',
    price: 622916,
    description: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
    addresUrl: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    link: "https://wa.me/77470916741?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fapple-iphone-15-pro-max-256gb-seryi-113138420%2F%3Fc%3D750000000"
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy',
    price: 120256,
    description: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
    addresUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=196220100#!/item',
    link: "https://wa.me/77470916741?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fsamsung-galaxy-a23-6-gb-128-gb-chernyi-104348541%2F%3Fc%3D196220100%23!%2Fitem"
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 13',
    price: 294041,
    description: 'Смартфон Apple iPhone 13 128Gb черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
    addresUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=196220100#!/item',
    link: "https://wa.me/77470916741?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fapple-iphone-13-128gb-midnight-chernyi-102298404%2F%3Fc%3D196220100%23!%2Fitem"
  },
  {
    id: 7,
    name: 'Блендер',
    price: 8887,
    description: 'Блендер SM-7700 серебристый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=gallery-medium",
    addresUrl: 'https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=351010000&utm_source=google_search&utm_medium=cpc&utm_campaign=Reprise_KASPI_google_search_cpc&gclid=CjwKCAiA29auBhBxEiwAnKcSqgztMZxvMPVVOv46oMllD5VFJ_Zh5gy4MseHrhNPuEBr1yc5OrYiUBoCSfAQAvD_BwE',
    link: "https://wa.me/77470916741?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fsm-7700-serebristyi-110902818%2F%3Fc%3D351010000%26utm_source%3Dgoogle_search%26utm_medium%3Dcpc%26utm_campaign%3DReprise_KASPI_google_search_cpc%26gclid%3DCjwKCAiA29auBhBxEiwAnKcSqgztMZxvMPVVOv46oMllD5VFJ_Zh5gy4MseHrhNPuEBr1yc5OrYiUBoCSfAQAvD_BwE"
  },
  {
    id: 8,
    name: 'Ноутбук Apple MacBook Air',
    price: 409990,
    description: 'Ноутбук Apple MacBook Air 13 MGND3 золотистый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h54/33286638272542/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg",
    addresUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=196220100#!/item',
    link: "https://wa.me/77470916741?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fapple-macbook-air-13-mgnd3-zolotistyi-100797576%2F%3Fc%3D196220100%23!%2Fitem"
  },
  {
    id: 9,
    name: 'Планшет Apple iPad',
    price: 414999,
    description: 'Планшет Apple iPad Pro 2022 Wi-Fi 11 дюйм 8 Гб/128 Гб серый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h15/h91/64895796412446.jpg?format=gallery-medium",
    addresUrl: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-wi-fi-11-djuim-8-gb-128-gb-seryi-107276534/?c=750000000',
    link: "https://wa.me/77470916741?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fapple-ipad-pro-2022-wi-fi-11-djuim-8-gb-128-gb-seryi-107276534%2F%3Fc%3D750000000"
  },
  {
    id: 10,
    name: 'Матрас',
    price: 39954,
    description: 'Матрас Medium, 160x200x20 см, чехол вискоза',
    rating: 4.5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc8/hd5/84807258144798.jpg?format=gallery-medium",
    addresUrl: 'https://kaspi.kz/shop/p/matras-medium-160x200x20-sm-chehol-viskoza-102561317/?c=351010000&utm_source=google_search&utm_medium=cpc&utm_campaign=Reprise_KASPI_google_search_cpc&gclid=CjwKCAiA29auBhBxEiwAnKcSqgztMZxvMPVVOv46oMllD5VFJ_Zh5gy4MseHrhNPuEBr1yc5OrYiUBoCSfAQAvD_BwE',
    link: "https://wa.me/77470916741?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Finteraktivnaja-igrushka-youmu-toys-tantsujuschii-kaktus-mul-tikolor-102651153%2F%3Fc%3D750000000"
  },
];
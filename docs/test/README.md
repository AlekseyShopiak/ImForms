# Тестування працездатності системи

## Перед роботою з базою варто заповнити 2 прив'зані таблиці, оскільки звідти беруться дані
![1](https://user-images.githubusercontent.com/90408822/211408605-8de37233-33ec-4c63-85bc-39c639bb40b2.jpg)

## Відображення усіх сутностей (GET запит)
![2](https://user-images.githubusercontent.com/90408822/211408623-e1675926-675e-44f3-a3dd-b7e59ecb8793.jpg)

## Відображення однієї сутності за id (GET запит)
### Коли сутність існує
![3_1](https://user-images.githubusercontent.com/90408822/211408644-5c799c2f-53b5-40c6-a395-2c91a46046cf.jpg)

### Коли сутність не існує
![3_2](https://user-images.githubusercontent.com/90408822/211408665-bd80216b-dda0-483a-9d59-6d1fe6604b2d.jpg)


## Додавання сутності (POST запит)
### Дані передані коректно
![4_1](https://user-images.githubusercontent.com/90408822/211408719-5b2d3f9a-235f-45b9-baf8-f77048fac45f.jpg)

### Передано неіснуючий state_id
![4_2](https://user-images.githubusercontent.com/90408822/211408730-b3753e43-bb76-4726-b7a2-26f943dcc3d4.jpg)

### Передано неіснуючий actionType_id
![4_3](https://user-images.githubusercontent.com/90408822/211408742-ed0d9108-17a6-4562-b13c-efa45ea79ffb.jpg)


## Видалення сутності за id (DELETE запит)
### Коли сутність існує
![5_1](https://user-images.githubusercontent.com/90408822/211408780-9afd0fa3-ad23-49ce-b207-1ff2d71313f0.jpg)

### Коли сутність не існує
![5_2](https://user-images.githubusercontent.com/90408822/211408796-3979dd64-d718-4597-8f65-227d7a1f196f.jpg)


## Видалення усіх сутностей (DELETE запит)
![6_1](https://user-images.githubusercontent.com/90408822/211408822-c7aa6337-b72e-4188-8603-329d8dc7a62f.jpg)
### Перевірка GET запитом
![6_2](https://user-images.githubusercontent.com/90408822/211408839-193928c1-0055-489f-9eb1-97bc46ac5010.jpg)


finalPrice = 0;
do {
    kindOfBun = String(prompt(`Hamburger or Cheeseburger?`)).replaceAll(` `, ``).toLowerCase(); // Запрашиваем у юзера вид булки `Hamburger or Cheeseburger`.
} while (kindOfBun !== `hamburger` && kindOfBun !== `cheeseburger`); // 1.3 Если юзер ввел не Hamburger, и не Cheeseburger, то продолжаем запрашивать название булки до тех пор, пока юзер не введет либо Hamburger, либо Cheeseburger.

if (kindOfBun === `hamburger`) {
    kindOfBun = `Hamburger`;
    finalPrice += 10; // 1.1. Если юзер вводит `Hamburger`, то к общей стоимости заказа прибавляем $10.
} else if (kindOfBun === `cheeseburger`) {
    kindOfBun = `Cheeseburger`;
    finalPrice += 15; // 1.2 Если юзер вводит `Cheeseburger`, то к общей стоимости заказа прибавляем $15.

    doubleCheese = confirm(`Would you like double cheese?`); // 1.2.1 Предлагаем пользователю добавить Double cheese `Would you like double cheese?`.

    if (doubleCheese) {
        kindOfBun = `Double cheese`;
        finalPrice += 5; // 1.2.1.1 Если пользователь соглашается на Double cheese, то к общей стоимости заказа прибавляем $5.
    }
}

potato = confirm(`Would you like potato?`); // 2. ПрCheeseburgerедлагаем пользователю добавить к заказу картошку `Would you like potato?`.

if (potato) {
    potato = String(prompt(`Choose potato size: small/middle/big`)).replaceAll(` `, ``).toLowerCase(); // 2.1. Если пользователь соглашается на картошку, то предлагаем ему выбрать ее размер `Choose potato size: small/middle/big`:

    switch (potato) {
        case `middle`:
            potato = `middle`;
            finalPrice += 15; // 2.1.2 Если юзер вводит 'middle', то к общей стоимости заказа прибавляем $15. 
            break;
        case `big`:
            potato = `big`;
            finalPrice += 20; // 2.1.3 Если юзер вводит 'big', то к общей стоимости заказа прибавляем $20.
            break;
        case ``:
        case null:
        default: // 2.1.1 Если юзер вводит 'small', или пустую строку, или нажимает Отмена, то к общей стоимости заказа прибавляем $10. То есть, значение 'small' для картошки является значением по умолчанию.
            potato = `small`;
            finalPrice += 10;
    }
} else {
    potato = ` - `
}

sauce = confirm(`Would you like sauce?`); // 3. Предлагаем пользователю добавить к заказу соус `Would you like sauce?`.

if (sauce) {
    sauce = String(prompt(`Choose sauce: ketchup/mayonnaise`)).replaceAll(` `, ``).toLowerCase(); // 3.1. Если пользователь соглашается на соус, то предлагаем ему выбрать его тип `Choose sauce: ketchup/mayonnaise`:

    finalPrice += 10;

    switch (sauce) {
        case `mayonnaise`:
            sauce = `mayonnaise`;
            break;
        case ``:
        case null:
        default: // 3.1.1 Вне зависимости от выбранного типа соуса, или если пользователь оставляет пустую строку, или нажимает Отмена, к общей стоимости заказа прибавляем $10. Дефолтное название типа соуса: ketchup.
            sauce = `ketchup`;
    }
} else {
    sauce = ` - `
}

// 4. Вывод данных в body имеет следующий вид:

document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${kindOfBun} </li>
		<li>Potato 🍟: ${potato} </li>
		<li>Sauce 🧂: ${sauce} </li>
	</ul>

	<p>Price: $${finalPrice} </p>
`);
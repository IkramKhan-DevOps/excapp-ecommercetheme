$(document).ready(function () {

    let navBar = $('#nav')
    let menuList = $('#menuList')
    let showDeals = $('#showDeals')

    navBar.hide();
    showDeals.text('Click to Show Menu');

    showDeals.click(function () {

        // SHOW AND HIDE DEALS
        if (showDeals.text() == "Click to Show Menu") {

            // GET DATA FROM JSON FILE -> ADD DATA DYNAMICALLY.
            $.getJSON("products.json", function (data) {
                data.categories.forEach(element => {
                    menuList.append(
                        `
					<li class="nav-item">
						<a class="nav-link" href="#">${element.name}</a>
					</li>
					`
                    )
                });
            });

            showDeals.text('Click to Hide Menu');
        } else {
            showDeals.text('Click to Show Menu');
            menuList.html('')
        }
        navBar.toggle();
    });

});
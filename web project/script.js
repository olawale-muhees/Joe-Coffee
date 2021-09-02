
var testButton = document.getElementById('testButton');
testButton.onclick = function () {
    alert("Coffee added to your cart");
}
function addDnDHandlers() {

    var coffeeimages = document.getElementsByClassName("productarticlewide");
    var shoppingCartDropzone = document.getElementById("shoppingcart");
     //initialize the cart
     var shoppingcart = document.querySelectorAll("#shoppingcart ul")[0];
     for (var i = 0; i < coffeeimages.length; i++) {
        coffeeimages[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }
    shoppingCartDropzone.addEventListener("dragover", function (ev) {
        if (ev.preventDefault)
            ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
        return false;
    }, false);
shoppingCartDropzone.addEventListener("drop", function (ev) {
    if (ev.stopPropagation)
        ev.stopPropagation();

    var coffeeId = ev.dataTransfer.getData("Text");
    var element = document.getElementById(coffeeId);

    addCoffeeToShoppingCart(element, coffeeId);
    ev.stopPropagation();

    return false;
}, false);
// section2
function addCoffeeToShoppingCart(item, id) {
    var html = id + " " + item.getAttribute("data-price");

    var liElement = document.createElement('li');
    liElement.innerHTML = html;
    shoppingcart.appendChild(liElement);
}
} 

function addDnDHandlers() {

    var coffeeimages = document.getElementsByClassName("productarticlewide");
    var shoppingCartDropzone = document.getElementById("shoppingcart");
    var shoppingcart = document.querySelectorAll("#shoppingcart ul")[0];

    var Cart = (function () {
        this.coffees = new Array();
    });

    var Coffee = (function (id, price) {
        this.coffeeId = id;
        this.price = price;
    });

    var currentCart = null;

    currentCart = JSON.parse(localStorage.getItem('cart'));
    if (!currentCart) {
        createEmptyCart();
    }

    UpdateShoppingCartUI();
    currentCart.addCoffee = function (coffee) {
        currentCart.coffees.push(coffee);

        // insert the new cart into the storage as string
        localStorage.setItem('cart', JSON.stringify(currentCart));

    }

    for (var i = 0; i < coffeeimages.length; i++) {
        coffeeimages[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }

    shoppingCartDropzone.addEventListener("dragover", function (ev) {
        if (ev.preventDefault)
            ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
        return false;
    }, false);

    shoppingCartDropzone.addEventListener("drop", function (ev) {
        if (ev.stopPropagation)
            ev.stopPropagation();

        var coffeeId = ev.dataTransfer.getData("Text");
        var element = document.getElementById(coffeeId);

        addCoffeeToShoppingCart(element, coffeeId);
        ev.stopPropagation();

        return false;
    }, false);

    function addCoffeeToShoppingCart(item, id) {
        var price = item.getAttribute("data-price");

        var coffee = new Coffee(id, price);
        currentCart.addCoffee(coffee);

        UpdateShoppingCartUI();
    }

    function createEmptyCart() {
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(new Cart()));
        currentCart = JSON.parse(localStorage.getItem("cart"));
    }

    function UpdateShoppingCartUI() {

        shoppingcart.innerHTML = "";
        for (var i = 0; i < currentCart.coffees.length; i++) {
            var liElement = document.createElement('li');
            liElement.innerHTML = currentCart.coffees[i].coffeeId + " " + currentCart.coffees[i].price;
            shoppingcart.appendChild(liElement);
        }
    };
}
// section3
function addDnDHandlers() {

    var coffeeimages = document.getElementsByClassName("productarticlewide");
    var shoppingCartDropzone = document.getElementById("shoppingcart");
    var shoppingcart = document.querySelectorAll("#shoppingcart ul")[0];

    var Cart = (function () {
        this.coffees = new Array();
    });

    var Coffee = (function (id, price) {
        this.coffeeId = id;
        this.price = price;
    });

    var currentCart = null;

    currentCart = JSON.parse(localStorage.getItem('cart'));
    if (!currentCart) {
        createEmptyCart();
    }

    UpdateShoppingCartUI();
    currentCart.addCoffee = function (coffee) {
        currentCart.coffees.push(coffee);

        // insert the new cart into the storage as string
        localStorage.setItem('cart', JSON.stringify(currentCart));

    }

    for (var i = 0; i < coffeeimages.length; i++) {
        coffeeimages[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }

    shoppingCartDropzone.addEventListener("dragover", function (ev) {
        if (ev.preventDefault)
            ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
        return false;
    }, false);

    shoppingCartDropzone.addEventListener("drop", function (ev) {
        if (ev.stopPropagation)
            ev.stopPropagation();

        var coffeeId = ev.dataTransfer.getData("Text");
        var element = document.getElementById(coffeeId);

        addCoffeeToShoppingCart(element, coffeeId);
        ev.stopPropagation();

        return false;
    }, false);

    function addCoffeeToShoppingCart(item, id) {
        var price = item.getAttribute("data-price");

        var coffee = new Coffee(id, price);
        currentCart.addCoffee(coffee);

        UpdateShoppingCartUI();
    }

    function createEmptyCart() {
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(new Cart()));
        currentCart = JSON.parse(localStorage.getItem("cart"));
    }

    function UpdateShoppingCartUI() {

        shoppingcart.innerHTML = "";
        for (var i = 0; i < currentCart.coffees.length; i++) {
            var liElement = document.createElement('li');
            liElement.innerHTML = currentCart.coffees[i].coffeeId + " " + currentCart.coffees[i].price;
            shoppingcart.appendChild(liElement);
        }
    };
}
// secion 4 ..geopositioning
function createDrivingDirectionsMap() {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(OnSuccess, OnError, {
            enableHighAccuracy: true,
            maximumAge: 1000,
            timeout: 500
        });
    }
    else {
        document.getElementById(map).innerHTML = "No support for geolocation, we can't find you :(";
    }
};

function OnSuccess(position) {
    showMap(
        position.coords.latitude,
        position.coords.longitude
    );
};

function OnError() {
    var mapDiv = document.getElementById("map");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            mapDiv.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            mapDiv.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            mapDiv.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            mapDiv.innerHTML = "An unknown error occurred."
            break;
    }
};


function showMap(lat, lang) {

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    var route = {
        origin: new google.maps.LatLng(lat, lang),
        destination: "Grote Markt, Brussel",
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(50.8504500, 4.3487800),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("driving-directions"));
    directionsService.route(route, function (result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
        }
    });
}





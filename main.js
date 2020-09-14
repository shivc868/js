// var all_btn = document.querySelectorAll("h1 button");

// for (i = 0; i < all_btn.length; i++) {
//     all_btn[i].addEventListener('click', function () {
//         all_btn.forEach(function (button) {
//             button.classList.remove("active")
//         });
//         this.classList.add("active")
//     });
// }
var all_btn = document.querySelectorAll('li');

console.log(all_btn)
for (i = 0; i < all_btn.length; i++) {
    all_btn[i].addEventListener('click', function () {
        all_btn.forEach(function (li) {
            li.classList.remove("active")
        });
        this.classList.add("active")

        var all_item = document.querySelectorAll(".item")
        all_item.forEach(function (item) {
            item.style.display = "none";
        });
        var data_value = this.getAttribute("data-li");
        if (data_value == "first" ){
            document.querySelector('.'+ data_value).style.display = "block";
        }else if (data_value == "second" ){
            document.querySelector('.'+ data_value).style.display = "block";
        }else if (data_value == "third" ){
            document.querySelector('.'+ data_value).style.display = "block";
        }else if (data_value == "fourth" ){
            document.querySelector('.'+ data_value).style.display = "block";
        }else if (data_value == "fifth" ){
            document.querySelector('.'+ data_value).style.display = "block";
        }
    });
}

// item_elements.forEach(function (item) {
//     item.style.display = "none";
// });
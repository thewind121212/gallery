$(document).ready(function () {
    var animal = [
        "images/animals/animals(1).jpg",
        "images/animals/animals(2).jpg",
        "images/animals/animals(3).jpg",
        "images/animals/animals(4).jpg",
        "images/animals/animals(5).jpg",
    ];

    var nature = [
        "images/nature/nature(1).jpg",
        "images/nature/nature(2).jpg",
        "images/nature/nature(3).jpg",
        "images/nature/nature(4).jpg",
        "images/nature/nature(5).jpg"
    ]



    for (i = 1; i < (animal.length + 1); i++) {
$("#phan-anh-duoc-loc").append(`<div class="card position-relative hinh-loc" style="width: 18rem;">` +
 `<img class="card-img-top" data-image-type="nature" src="images/nature/nature (${[i]}).jpg" alt="Card image cap"> ` +
  ` <p class="title-hinh position-absolute">nature</p> `+
`</div>`
)
}

        for (i = 1; i < (nature.length + 1); i++) {
$("#phan-anh-duoc-loc").append(`<div class="card position-relative hinh-loc" style="width: 18rem;">` +
 `<img class="card-img-top" data-image-type="animal" src="images/animals/animals (${[i]}).jpg" alt="Card image cap"> ` +
  ` <p class="title-hinh position-absolute">animal</p> `+
`</div>`
)
}

    for (i = 1; i < (animal.length + 1); i++) {
$("#phan-anh-duoc-loc").append(`<div class="card position-relative hinh-loc" style="width: 18rem;">` +
 `<img class="card-img-top"  data-image-type="place" src="images/places/arch (${[i]}).jpg" alt="Card image cap"> ` +
  ` <p class="title-hinh position-absolute">place</p> `+
`</div>`
)
}


const imageSelect = $("img")

function chay() {
    $(".nut-bam").on('click', function() {
        if(this.getAttribute("data-nut") === "animal") {
            imageSelect.parent().fadeOut(400);
            $('img[data-image-type="animal"]').parent().fadeIn(900) 
        } 
        if(this.getAttribute("data-nut") === "nature") {
            imageSelect.parent().fadeOut(400);
            $('img[data-image-type="nature"]').parent().fadeIn(900) 
        }
        if (this.getAttribute("data-nut") === "city"){
            imageSelect.parent().fadeOut(400);
            $('img[data-image-type="place"]').parent().fadeIn(900) 
        }
        })
}


chay()


});
const thing = [
    {
        name: "cat",
        src: "images/animals/animals (1).jpg"
    },
    {
        name: "nature",
        src: "images/nature/nature (2).jpg"    
    },
    {
        name: "dog",
        src: "images/animals/animals (2).jpg"
    },
    {
        name: "place",
        src : "images/places/arch (1).jpg"
    },
    {
        name: "place",
        src: "images/places/arch (3).jpg"
    },
    {
        name: "cat",
        src: "images/animals/animals (4).jpg"
    }, 
    {
        name: "nature",
        src: "images/nature/nature (3).jpg"    
    }, 
    {
        name: "dog",
        src: "images/animals/animals (3).jpg"
    }, 
    {
        name: "nature",
        src: "images/nature/nature (4).jpg"    
    },
    {
        name: "place",
        src: "images/places/arch (2).jpg"
    }, 
    {
        name: "dog",
        src: "images/animals/animals (5).jpg"
    }, 
    {
        name: "nature",
        src: "images/nature/nature (1).jpg"
    }, 
    {
        name: "place",
        src: "images/places/arch (4).jpg"
    },
    {
        name: "place",
        src : "images/places/arch (5).jpg"
    }, 
    {
        name: "nature",
        src: "images/nature/nature (5).jpg"    
    },

]

console.log(thing[0])
    for (i = 0; i < (thing.length ); i++) {
$("#phan-anh-duoc-loc").append(`<div class="card position-relative hinh-loc" style="width: 18rem;">` +
 `<img class="card-img-top" data-image-type="${thing[i]["name"]}" src="${[thing[i]["src"]]}" alt="Card image cap"> ` +
  ` <p class="title-hinh position-absolute">${thing[i]["name"]}</p> `+
`</div>`
)
}

    

const imageSelect = $("img")

function chay() {
    $(".nut-bam").on('click', function() {
        if(this.getAttribute("data-nut") === "dog") {
            imageSelect.parent().hide(100)
            $('img[data-image-type="dog"]').parent().fadeIn(400) 
        } 
        if(this.getAttribute("data-nut") === "nature") {
            imageSelect.parent().hide(100);
            $('img[data-image-type="nature"]').parent().fadeIn(400) 
        }
        if (this.getAttribute("data-nut") === "city"){
            imageSelect.parent().hide(100);
            $('img[data-image-type="place"]').stop().parent().fadeIn(400) 
        } 
        if (this.getAttribute("data-nut") === "all"){
            imageSelect.parent().hide(100);
            $('img').stop().parent().fadeIn(400) 
        } 
        if (this.getAttribute("data-nut") === "animal"){
            imageSelect.parent().hide(100);
            $('img[data-image-type="cat"]').stop().parent().fadeIn(400) 
            $('img[data-image-type="dog"]').stop().parent().fadeIn(400) 
        }
        })
}


chay()


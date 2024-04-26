fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then(data => {
    console.log(data);
    console.log(data.limit);
    console.log(data.total);
    console.log(data.quotes);
    document.getElementById("total").innerHTML = data.total
  
    for(const [i, d] of data.quotes.entries()){
    //document.getElementById("list").
    //innerHTML += `<li>${d.quote} - ${d.author}</li>`
    document.getElementById("list").
    innerHTML += "<li>" +d.quote+ " - " +d.quote+ "</li>"
    }

});

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    console.log(data);
    console.log(data.title);
    console.log(data.rating);
    console.log(data.stock);
    console.log(data.total);
    console.log(data.thumbnail);
    document.getElementById("total1").innerHTML = data.total
    list.innerHTML += `<div class= "col-lg-6" >
    <div class = "row">
        <img src ="${d.thumbnail}" class = "rounded d-block W-100">
        </div>
        <div class = "col-lg-6 p-2">
            <h2>${d.title}</h2>
            ${d.description}
            <br />Price : ${d.price}
            <br />Disc : ${d.discountPercentage}
            <br />Stock : ${d.stock}
            </div>
        </div>
    </div>`;
   });
  

//     for(const [i, d] of data.products.entries()){
//     document.getElementById("list").
//     innerHTML += `<img src = ${d.thumbnail}/>`
//                     `<li>${d.title} - ${d.rating} - ${d.stock}</li>`
//     }
//     document.getElementById("list1").
//     innerHTML += "<li>" + "<img src="d/images"/>" +"<h1>"+d.title+ "</h1>" +" -- " +d.rating+ " -- " +d.stock+ "</li>"
//     }

// });


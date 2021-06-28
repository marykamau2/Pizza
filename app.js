$(document).ready(function () {

            $(".result").hide()
            $(".purchase").click(function () {
                var topping = $("#topping  option:selected").val()
                var crust = $("#crust  option:selected").val();
                var location = $("#location option:selected").val()
                var price = $("input[type='checkbox']").val();
                var size = $("#size  option:selected").val();
                var quantity = $(".quantity").val();
                // if(price==="big"){
                //     var value = 1200;
                //     $("#output").text(`Your cost is: ${value} and your pizza will be delivered to ${location.text()}`).addClass('output')

                // }

                function quantityChanged() {

                    if (isNaN(quantity) || quantity <= 0) {
                        quantity = 1
                    }

                }

                quantityChanged();
                var crustPrice;
                if (topping === 'anchovies') {
                    crustPrice = 125
                } else if (topping === 'pepperoni') {
                    crustPrice = 100
                } else if (topping === 'spinach') {
                    crustPrice = 115
                } else if (topping === 'pineapple') {

                    crustPrice = 130;
                } else if (topping === 'mushroom') {

                    crustPrice = 140;
                }
                var price;
                if (size === 'Large') {
                    price = 1200
                } else if (size === 'Medium') {
                    price = 700
                } else if (size === 'Small') {
                    price = 400
                } else if (size === 'Not selected') {
                    alert("Please select your size!")
                    price = 0;
                }

                var totalCost = quantity * (price + crustPrice);
                var overalCost = parseInt(totalCost)

                $(".cart").append(
                    `
                <tr>
                    <td>${size}</td>
                    <td>${topping}</td>
                    <td>${crust}</td>
                    <td>${location}</td>
                    <td>${quantity}</td>
                    <td>${overalCost}</td>
                    <td><button class="btn remove">remove</button></td>
                </tr>
                `
                )


                var value;
                var theTotal = 0;

                $(".checkout").click(function () {
                    $("td:nth-child(6)").each(function () {
                        value = $(this).html();


                        theTotal += parseInt(value);
                        $(".result").text('Total amount payable is: ' + theTotal + `. Thanks for shopping with us.`).show();
                    });

                })



                var deletebtn = $(".remove");
                deletebtn.addClass('remove')
                deletebtn.click(function (e) {
                    const btn = e.target;
                    btn.closest('tr').remove();


                })


            })

        })
    

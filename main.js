$(document).ready(function(){
    $('.content').first().show()

    $('.tabs').on('click', 'a', function(e){
        var tab = $(this).attr('href')
        $('.content').hide()
        $(tab).show()
    })
    $('.nav').on('click', 'a', function(e){
        var tab = $(this).attr('href')
        $('.content').hide()
        $(tab).show()
    })

})

var template = `
<div class="menuitem">
    <h4>Food Name</h4>
    <p>Price</p>
    <p>Decription</p>
    <div class="extra">
        <span>Spicy</span>
        <span>Gluten-Free</span>
        <span>Vegetarian</span>
    </div>
</div>
`

$(document).ready(function(){
    $.get('https://obscure-tundra-54269.herokuapp.com/bar-food').done(function(data){
        var apps = data.appetizers
        var entrees = data.entrees
        var desserts = data.desserts
        htmlapps = `<div class="type">Appetizers</div>` 
        htmlapps += apps.map(item => {
            return `
            <div class="menuitem">
                <h4>${item.name}</h4>
                <p>${item.price}</p>
                <p>${item.description}</p>
                <div class="extra">
                    <span>Spicy${item.extra.spicy}</span>
                    <span>Gluten-Free</span>
                    <span>Vegetarian</span>
                </div>
            </div>
            `
        })
        $('#apps').html(htmlapps)

        htmlentrees = `<div class="type">Entrees</div>`
        htmlentrees += entrees.map(item => {
            return `
            <div class="menuitem">
                <h4>${item.name}</h4>
                <p>${item.price}</p>
                <p>${item.description}</p>
                <div class="extra">
                    <span>Spicy${item.extra.spicy}</span>
                    <span>Gluten-Free</span>
                    <span>Vegetarian</span>
                </div>
            </div>
            `
        })
        $('#entrees').html(htmlentrees)

        htmldesserts = `<div class="type">Desserts</div>`
        htmldesserts += desserts.map(item => {
            return `
            <div class="menuitem">
                <h4>${item.name}</h4>
                <p>${item.price}</p>
                <p>${item.description}</p>
                <div class="extra">
                    <span>Spicy${item.extra.spicy}</span>
                    <span>Gluten-Free</span>
                    <span>Vegetarian</span>
                </div>
            </div>
            `
        })
        $('#desserts').html(htmldesserts)
    })
})

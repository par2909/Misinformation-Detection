$(".card-header.py-3.collapseWindow").click(function () {

    $header = $(this);
    $content = $header.next();
    
    let name = $header.contents()[1].firstChild.data
    let html = `<h6 class="m-0 font-weight-bold text-primary">${name} </h6>`
    $content.slideToggle(500, function() {
        // console.log()
        // $header.contents()[1].toggleClass('down')
        // $header.contents()[1].toggleClass('down')
        console.log($header.contents()[1].classList.toggle("down"))
        console.log($header.contents()[1].classList.toggle("up"))



    });
});
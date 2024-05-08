export function openModal(src) {
    $(".modal").css("display","block");
    $(".modal").addClass("open");
    $(".modal img").attr("src",src);
}

export function closeModal() {
    $(".modal").css("display","none");
    $(".modal img").attr("src","");
    $(".modal").removeClass("open");
}
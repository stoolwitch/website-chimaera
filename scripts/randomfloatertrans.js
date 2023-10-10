function assignrandom() {
    const cards = document.getElementsByClassName("floating-cards");
    console.log(randomcolor());
    console.log(cards.length);
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        console.log(2);
        cards[i].firstChild.style.backgroundColor = "rgb(" + randomcolor() + "," + randomcolor() + "," + randomcolor() + ")";
        cards[i].style.transform = "translate3d(calc(" + randomtransform() + "vw - 50%),calc(" + randomtransform() + "vh - 50%)," + randomtransformpos() + "px)";
    }
    function randomcolor() {
        return Math.floor(Math.random() * 255);
    }
    function randomtransform() {
        return Math.ceil(Math.random() * 20) * (Math.round(Math.random()) ? 1 : -1);
    }
    function randomtransformpos() {
        return Math.ceil(Math.random() * 150);
    }
}
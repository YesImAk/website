let myEmojis = [
        "😂",
        "😊",
        "😈",
];

let urlAnimate = () => {
    window.location.hash =
        myEmojis[Math.floor((Date.now() / 100) % myEmojis.length)];
        setTimeout(urlAnimate, 70);
    };

urlAnimate();

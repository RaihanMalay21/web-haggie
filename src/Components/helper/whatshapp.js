export function OpenWhatshapp() {
    // open whatshapp
    const phoneNumber = '6287884916818';
    const isMobile = /iphone|ipad|ipod|Android/i.test(navigator.userAgent);
    const url = isMobile
        ? `whatsapp://send?phone=${phoneNumber}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

    window.location.href = url;
}

 
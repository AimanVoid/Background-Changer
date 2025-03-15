function changeBg() {
    const images = ['https://plus.unsplash.com/premium_photo-1666254759561-8c21a4094ac5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww',
        'https://media.istockphoto.com/id/629611042/photo/honk-kong-skyline-across-the-harbour-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=95KRmeJBqYlQdZthxZcgZJVQDtm5KZD9JD7yfeEYiDA=',
        'https://plus.unsplash.com/premium_photo-1700955569575-439bed2d50f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsYXlzaWF8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1550586678-f7225f03c44b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFraXN0YW58ZW58MHx8MHx8fDA%3D',
        'https://media.istockphoto.com/id/1369303790/photo/cappadocia-valley-at-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=kxSvVnHoX0x4RC4q4Ko1i8L6VXaWALIlDNSt-_9e-ow='
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
}
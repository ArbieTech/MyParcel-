const imgUrl = new URL("img/bild.jpg", import.meta.url);
// new URL(relative url, base url) Skapar ett URL-objekt
// 'img/bild.jpg' är den relativa url:en till bilden
// import.meta ger oss meta data om modulen (alltså main.ts)
// import.meta.url ger oss url:en till modulen och är bas-url:en till bilden

const img = document.createElement("img");
img.src = imgUrl.href; //ger oss en string med hela url:en till bilden
document.body.append(img);

const imgUrl2 = new URL('img/bild2.jpg', import.meta.url);
const img2 = document.createElement("img");
document.body.append(img2);

img2.src = imgUrl2.href; //ger oss en string med hela url:en till bilden

const imgUrl3 = new URL('img/sal.jpg', import.meta.url);
const img3 = document.createElement("img");
document.body.append(img3);

img3.src = imgUrl3.href; //ger oss en string med hela url:en till bilden
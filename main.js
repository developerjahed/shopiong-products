const productImage1=document.getElementById('product-images1');
const productImage2=document.getElementById('product-images2');
const productImage3=document.getElementById('product-images3');
const productSliderImage=document.getElementById('product-slider-image');
const productContentText=document.getElementById('product-content-text');
const productPrice=document.getElementById('product-price');

productImage1.addEventListener('click', function(){
    productSliderImage.src='product1.jpg';
    productContentText.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sed velit labore commodi et quis necessitatibus doloremque quas asperiores iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sed velit labore commodi et quis necessitatibus doloremque quas asperiores iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sed velit labore commodi et quis necessitatibus doloremque quas asperiores iste.";
    productPrice.innerText=200;

});
productImage2.addEventListener('click', function(){
    productSliderImage.src='product2.jpg';
    productContentText.innerText="Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    productPrice.innerText=350;
});
productImage3.addEventListener('click', function(){
    productSliderImage.src='product3.jpg';
    productContentText.innerText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ";
    productPrice.innerText=420;
    
});
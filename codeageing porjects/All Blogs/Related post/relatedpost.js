const blogcart = [{
    image: 'header img.png',
    heading: 'How To Grow Your Business Digitaly || Digital Transformation Of Business',
    content_min: 'In today’s fast-paced digital era, businesses must embrace technology to stay competitive. Digital transformation is not just an option but a necessity for sustainable growth.'
},
{
    image: 'pexels-divinetechygirl-1181263.jpg',
    heading: 'What Is Digital Marketing | Know Everything',
    content_min: 'In today’s fast-paced digital era, businesses must embrace technology to stay competitive. Digital transformation is not just an option but a necessity for sustainable growth.'
},
{
    image: 'pexels-divinetechygirl-1181263.jpg',
    heading: 'What Is Digital Marketing | Know Everything',
    content_min: 'In today’s fast-paced digital era, businesses must embrace technology to stay competitive. Digital transformation is not just an option but a necessity for sustainable growth.'
},
{
    image: 'pexels-divinetechygirl-1181263.jpg',
    heading: 'What Is Digital Marketing | Know Everything',
    content_min: 'In today’s fast-paced digital era, businesses must embrace technology to stay competitive. Digital transformation is not just an option but a necessity for sustainable growth.'
},
{
    image: 'pexels-divinetechygirl-1181263.jpg',
    heading: 'What Is Digital Marketing | Know Everything',
    content_min: 'In today’s fast-paced digital era, businesses must embrace technology to stay competitive. Digital transformation is not just an option but a necessity for sustainable growth.'
}
];

let blogcarthtml='';
blogcart.forEach((blog_tags)=>{
blogcarthtml+=` <div class="blog">
                <img class="js-blog-img" src="/${blog_tags.image}" alt="">
                <div class="content">
                    <h2>${blog_tags.heading}</h2>
                    <p>${blog_tags.content_min} </p>
                    <p><a href="/All Blogs/blog1.html">Read more</a></p>
                </div>
                </div>`;

});

document.querySelector('.js-blog-grid').innerHTML=blogcarthtml;
console.log(blogcarthtml);
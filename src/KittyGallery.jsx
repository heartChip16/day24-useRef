import React from 'react'
import { useRef } from 'react'


// When trying to do DOM manipulation in React JS, use useRef, this will separate the instances or DOM processes of 2 same instances of function KittyGallery, for example

function KittyGallery() {
    const galleryRef = useRef(null);
    const index = useRef(0);
    function showNextImage() {
        const imageList = galleryRef.current.querySelectorAll("li>img");
        index.current = index.current + 1 >= imageList.length ? 0 : index.current + 1;
        imageList[index.current].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        })
    }

    return (
        <section id="container">
            <h2>Kitty Gallery</h2>
            <button onClick={showNextImage}>Next</button>
            <ul ref={galleryRef} className="gallery">
                <li>
                    <img src="http://placekitten.com/g/250/300" alt="" />
                </li>
                <li><img src="http://placekitten.com/g/300/250" alt="" /></li>
                <li><img src="http://placekitten.com/g/300/300" alt="" /></li>
            </ul>
        </section>
    )
}

export default KittyGallery

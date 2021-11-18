import React from "react";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import "./MyGallery.scss";

import { Gallery, Item } from "react-photoswipe-gallery";

const MyGallery = () => (
  <div className="gallery">
    <h1 className="gallery__text">Nasze poprzednie realizacje</h1>
    <Gallery>
      <div className="gallery__row">
        <Item
          original="/gallery/001.jpg"
          thumbnail="/gallery/001thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/001thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/002.jpg"
          thumbnail="/gallery/002thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/002thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/008.jpg"
          thumbnail="/gallery/008thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/008thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/009.jpg"
          thumbnail="/gallery/009thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/009thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/010.jpg"
          thumbnail="/gallery/010thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/010thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/012.jpg"
          thumbnail="/gallery/012thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/012thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/013.jpg"
          thumbnail="/gallery/013thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/013thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/014.jpg"
          thumbnail="/gallery/014thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/014thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/015.jpg"
          thumbnail="/gallery/015thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/015thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/017.jpg"
          thumbnail="/gallery/017thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/017thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/019.jpg"
          thumbnail="/gallery/019thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/019thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/020.jpg"
          thumbnail="/gallery/020thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/020thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/021.jpg"
          thumbnail="/gallery/021thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/021thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/022.jpg"
          thumbnail="/gallery/022thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/022thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/023.jpg"
          thumbnail="/gallery/023thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/023thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/024.jpg"
          thumbnail="/gallery/024thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/024thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/025.jpg"
          thumbnail="/gallery/025thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/025thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/026.jpg"
          thumbnail="/gallery/026thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/026thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/034.jpg"
          thumbnail="/gallery/034thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/034thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
        <Item
          original="/gallery/036.jpg"
          thumbnail="/gallery/036thumb.jpg"
          width="1200"
          height="1599"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src="/gallery/036thumb.jpg"
              alt="remont"
            />
          )}
        </Item>
      </div>
    </Gallery>
  </div>
);

export default MyGallery;

import React from "react"
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import "./MyGallery.scss"

import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
  <div className='gallery'>
    <h1 className='gallery__text'>Nasze poprzednie realizacje</h1>
    <Gallery>
      <div className="gallery__row">
      <Item
        original="/gallery/001.jpg"
        thumbnail="/gallery/001thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/001thumb.jpg" alt="remont"/>
        )}
      </Item>
      <Item
        original="/gallery/002.jpg"
        thumbnail="/gallery/002thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/002thumb.jpg" alt="remont"/>
        )}
      </Item>
      <Item
        original="/gallery/008.jpg"
        thumbnail="/gallery/008thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/008thumb.jpg" alt="remont"/>
        )}
      </Item>
      <Item
        original="/gallery/009.jpg"
        thumbnail="/gallery/009thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/009thumb.jpg" alt="remont"/>
        )}
      </Item>
      <Item
        original="/gallery/010.jpg"
        thumbnail="/gallery/010thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/010thumb.jpg" alt="remont"/>
        )}
      </Item>
      <Item
        original="/gallery/011.jpg"
        thumbnail="/gallery/011thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/011thumb.jpg" alt="remont"/>
        )}
      </Item>
      <Item
        original="/gallery/012.jpg"
        thumbnail="/gallery/012thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/012thumb.jpg" alt="remont"/>
        )}
      </Item>
      <Item
        original="/gallery/013.jpg"
        thumbnail="/gallery/013thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/013thumb.jpg" alt="remont"/>
        )}
      </Item>
      <Item
        original="/gallery/014.jpg"
        thumbnail="/gallery/014thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/014thumb.jpg" alt="remont"/>
        )}
      </Item>
      <Item
        original="/gallery/015.jpg"
        thumbnail="/gallery/015thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/015thumb.jpg" alt="remont"/>
        )}
      </Item>
      <Item
        original="/gallery/017.jpg"
        thumbnail="/gallery/017thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/017thumb.jpg" alt="remont"/>
        )}
      </Item>
      <Item
        original="/gallery/019.jpg"
        thumbnail="/gallery/019thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/019thumb.jpg" alt="remont"/>
        )}
      </Item>
      </div>
    </Gallery>
  </div>
  )

export default MyGallery;
import React from "react"
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import "./MyGallery.scss"

import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
  <div className='gallery'>
    <Gallery>
      <div className="gallery__row">
      <Item
        original="/gallery/001.jpg"
        thumbnail="/gallery/001thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/001thumb.jpg" />
        )}
      </Item>
      <Item
        original="/gallery/002.jpg"
        thumbnail="/gallery/002thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/002thumb.jpg" />
        )}
      </Item>
      <Item
        original="/gallery/003.jpg"
        thumbnail="/gallery/003thumb.jpg"
        width="1600"
        height="1200"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/003thumb.jpg" />
        )}
      </Item>
      <Item
        original="/gallery/004.jpg"
        thumbnail="/gallery/004thumb.jpg"
        width="2048"
        height="1536"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/004thumb.jpg" />
        )}
      </Item>
      <Item
        original="/gallery/005.jpg"
        thumbnail="/gallery/005thumb.jpg"
        width="2048"
        height="1536"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/005thumb.jpg" />
        )}
      </Item>
      </div>
      <Item
        original="/gallery/001.jpg"
        thumbnail="/gallery/001thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/001thumb.jpg" />
        )}
      </Item>
      <Item
        original="/gallery/001.jpg"
        thumbnail="/gallery/001thumb.jpg"
        width="1200"
        height="1599"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="/gallery/001thumb.jpg" />
        )}
      </Item>
    </Gallery>
  </div>
  )

export default MyGallery;
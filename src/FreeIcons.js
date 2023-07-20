import React, { useState, useEffect } from 'react';
import { ref, list, getDownloadURL } from 'firebase/storage';
import { storage } from './Firebase.js';
import { Card } from 'flowbite-react';

function FreeIcons() {
  const [images, setImages] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [startAfter, setStartAfter] = useState(null);

  // Function to load images
  const loadImages = async () => {
    const folderRef = ref(storage, 'stylized_icons'); // point to the 'stylized_icons' folder
    const imagesRef = await list(folderRef, { maxResults: 10, pageToken: startAfter });

    const imageUrls = await Promise.all(imagesRef.items.map(async item => {
      const url = await getDownloadURL(item);
      return { url, title: item.name }; // add name to the object
    }));

    setImages(oldImages => [...oldImages, ...imageUrls]);
    setStartAfter(imagesRef.nextPageToken || null);
    setLoadMore(!!imagesRef.nextPageToken);
  };

  useEffect(() => {
    loadImages();
    // eslint-disable-next-line
  }, []);

  const handleDownload = (url, filename) => {
    // Create an XMLHttpRequest to download the blob from the url
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = () => {
      const blob = xhr.response;
      // Create a URL from the blob
      const blobUrl = URL.createObjectURL(blob);
      // Create a temporary downloadable link
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // Revoke the URL to free memory
      URL.revokeObjectURL(blobUrl);
    };
    xhr.open('GET', url);
    xhr.send();
  };

  return (
    <div style={{ padding: '3rem' }}>
      <Card>
        <h1 className="products-heading">Free Icons</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(20, 1fr)', gap: '1rem', padding: '5rem' }}> {/* 20 columns grid */}
          {images.map((image, index) => (
            <div key={index} style={{ position: 'relative', transition: 'transform 0.3s', cursor: 'pointer' }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.3)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src={image.url} alt={image.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} /> {/* adjusted to be a percentage */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex',
                alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)', color: '#fff',
                transition: 'opacity 0.3s', opacity: 0, zIndex: 1, borderRadius: '50%'
              }}
                onMouseOver={e => e.currentTarget.style.opacity = '1'}
                onMouseOut={e => e.currentTarget.style.opacity = '0'}
              >
                <button style={{ fontSize: '0.4rem' }} onClick={() => handleDownload(image.url, image.title)}>
                  Download
                </button>
              </div>
            </div>
          ))}
          {loadMore && (
            <button onClick={loadImages} style={{ gridColumn: 'span 4' }}> {/* span the button across 4 columns */}
              Load More
            </button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default FreeIcons;

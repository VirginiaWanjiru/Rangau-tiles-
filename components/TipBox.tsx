import React, { useState } from 'react';

const TipBox = () => {
  const [isFaqOpen, setIsFaqOpen] = useState({
    ceramicPorcelain: false,
    glossyMatte: false,
    indoorOutdoor: false,
    maintenance: false,
  });

  const toggleFaq = (faqKey) => {
    setIsFaqOpen((prev) => ({
      ...prev,
      [faqKey]: !prev[faqKey],
    }));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div style={{ backgroundColor: '#FFB347', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>
          💡 Tips on how to measure how many boxes of tiles you need for a space!
        </h2>
        <p style={{ margin: '0', fontSize: '16px' }}>
          Measure the length and width of the space in feet and multiply them to get the area. Measure the length and width of a single tile, then multiply for its area. Divide the space area by the tile area and add 10-15% for cuts, mistakes, and future repairs.
        </p>
      </div>

      <div>
        <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>FAQs</h2>

        <div style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => toggleFaq('ceramicPorcelain')}>
            <span style={{ fontSize: '16px' }}>What is the difference between ceramic and porcelain tiles?</span>
            <span>{isFaqOpen.ceramicPorcelain ? '▲' : '▼'}</span>
          </div>
          {isFaqOpen.ceramicPorcelain && <p style={{ marginTop: '10px', fontSize: '14px' }}>Ceramic tiles are generally less dense and more porous, making them suitable for light to medium traffic areas. Porcelain tiles are denser and less porous, making them more durable and ideal for high-traffic areas and outdoor use.</p>}
        </div>

        <div style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => toggleFaq('glossyMatte')}>
            <span style={{ fontSize: '16px' }}>Are glossy or matte tiles better?</span>
            <span>{isFaqOpen.glossyMatte ? '▲' : '▼'}</span>
          </div>
          {isFaqOpen.glossyMatte && <p style={{ marginTop: '10px', fontSize: '14px' }}>Glossy tiles reflect light, making spaces appear larger and brighter, but they can be slippery when wet. Matte tiles provide a non-slip surface and hide dirt and smudges better, making them suitable for high-traffic and wet areas.</p>}
        </div>

        <div style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => toggleFaq('indoorOutdoor')}>
            <span style={{ fontSize: '16px' }}>Can I use the same tiles indoors and outdoors?</span>
            <span>{isFaqOpen.indoorOutdoor ? '▲' : '▼'}</span>
          </div>
          {isFaqOpen.indoorOutdoor && <p style={{ marginTop: '10px', fontSize: '14px' }}>Some tiles are rated for both indoor and outdoor use, but it's essential to check the tile's specifications. Outdoor tiles should be frost-resistant and have a high slip resistance rating. Porcelain tiles are often a good choice for both indoor and outdoor applications.</p>}
        </div>

        <div style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => toggleFaq('maintenance')}>
            <span style={{ fontSize: '16px' }}>How do I maintain tiles after installation?</span>
            <span>{isFaqOpen.maintenance ? '▲' : '▼'}</span>
          </div>
          {isFaqOpen.maintenance && <p style={{ marginTop: '10px', fontSize: '14px' }}>Regular cleaning with mild soap and water is usually sufficient. Avoid using harsh chemicals or abrasive cleaners. For grout maintenance, seal it periodically to prevent staining and mold growth.</p>}
        </div>
      </div>
    </div>
  );
};

export default TipBox;
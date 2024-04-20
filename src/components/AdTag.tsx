"use client";
import { useEffect, useState } from "react";

const fetchURL = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const AdTag = ({ adSize, type }) => {
  const [adData, setAdData] = useState(null);
  // replace with live link
  const adRequestUrl = `http://localhost:3000/api/serveAd`;

  useEffect(() => {
    const fetchAdData = async () => {
      const data = await fetchURL(adRequestUrl);
      setAdData(data);
    };
    fetchAdData();
  }, []);

  if (adData) {
    return (
      <div
        className="ad-tag"
        style={{display:"grid",placeContent: "center", width: `${adSize[0]}px`, height: `${adSize[1]}px` }}
      >
        <img src={adData.url} alt="banner" />
      </div>
     
    );
  } else {
    return null;
  }

  
};

export default AdTag;

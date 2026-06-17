// app/components/LikeButton.js
"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button 
      onClick={(e) => {
        
        e.preventDefault(); 
        setLiked(!liked);
      }} 
      style={{ 
        padding: "4px 10px", 
        border: liked ? "1px solid #ff4b4b" : "1px solid #ddd", 
        borderRadius: "20px", 
        background: liked ? "#fff5f5" : "white", 
        color: liked ? "#ff4b4b" : "#555",
        fontWeight: "600",
        fontSize: "0.8rem",
        cursor: "pointer", 
        marginTop: "8px",
        width: "max-content", 
        alignSelf: "flex-start", 
        transition: "all 0.15s ease"
      }}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}

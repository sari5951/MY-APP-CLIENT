import React from "react";
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
        <h1>מחפשת מאפרת / מתסרקת??</h1>
        <div>
          <Link to="/makeup-artists">
            <button>רשימת מאפרות</button>
          </Link>
          <Link to="/hair-stylists">
            <button>רשימת מתסרקות</button>
          </Link>
        </div>
      </div>
    
);
}
import ContentLoader from "react-content-loader"
import React from 'react';

const MyLoader = () => {
    return (
        <ContentLoader
            height={400}
            width={406}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
        >
            <circle cx="371" cy="33" r="30" />
            <rect x="221" y="14" rx="4" ry="4" width="100" height="13" />
            <rect x="12" y="41" rx="4" ry="4" width="50" height="8" />
            <rect x="0" y="70" rx="5" ry="5" width="400" height="184" />
            <rect x="78" y="43" rx="0" ry="0" width="77" height="6" />
            <rect x="173" y="41" rx="0" ry="0" width="160" height="8" />
            <circle cx="26" cy="23" r="11" />
            <rect x="21" y="277" rx="0" ry="0" width="348" height="6" />
            <rect x="22" y="309" rx="0" ry="0" width="350" height="7" />
            <circle cx="356" cy="357" r="23" />
            <rect x="43" y="341" rx="0" ry="0" width="268" height="8" />
            <rect x="46" y="360" rx="0" ry="0" width="130" height="9" />
            <rect x="192" y="361" rx="0" ry="0" width="128" height="8" />
            <rect x="22" y="361" rx="0" ry="0" width="19" height="8" />
        </ContentLoader>
    )
}

export default MyLoader
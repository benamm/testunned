import React from "react";
import ContentLoader from "react-content-loader";

const LoadingTemplate = () => {
    return(
      <ContentLoader 
      height={80}
      width={80}
      speed={2}
      primaryColor="#e1e1e1"
      secondaryColor="#ecebeb"
    >
      <rect x="7" y="59" rx="3" ry="3" width="68" height="16" /> 
      <circle cx="40" cy="29" r="19" />
    </ContentLoader>
    )
}

export default LoadingTemplate;

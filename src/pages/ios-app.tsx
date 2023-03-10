import React, { useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useNavigate } from "react-router-dom";

const iOSAPP: React.FC<PageProps> = () => {
    /* const navigate = useNavigate(); */

    // Navigate to the external URL when the component is mounted
    useEffect(() => {
        window.location.href = "https://apps.apple.com/us/app/split-counter-mtg-utility/id6446151892";
      }, []);

    return <div>Redirecting to App Store ...</div>;
};

export default iOSAPP;
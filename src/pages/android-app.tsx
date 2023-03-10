import React, { useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useNavigate } from "react-router-dom";

const iOSAPP: React.FC<PageProps> = () => {
    /* const navigate = useNavigate(); */

    // Navigate to the external URL when the component is mounted
    useEffect(() => {
        window.location.href = "https://play.google.com/store/apps/details?id=app.splitcounter";
      }, []);

    return <div>Redirecting to Play Store ...</div>;
};

export default iOSAPP;
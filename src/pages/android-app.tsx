import React, { useEffect } from "react";
import type { PageProps } from "gatsby";

const iOSAPP: React.FC<PageProps> = () => {
    /* const navigate = useNavigate(); */

    // Navigate to the external URL when the component is mounted
    useEffect(() => {
        window.location.href = "https://play.google.com/store/apps/details?id=app.splitcounter";
      }, []);

    return <div>Redirecting to Play Store ...</div>;
};

export default iOSAPP;
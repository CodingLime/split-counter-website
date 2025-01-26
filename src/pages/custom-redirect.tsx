import { useEffect } from 'react';
import { navigate } from 'gatsby';

const redirectLink = "https://www.google.pt/maps/place/40%C2%B038'25.2%22N+7%C2%B049'13.3%22W/@40.6399503,-7.8208781,413m/data=!3m1!1e3!4m13!1m8!3m7!1s0xd2334f17771e11f:0xd314812df9d1942e!2sQ.ta+Vila+Me%C3%A3!3b1!8m2!3d40.6390903!4d-7.8209334!16s%2Fg%2F11j1z50nvf!3m3!8m2!3d40.6403333!4d-7.8203611!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw==";

const RedirectPage = () => {
    useEffect(() => {
        navigate(redirectLink);
    }, []);

    return null;
};

export default RedirectPage;

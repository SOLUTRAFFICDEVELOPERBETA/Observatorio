import React, { useState, useContext, useEffect } from 'react';
import Iframe from '../../../components/Iframe/Iframe';
import { DBContext } from '../../../constants/context/context';
import SpinkiSpinner from '../../../components/SpinkiSpinner/SpinkiSpinner';

const Observatorio = (props) => {
    const idFrame = props.match.params.idFrame;
    const [dataIframe, guardarDataIframe] = useState(null);
    const { iframeService } = useContext(DBContext);

    useEffect(() => {
        iframeService.doGetIframe(idFrame).then((res => {
            return guardarDataIframe(res.data())
        }))
    }, [iframeService, idFrame])

    if (!Boolean(dataIframe)) {
        return <SpinkiSpinner />;
    }
    return (
        <div>
            <Iframe
                iframe={dataIframe.iframe}
            />
        </div>
    )
}

export default Observatorio
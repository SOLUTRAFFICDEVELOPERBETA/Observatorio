import React, { useState, useContext, useEffect } from 'react';
import TableAdmin from '../../../components/Table/Table'
import { DBContext, UserContext } from '../../../constants/context/context';
import SpinkiSpinner from '../../../components/SpinkiSpinner/SpinkiSpinner';
import PaperGenerico from '../../../components/Paper/Paper';



const Admin = (props) => {
  const { history } = props
  const [dataIframe, guardarDataIframe] = useState({});
  const [loading, guardarLoading] = useState(false);
  const { iframeService } = useContext(DBContext)
  const user = React.useContext(UserContext);

  const summary = (idIframe) => {
    history.push(`/dashboard/observatorio/id/${idIframe}`);
  }

  useEffect(() => {
    const getData = async () => {
      if (user) {
        guardarLoading(true)
        await iframeService.doGetAllIframes().then(ifra => {
          const dataAllIframe = ifra.docs.map(snapshot => {
            const newData = [];
            const idFrame = snapshot.id;
            const iframeData = snapshot.data();
            newData.push({
              idFrame: idFrame,
              iframeData: iframeData
            })
            return newData
          })
          guardarDataIframe(dataAllIframe);
          console.log(dataAllIframe)

        })

        guardarLoading(false)
      }
    }
    getData();
  }, [user, iframeService]);
  if (loading) return <SpinkiSpinner />
  return (
    <div>
      {Object.keys(dataIframe).length > 0 ?
        <TableAdmin
          guardarLoading={guardarLoading}
          iframeService={iframeService}
          userID={user.uid}
          dataIframe={dataIframe}
          seeData={idIframe => summary(idIframe)}
        />
        : <PaperGenerico
          texto="NO HAY PÁGINAS AGREGADAS"
          boton
          botonText="Agregar una nueva URL de una página"
          functionBoton={() => { history.replace("/dashboard/home") }}
        />}

    </div>
  )

}
export default Admin;
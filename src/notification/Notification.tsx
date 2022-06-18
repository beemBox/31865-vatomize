import {useState, createContext, useContext } from 'react'
import { servicesVersion } from 'typescript'

const notificationStyle = {
  position: 'abolute',
  top: 100,
  right: 5,
  width: 'auto',
  height: 'auto',
  backgroundColor: 'green',
  color: 'white',
  padding: '10px 20px 10px 20px',
  borderRadius: '10px',
}
const Notification = ({ msg, severity }) => { //! tenemos que setear una severidad que define qué tipo de notificación es.

  if (msg === '') return //! si no hay mensaje, no mostrar nada. Cortmos la función 

  return (
    // @ts-ignore
    <div style={notificationStyle}>
      {msg}
    </div>
  )
}

//! vamos a necesitar un context para que mantenga el estado de la notificación.

type MsgConfigParams = {
  message:   string,
  severity:  string,
}

const NotificationContext = createContext({})

const NotificationProvider = ({ children }) => {
  const [msgConfig, setMsgConfig] = useState<MsgConfigParams>({ severity: 'success', message: 'Mensaje' })
  const setNotification = (sev, msg) => {
    setMsgConfig({severity: sev, message: msg})
  }
  // Lo que tiene que envolver a todos los hijos, es el provider del context.
  return (
    <NotificationContext.Provider value={setNotification}>
      <Notification msg={msgConfig.message} severity={msgConfig.severity} />
      {children}
    </NotificationContext.Provider>
  )
}

//todo ESTO ES UN CUSTOM HOOK
export const useNotification = () => { 
  return useContext(NotificationContext)
}

export default Notification
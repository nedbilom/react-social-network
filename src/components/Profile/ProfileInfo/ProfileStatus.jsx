import React, { useState, useEffect} from 'react';

const ProfileStatus = (props) => {

  const [ editMode, setEditMode ] = useState(false);
  const [ status, setStatus ] = useState(props.status);

  useEffect(() => {
   setStatus(props.status) 
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }
  const onStatusChange = (event) => {
    setStatus(event.target.value)
  }
  
  return <>
    {!editMode && <div><span onDoubleClick={activateEditMode}>{status}</span></div>}
    {editMode && <div><input autoFocus={true} onBlur={deactivateEditMode} value={status} onChange={onStatusChange} /></div>}
  </>
}

export default ProfileStatus;
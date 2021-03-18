import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from "../App";

function ComponentE() {

  let user = useContext(UserContext)
  let channel = useContext(ChannelContext)
    return (
      <div>
        Username - {user}, ChannelName - {channel}
      </div>
    )
  }


export default ComponentE

import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'

const Modals = () => {
  return (
    <div className="modal">
        <div className='modal-body'>
            <div>
                <img src='/sentmail.svg'/>
                <Typography id="transition-modal-title" variant="h6" component="h6">
                    Verification Link Sent!
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    An email has just been sent to your inbox, kindly check and click the link to proceed with your registration 
                </Typography>
            </div>
        </div>
    </div>
  )
}

export default Modals
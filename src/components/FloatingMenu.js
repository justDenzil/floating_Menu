import React, { useState } from 'react'
import './FloatingMenu.css'
import {ReactComponent as UploadLogoImage} from '../assets/Upload_Logo_SVG.svg'
import {ReactComponent as BackButton} from '../assets/icons/BackButton.svg'
import {ReactComponent as FrontButton} from '../assets/icons/FrontButton.svg'

    


function FloatingMenu() {

    const [inactive, setInactive] = useState(false);

    return (
        <div className={`menu-body ${inactive ? "inactive" : ""}`}>
            <div className="toggle-menu-btn" onClick={() => {setInactive(!inactive);}}>
            {inactive ? (
            <FrontButton className="back-btn" />
          ) : (
            <BackButton className="back-btn" />
          )}
            
        </div>
        <div className="upload-logo-container">
            <div className="upload-logo-image">
                <UploadLogoImage/>
            </div>
            <div className="upload-logo-text">Upload logo</div>
        </div>
        <div className="divider">
        </div>
        </div>
    )
}

export default FloatingMenu

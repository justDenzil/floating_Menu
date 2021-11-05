import React from 'react'
import './FloatingMenu.css'
import {ReactComponent as UploadLogoImage} from '../assets/Upload_Logo_SVG.svg'

function UploadLogo() {
    return (
        <div className="upload-logo-container">
            <div className="upload-logo-image">
                <UploadLogoImage/>
            </div>
            <div className="upload-logo-text">Upload logo</div>
        </div>
    )
}

function FloatingMenu() {
    return (
        <div className="menu-body">
            <UploadLogo className="upload-logo"/>
        </div>
    )
}

export default FloatingMenu

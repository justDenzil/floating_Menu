import React, { useState } from 'react'
import './FloatingMenu.css'
import {ReactComponent as UploadLogoImage} from '../assets/Upload_Logo_SVG.svg'
import {ReactComponent as BackButton} from '../assets/icons/BackButton.svg'
import {ReactComponent as FrontButton} from '../assets/icons/FrontButton.svg'
import {ReactComponent as CreateIcon} from '../assets/icons/Create_Icon.svg'
import {ReactComponent as ManageIcon} from '../assets/icons/Manage_Icon.svg'
import {ReactComponent as GenerateIcon} from '../assets/icons/Generate_Icon.svg'
import {ReactComponent as AnalyseIcon} from '../assets/icons/Analyse_Icon.svg'

    


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
                <UploadLogoImage className="upload-logo-img"/>
            </div>
            <div className="upload-logo-text">Upload logo</div>
        </div>
        <div className="divider">
        </div>
        <div className="mainMenu">
            <ul className="menu-UL">
                <li>
                    <div className="menu-Item-container">
                    <a href="./" className="menu-Item">
                        <div className="menu-Item-Icon">
                            <CreateIcon />
                        </div>
                        <div className="menu-Item-Title">
                        Create
                        </div>
                    </a>
                    </div>
                </li>
                <li>
                    <div className="menu-Item-container">
                    <a href="./" className="menu-Item">
                        <div className="menu-Item-Icon">
                            <ManageIcon />
                        </div>
                        <div className="menu-Item-Title">
                        Manage
                        </div>
                    </a>
                    </div>
                </li>
                <li>
                    <div className="menu-Item-container">
                    <a href="./" className="menu-Item">
                        <div className="menu-Item-Icon">
                            <GenerateIcon />
                        </div>
                        <div className="menu-Item-Title">
                        Generate
                        </div>
                    </a>
                    </div>
                </li>
                <li>
                    <div className="menu-Item-container">
                    <a href="./" className="menu-Item">
                        <div className="menu-Item-Icon">
                            <AnalyseIcon />
                        </div>
                        <div className="menu-Item-Title">
                        Analyse
                        </div>
                    </a>
                    </div>
                </li>
            </ul>
        </div>

        </div>
    )
}

export default FloatingMenu

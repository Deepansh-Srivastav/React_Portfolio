import React from 'react'
import "../styles/SideNav.css"
import { SidenavMenuUtils } from '../data/data.js'
import { useNavigate, useLocation } from 'react-router-dom'
import { portfolioLogo } from '../data/images.js'

const Sidenav = () => {

    return (
        <nav className='sideNavContainer '>

            <div className='sideNavPortfolioLogo'>
                <img src={portfolioLogo} alt="logo" />
            </div>

            {SidenavMenuUtils?.map((menuItem, index) => {
                return <StyledSidenavItem item={menuItem} key={menuItem?.id || index} />
            })}


        </nav>
    )
}

export default Sidenav;

function StyledSidenavItem({ item }) {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = location.pathname === item.path;

    const Icon = item?.icon
    return (
        <>
            <div className={`sideNavItem ${isActive ? "sideNavActive" : ""}`} onClick={() => {
                navigate(`${item?.path}`)
            }}>
                <Icon />
            </div >
        </>
    );
}

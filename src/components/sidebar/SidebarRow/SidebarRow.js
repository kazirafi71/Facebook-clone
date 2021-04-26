import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css'

const SidebarRow = ({image,name,items,Icon}) => {
    return (
        <div className="sidebarRow">
            {
                image && <Avatar src={image}/>
            }
            
            {name && <h6>{name}</h6>}
            {Icon && <Icon/>}
            {items && <h6>{items}</h6>}

            
        </div>
    );
};

export default SidebarRow;
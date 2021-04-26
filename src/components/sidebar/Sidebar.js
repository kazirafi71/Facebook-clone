import React from 'react';
import SidebarRow from './SidebarRow/SidebarRow';
import InfoIcon from '@material-ui/icons/Info';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FlagIcon from '@material-ui/icons/Flag';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';

const Sidebar = () => {
    return (
        <div>
            <SidebarRow 
            image="https://static.toiimg.com/photo/76729750.cms"
            name='Kazi RAfi'/>
            <SidebarRow
            Icon={InfoIcon}
            items="Covid-19 Information Center"
            />
            <SidebarRow
            Icon={PeopleAltIcon}
            items="Friends"
            />
            <SidebarRow
            Icon={FlagIcon}
            items="Pages"
            />
            <SidebarRow
            Icon={OndemandVideoIcon}
            items="Videos"
            />
            <SidebarRow
            Icon={StarIcon}
            items="Favorite"
            />
            <SidebarRow
            Icon={ExpandMoreIcon}
            items="See More"
            />
        </div>
    );
};

export default Sidebar;
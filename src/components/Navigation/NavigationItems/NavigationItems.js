import React from  'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.css'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
       <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
       <NavigationItem link="/">Burger Builder</NavigationItem>
    </ul>
);

export default navigationItems;

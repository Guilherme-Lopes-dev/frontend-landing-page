import React, {useEffect, useState} from 'react'
import DesktopGrid from './DesktopGrid';
import MobileGrid from './MobileGrid';
import './Grid.css'
import useViewport from '../../util/useViewport'
const Grid = () => {

  const { width } = useViewport();
  const breakpoint = 620;
  
  return (
    width < breakpoint ? <MobileGrid/> : <DesktopGrid/>
  )
}

export default Grid
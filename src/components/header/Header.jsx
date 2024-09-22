import "./header.css";
import { DateRange } from 'react-date-range';
import {useState} from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MAQUINARIA_TYPES } from "../../constants/enums";

const Header = (type) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    //button functionality

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

      
     
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
              <div className="headerListItem active">
                
                <span>Renta Maquinaria Pesada!</span>
              </div> 
              <div className="headerListItem">
                <span>Renta Equipo Ligero!</span>
                </div> 
                <div className="headerListItem">
                    <span> Renta de Flete! </span>
                </div>
                <div className="headerListItem">
                    <span> Renta Exavadoras!</span>
                </div>
            </div>
            { type !== "list" &&
                <>
                <h1 className="h1headerTitle">Encuentra Maquinaria cerca de ti! </h1>
            <p className="headerDesc">
                Se recompensado por tus rentas con promociones y descuentos futuros.
            </p>
            <button className="headerBtn">Sign In / Register</button>
            <div className="headerSearch">
                <LocationOnIcon color="disabled"/>
                <div className="headerSearchItem">
                    <input 
                    type="text" 
                    placeholder="Donde estas ubicado?" 
                    className= "headerSearchInput"/>
                </div>
                <div className="headerSearchItem">
                <CalendarMonthIcon color="disabled"/>
                    <span onClick={()=>setOpenDate(!openDate)}className="headerSearchText">{`${format(date[0].startDate, "MM/dd")}    -    ${format(date[0].endDate, "MM/dd")}`}</span>
                    
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={ (item) =>  setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    />}
                    
                </div>
                
                <Button className="headerSearchItem"
                    onClick={handleClickListItem}
                >
                    <FilterListIcon color="disabled"/>
                    <span 
                    className= "headerSearchText">{selectedIndex<0?"Categoria":MAQUINARIA_TYPES[selectedIndex]}</span>
                </Button>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                    }}
                >
                    {MAQUINARIA_TYPES.map((option, index) => (
                    <MenuItem
                        key={option}
                        // disabled={index === 0}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                    ))}
                </Menu>
                
                <button className="headerBtn">Search</button>
            </div></>}
        </div>
    </div>
  )
}

export default Header
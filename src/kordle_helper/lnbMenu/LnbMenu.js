import React, { useEffect, useRef, useState } from 'react';
import './LnbMenu.css';
import { Button, ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, NavLink } from 'react-router-dom';
import { GAME_INFO } from '../contents/Const/kordleConst';

function LnbMenu(params) {
    const anchorRef = useRef(null);
    const menu = [
      GAME_INFO.HELP,
      GAME_INFO.KORDLE,
      GAME_INFO.KOOOOKORDLE,
      GAME_INFO.KOMANTLE,

        
    ]

    const [isOpenLinks, setIsOpenLinks] = useState(false);
    const [selectedIdx, setSelectedIdx] = useState(false);

    // useEffect(() => {
    //   setIsOpenLinks(true)
    // }, [])
    const handleOpenLink = () => {
        setIsOpenLinks(!isOpenLinks);
    }

    const handleCloseLink = () => {
        setIsOpenLinks(false);
    }

    const handleClickLink = (e, idx) => {
        window.open(menu[idx].link, "_blank")
        setSelectedIdx(idx)
    }
    return (<nav id="lnb">
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="Button group with a nested menu"
        >
          <Button onClick={handleOpenLink}>링크 모음</Button>
          <Button
            size="small"
            aria-controls={isOpenLinks ? 'split-button-menu' : undefined}
            aria-expanded={isOpenLinks ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleOpenLink}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        
        
        <Popper
        style={{width:"138px"}}
            sx={{ zIndex: 1 }}
            open={isOpenLinks}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
        >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              {/* <ClickAwayListener onClickAway={handleCloseLink}> */}
              <ButtonGroup
                orientation="vertical"
                aria-label="Vertical button group"
                variant="text"
              >
                { menu.map((item, idx) => {
                    return <NavLink key={`key_${idx}`} to={GAME_INFO.LINK_URL[item]}>
                    <Button size="midieum" key={GAME_INFO.TEXT[item]}>{GAME_INFO.TEXT[item]}</Button>
                    </NavLink>
                })}
              </ButtonGroup>
              {/* </ClickAwayListener> */}
            </Paper>
          </Grow>
        )}
      </Popper>

      </nav>) 
}

export default LnbMenu;
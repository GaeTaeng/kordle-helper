import React, { useRef, useState } from 'react';
import './LnbMenu.css';
import { Button, ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function LnbMenu(params) {
    const anchorRef = useRef(null);
    const menu = [
        {title : "꼬맨틀", link : "https://semantle-ko.newsjel.ly/"},
        {title : "꼬들", link : "https://kordle.kr/"},
        {title : "꼬오오오오들", link : "https://koooo.kordle.kr/"},
        {title : "개탱-티스토리", link : "https://gaetaeng.tistory.com/"},
        // {title : "[예정](놀자)가위바위보", link : ""},
        // {title : "[예정](놀자)끝말잇기", link : ""},
        
    ]

    const [isOpenLinks, setIsOpenLinks] = useState(false);
    const [selectedIdx, setSelectedIdx] = useState(false);
    const handleOpenLink = () => {
        setIsOpenLinks(true);
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
              <ClickAwayListener onClickAway={handleCloseLink}>
              <ButtonGroup
                orientation="vertical"
                aria-label="Vertical button group"
                variant="text"
              >
                {menu.map((item, idx) => {
                    return <Button size="midieum" key={item.title} onClick={(e) => handleClickLink(e, idx)}>{item.title}</Button>
                })}
              </ButtonGroup>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      </nav>) 
}

export default LnbMenu;
import { width } from "@mui/system";
import {Container, Arrow} from "react-bootstrap";
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io";
import React from 'react';

const Slider =() => {
    return (
        <Container>
            <Arrow>
                <IoMdArrowDropleft />
            </Arrow>
            <Arrow>
                <IoMdArrowDropright />
            </Arrow>

        </Container>


    )



}
export default Slider;

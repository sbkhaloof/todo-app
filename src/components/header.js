import React from "react";
import { Alignment,
    Button,
    Navbar,
    Classes,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading} from "@blueprintjs/core";


export default function Header() {
    return (

        <header>
            <Navbar className="bp3-navbar .modifier bp3-dark">
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>To Do List
                         <Button  icon="home" text=""/>
                    </Navbar.Heading>
                </Navbar.Group>
                
            </Navbar> 
 
        </header>
    )
}

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Container from "../components/container";


export default function Root(){
    return(
        <>
            <Navbar/>
            <Container>
                <Outlet/>
            </Container>
        </>
    );
};
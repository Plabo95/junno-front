import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar(){

    let navigate = useNavigate();
    const location = useLocation();

    return(

        <Flex direction='column' bg='#005E2A' minW='15%' align='center'  gap='1em' minH='90vh' py='2em' px='2em'>
            <Link align='center' fontSize='20px'  color='white' onClick={()=>navigate('/buscador')} textDecor={location.pathname ==='/buscador'? 'underline' : 'none' }> 
                Buscador de inmuebles</Link>
            <Link align='center' fontSize='20px' color='white' onClick={()=>navigate('/archivos')} textDecor={location.pathname ==='/archivos'? 'underline' : 'none' }>
                Archivos </Link>
            <Link align='center' fontSize='20px' color='white' onClick={()=>navigate('/listado')} textDecor={location.pathname ==='/listado'? 'underline' : 'none' }> 
                Listado de fincas </Link>
            <Link align='center' fontSize='20px' color='white' onClick={()=>navigate('/visor')} textDecor={location.pathname ==='/visor'? 'underline' : 'none' }>
                Visor ambiental </Link>
            <Link align='center' fontSize='20px' color='white' onClick={()=>navigate('/documentos')} textDecor={location.pathname ==='/documentos'? 'underline' : 'none' }
                >Documentos </Link>
        </Flex>

    )
}

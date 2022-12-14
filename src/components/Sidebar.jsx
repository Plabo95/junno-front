import React, {useState} from "react";
import { Flex, Link } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar(){

    let navigate = useNavigate();
    const location = useLocation();
    const [validador, setValidador] = useState('none')
    const [acceso, setAcceso] = useState('none')
    const [autorizacion, setAutorizacion] = useState('none')

    function displayValidador(){
        setAutorizacion('none')
        setAcceso('none')
        if(validador==='none'){
            setValidador('flex')
        }
        else{
            setValidador('none')
        }
    }
    function displayAcceso(){
        setAutorizacion('none')
        setValidador('none')
        if(acceso==='none'){
            setAcceso('flex')
        }
        else{
            setAcceso('none')
        }
    }
    function displayAutorizacion(){
        setValidador('none')
        setAcceso('none')
        if(autorizacion==='none'){
            setAutorizacion('flex')
        }
        else{
            setAutorizacion('none')
        }
    }

    return(

        <Flex direction='column' bg='#005E2A' minW='15%' gap='1em' minH='90vh' py='2em' px='2em'>            
            <Link fontSize='20px'  color='white' onClick={displayValidador} > 
                Validador de fincas PSFV</Link>
                <Flex direction='column' ml='10%'  gap='0.5em' display={validador} >
                    <Link fontSize='16px' fontWeight='400'  color='white' onClick={()=>navigate('/buscador')} textDecor={location.pathname ==='/buscador'? 'underline' : 'none' }
                    >-Referencia Catastral</Link>
                    <Link fontSize='16px' fontWeight='400'  color='white'  onClick={()=>navigate('/archivos')} textDecor={location.pathname ==='/archivos'? 'underline' : 'none' }
                    >-Archivos de fincas</Link>
                    <Link fontSize='16px' fontWeight='400'  color='white' onClick={()=>navigate('/visor')} textDecor={location.pathname ==='/visor'? 'underline' : 'none' }
                    >-Visores ambientales</Link>
                    <Link fontSize='16px' fontWeight='400' color='white' onClick={()=>navigate('/documentos')} textDecor={location.pathname ==='/documentos'? 'underline' : 'none' }
                    >-Compatibilidad urban??stica</Link>
                    <Link fontSize='16px' fontWeight='400'  color='white' onClick={()=>navigate('/conexionred')} textDecor={location.pathname ==='/conexionred'? 'underline' : 'none' }
                    >-Conexi??n red el??ctrica</Link>
                    <Link fontSize='16px' fontWeight='400' color='white'  onClick={()=>navigate('/listado')} textDecor={location.pathname ==='/listado'? 'underline' : 'none' }
                    >-Listado de fincas</Link>
                </Flex>
            <Link fontSize='20px' color='white'  onClick={displayAcceso}>
                Acceso y conexi??n PSFV </Link>
                <Flex direction='column' ml='10%'  gap='0.5em' display={acceso}>
                    <Link fontSize='16px' fontWeight='400'  color='white'>-Constituci??n y deposito</Link>
                    <Link fontSize='16px' fontWeight='400'  color='white'>-Proyecto de ingenier??a</Link>
                    <Link fontSize='16px' fontWeight='400'  color='white' onClick={()=>navigate('/conexioncomp')} textDecor={location.pathname ==='/conexioncomp'? 'underline' : 'none' }
                    >-Conexi??n compa????as energ??ticas</Link>
                </Flex>
            <Link  fontSize='20px' color='white' onClick={displayAutorizacion}> 
                Autorizaciones administrativas PSFV</Link>
                <Flex direction='column'  ml='10%'  gap='0.5em' display={autorizacion}>
                    <Link fontSize='16px' fontWeight='400'  color='white' onClick={()=>navigate('/permiso')} textDecor={location.pathname ==='/permiso'? 'underline' : 'none' }
                    >-Solicitud de permiso de obras</Link>
                </Flex>
        </Flex>

    )
}

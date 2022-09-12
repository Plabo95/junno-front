import React, {useState} from "react";
import { Flex, Link } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar(){

    let navigate = useNavigate();
    const location = useLocation();
    const [validador,setValidador] = useState('none')

    return(

        <Flex direction='column' bg='#005E2A' minW='15%' gap='1em' minH='90vh' py='2em' px='2em'>            
            <Link fontSize='20px'  color='white' > 
                Validador de fincas PSFV</Link>
                <Flex direction='column' ml='10%'  gap='0.5em'>
                    <Link fontSize='16px' fontWeight='400'  color='white' onClick={()=>navigate('/buscador')} textDecor={location.pathname ==='/buscador'? 'underline' : 'none' }
                    >-Referencia Catastral</Link>
                    <Link fontSize='16px' fontWeight='400'  color='white'  onClick={()=>navigate('/archivos')} textDecor={location.pathname ==='/archivos'? 'underline' : 'none' }
                    >-Archivos de fincas</Link>
                    <Link fontSize='16px' fontWeight='400'  color='white' onClick={()=>navigate('/visor')} textDecor={location.pathname ==='/visor'? 'underline' : 'none' }
                    >-Visores ambientales</Link>
                    <Link fontSize='16px' fontWeight='400' color='white' onClick={()=>navigate('/documentos')} textDecor={location.pathname ==='/documentos'? 'underline' : 'none' }
                    >-Compatibilidad urbanística</Link>
                    <Link fontSize='16px' fontWeight='400'  color='white'>-Conexión red eléctrica</Link>
                    <Link fontSize='16px' fontWeight='400' color='white'  onClick={()=>navigate('/listado')} textDecor={location.pathname ==='/listado'? 'underline' : 'none' }
                    >-Listado de fincas</Link>
                </Flex>
            <Link fontSize='20px' color='white'>
                Acceso y conexión PSFV </Link>
                <Flex direction='column' ml='10%'  gap='0.5em'>
                    <Link fontSize='16px' fontWeight='400'  color='white'>-Constitución y deposito</Link>
                    <Link fontSize='16px' fontWeight='400'  color='white'>-Conexión con compañías energéticas</Link>
                    <Link fontSize='16px' fontWeight='400'  color='white'>-Proyecto de ingeniería</Link>
                    <Link fontSize='16px' fontWeight='400' color='white'>-Listado de trámites</Link>
                </Flex>
            <Link  fontSize='20px' color='white'> 
                Autorizaciones administrativas PSFV</Link>
                <Flex direction='column'  ml='10%'  gap='0.5em'>
                    <Link fontSize='16px' fontWeight='400'  color='white'>-Solicitud de permiso de obras</Link>
                    <Link fontSize='16px' fontWeight='400'  color='white'>-Listado de autorizaciones</Link>
                </Flex>
            <Link  fontSize='20px' color='white' onClick={()=>navigate('/inkolan')} textDecor={location.pathname ==='/inkolan'? 'underline' : 'none' }
                >Solicitud inkolan </Link>
            <Link  fontSize='20px' color='white' onClick={()=>navigate('/energetica')} textDecor={location.pathname ==='/energetica'? 'underline' : 'none' }
                >Solicitud energética </Link>
        </Flex>

    )
}

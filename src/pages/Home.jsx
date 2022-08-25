import React from "react";
import { Flex, Heading, Text, Image} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

//components

//logos
import bg from "../img/bg.jpg"
import casa from "../img/casa.png"
import docs from "../img/docs.png"
import lista from "../img/lista.png"
import ojo from "../img/ojo.png"
import archivo from "../img/archivo.png"

export default function Home(){

    let navigate = useNavigate();

    return(
        <Flex minH='100vh' w='100%'  bgRepeat='no-repeat' bgSize='cover' bgImage={bg}>
            <Flex minH='100vh' w='100%'  direction='column' p='4em' gap='2em'
            bgGradient='radial-gradient(97.7% 193.29% at 100% 50%, rgba(0, 94, 42, 0.75) 0%, rgba(0, 94, 42, 0.75) 23.03%, rgba(28, 93, 159, 0.75) 56.03%, rgba(4, 52, 135, 0.75) 96.35%)'>      

                <Heading>JUNNO</Heading>

                <Flex justify='space-evenly'>
                    <Flex bg='whiteAlpha.500'  minW='250px' cursor='pointer' h='200px' rounded='lg' p='2em' direction='column' justify='center' align='center' gap='1em'
                    onClick={()=>navigate('/buscador')}>
                        <Text fontSize='18px' color='white' fontWeight='bold' > Buscador Inmuebles</Text>
                        <Image src={casa} boxSize='90px' />
                    </Flex>
                    <Flex bg='whiteAlpha.500' minW='250px' cursor='pointer' h='200px' rounded='lg' p='2em' direction='column' justify='center' align='center' gap='1em'
                    onClick={()=>navigate('/archivos')}>
                        <Text  fontSize='18px'  color='white' fontWeight='bold' > Mis  Archivos</Text>
                        <Image src={archivo} boxSize='90px' />
                    </Flex>
                    <Flex bg='whiteAlpha.500'  minW='250px' h='200px' rounded='lg' p='2em' direction='column' justify='center' align='center' gap='1em'
                    onClick={()=>navigate('/listado')}>
                        <Text fontSize='18px'  color='white' fontWeight='bold' > Listado Fincas</Text>
                        <Image src={lista} boxSize='90px' />
                    </Flex>
                </Flex>

                <Flex justify='space-evenly' mt='5em'>
                    <Flex bg='whiteAlpha.500'  minW='250px'  cursor='pointer' h='200px' rounded='lg' p='2em' direction='column' justify='center' align='center' gap='1em'
                    onClick={()=>navigate('/visor')}>
                        <Text fontSize='18px'  color='white' fontWeight='bold' >Visor Ambiental</Text>
                        <Image src={ojo} boxSize='90px' />
                    </Flex>
                    <Flex bg='whiteAlpha.500'  minW='250px' cursor='pointer' h='200px' rounded='lg' p='2em' direction='column' justify='center' align='center' gap='1em'
                    onClick={()=>navigate('/documentos')}
                    >
                        <Text fontSize='18px'  color='white' fontWeight='bold' >Documentos</Text>
                        <Image src={docs} boxSize='90px' />
                    </Flex>
                </Flex>
            
            </Flex>
        </Flex>
    )
}
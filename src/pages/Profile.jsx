import React from "react";
import { Flex, Text, Link, Image} from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

//images
import profile from '../img/profile/profile.png'
import edit from '../img/profile/edit.png'

export default function Profile(){

    return(
        <Flex direction='column'>
        <Topbar/>
        <Flex>
            <Sidebar/>
            <Flex w='100%' px='5%' mt='2em' direction='column' gap='2em'>
                <Flex w='100%' justify='space-between' >
                    <Text fontWeight='500' fontSize='32px' color='green'>Perfil de usuario</Text>
                    <Flex gap='2em' align='center'>
                        <Link fontWeight='bold' fontSize='16px' color='green' >Cambiar Datos </Link>
                        <Image src={edit} />
                    </Flex>
                </Flex>
                {/* Datos de perfil */}
                <Flex w='100%' mt='2em'>
                    <Flex w='50%' direction='column' gap='2em'>
                        <Flex align='center' gap='2em' >
                            <Text fontWeight='bold' fontSize='16px' color='green'>Nombre:</Text>
                            <Text fontWeight='500' fontSize='16px'>Luis</Text>
                        </Flex>
                        <Flex align='center' gap='2em' >
                            <Text fontWeight='bold' fontSize='16px' color='green'>Apellidos:</Text>
                            <Text fontWeight='500' fontSize='16px'>Pinar Díaz</Text>
                        </Flex>
                        <Flex align='center' gap='2em' >
                            <Text fontWeight='bold' fontSize='16px' color='green'>NIF/NIE:</Text>
                            <Text fontWeight='500' fontSize='16px'> 43527169C </Text>
                        </Flex>
                        <Flex align='center' gap='2em' >
                            <Text fontWeight='bold' fontSize='16px' color='green'>Teléfono:</Text>
                            <Text fontWeight='500' fontSize='16px'>68747493l</Text>
                        </Flex>
                        <Flex align='center' gap='2em' >
                            <Text fontWeight='bold' fontSize='16px' color='green'>Email:</Text>
                            <Text fontWeight='500' fontSize='16px'> luispinar@gmail.com </Text>
                        </Flex>
                        <Flex align='center' gap='2em' >
                            <Text fontWeight='bold' fontSize='16px' color='green'>Contraseña:</Text>
                            <Text fontWeight='500' fontSize='16px'>************* </Text>
                        </Flex>
                    </Flex>
                    {/* Profile PIc */}
                    <Flex w='50%' direction='column'  alignSelf='center' justify='center' p='2em'>
                        <Flex align='center' justify='center' rounded='lg' boxShadow='lg' w='250px' h='250px'>
                            <Image src={profile} />
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    </Flex>
    )
}
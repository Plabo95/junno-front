import React, {useState} from "react";
import { Flex, Text, Link, Image, Input, Button} from "@chakra-ui/react";

//components
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

//images
import profile from '../img/profile/profile.png'
import editpic from '../img/profile/edit.png'
import upload from '../img/profile/upload.png'

export default function Profile(){
    const [edit, setEdit] = useState(false)
    return(
        <Flex direction='column'>
        <Topbar/>
        <Flex>
            <Sidebar/>
            <Flex w='100%' px='5%' mt='2em' direction='column' gap='2em'>
                <Flex w='100%' justify='space-between' >
                    <Text fontWeight='500' fontSize='32px' color='green'>Perfil de usuario</Text>
                    {edit === false &&
                    <Flex gap='2em' align='center' onClick={() => setEdit(true) } cursor='pointer' >
                        <Link fontWeight='bold' fontSize='16px' color='green'  >Cambiar Datos </Link>
                        <Image src={editpic} />
                    </Flex>
                }
                </Flex>
                {/* Datos de perfil */}
                <Flex w='100%' mt='2em'>
                    <Flex w='50%' gap='4em' align='center'>
                        <Flex direction='column' gap='2em'>
                            <Text fontWeight='bold' fontSize='16px' color='green'>Nombre:</Text>
                            <Text fontWeight='bold' fontSize='16px' color='green'>Apellidos:</Text>
                            <Text fontWeight='bold' fontSize='16px' color='green'>NIF/NIE:</Text>
                            <Text fontWeight='bold' fontSize='16px' color='green'>Teléfono:</Text>
                            <Text fontWeight='bold' fontSize='16px' color='green'>Email:</Text>
                            <Text fontWeight='bold' fontSize='16px' color='green'>Contraseña:</Text>
                        </Flex>
                        {edit===false
                        ?                        
                        <Flex direction='column' gap='2em' align='start' >
                            <Text fontWeight='500' fontSize='16px'>Luis</Text>
                            <Text fontWeight='500' fontSize='16px'>Pinar Díaz</Text>                           
                            <Text fontWeight='500' fontSize='16px'> 43527169C </Text>
                            <Text fontWeight='500' fontSize='16px'>68747493l</Text>
                            <Text fontWeight='500' fontSize='16px'> luispinar@gmail.com </Text>
                            <Text fontWeight='500' fontSize='16px'>************* </Text>
                        </Flex>
                        :
                        <Flex direction='column' gap='1em' align='start' >
                            <Input fontWeight='500' fontSize='16px' placeholder='Luis' />
                            <Input fontWeight='500' fontSize='16px' placeholder='Pinar Díaz ' />                       
                            <Input fontWeight='500' fontSize='16px' placeholder='43527169C' />  
                            <Input fontWeight='500' fontSize='16px' placeholder='68747493' />
                            <Input fontWeight='500' fontSize='16px' placeholder='luispinar@gmail.com ' /> 
                            <Input fontWeight='500' fontSize='16px' placeholder='*************' />
                        </Flex>
                        }
                    </Flex>
                    {/* Profile PIc */}
                    <Flex w='50%' direction='column'  alignSelf='center' justify='center' p='2em'>
                        {edit === true &&
                        <Flex justify='start' ml='150px' mb='2em' gap='1em' align='center'> 
                            <Link fontWeight='bold' color='green'>Subir foto</Link>
                            <Image src={upload} />
                        </Flex>
                        }
                        <Flex align='center' direction='column' justify='center' rounded='lg' boxShadow='lg' w='250px' h='250px'>
                            <Image src={profile} />
                        </Flex>
                    </Flex>
                </Flex>
                {edit === true &&
                    <Button colorScheme='green' w='20%' mt='4em' onClick={()=> setEdit(false)} >Guardar cambios</Button>
                }
                
            </Flex>
        </Flex>
    </Flex>
    )
}
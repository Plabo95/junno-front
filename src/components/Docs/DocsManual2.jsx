
import { Flex, Text, Input, Button, Image, Link } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { FilePicker } from 'react-file-picker'

//components
import SuccessModal from "./SuccessModal"

//image
import upload from '../../img/upload.png'
import xcell from '../../img/xcell.png'

export default function DocsManual2({setState}){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Flex w='100%'  pt='2em' direction='column' gap='2em' pb='10vh' >
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Solicitud de certificado o informe urbanístico</Text>
           
            <Flex px='5%' maxW='100%' direction='column' mt='2em' gap='1.5em'>       
                <Text color='green' fontWeight='600' >Datos a efecto de notificaciones:</Text>
                <Flex direction='column' w='20%'>
                    <Text color='green' fontWeight='400' >Email:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex direction='column' w='20%' >
                    <Text color='green' fontWeight='400' >Móvil:</Text>
                    <Input bg='#E9E6E6'/>
                </Flex>
            </Flex>
            <Flex px='5%' maxW='100%' direction='column' mt='2em' gap='1.5em'>       
                <Text color='green' fontWeight='600' >Objeto del certificado /Informe urbanístico:</Text>
                <Flex direction='column' w='60%'>
                    <Text color='green' fontWeight='400'  >Observaciones:</Text>
                    <Input h='100px' bg='#E9E6E6' />
                </Flex>

                <Text color='green' fontWeight='400' >Documentación adicional:</Text>
                {/* File list */}
                <Flex  direction='column' gap='1em' alignSelf='start' w='40%'>
                    {/*Item */}
                    <Flex justify='space-between'>
                        <Flex gap='1em' align='center'>
                            <Image src={xcell} />
                            <Text> Exc.permisos.csv </Text>
                        </Flex>
                        <Text>3-05-2022</Text>
                    </Flex>
                    {/*Item */}
                    <Flex justify='space-between'>
                        <Flex gap='1em' align='center'>
                            <Image src={xcell} />
                            <Text> Exc.permisos.csv </Text>
                        </Flex>
                        <Text>12-09-2022</Text>
                    </Flex>
                    {/*Item */}
                    <Flex justify='space-between'>
                        <Flex gap='1em' align='center'>
                            <Image src={xcell} />
                            <Text> Exc.permisos.csv </Text>
                        </Flex>
                        <Text>30-12-2019</Text>
                    </Flex>
                </Flex>
                <FilePicker
                            extensions={['md']}
                        >
                    <Flex align='center' gap='1em'>
                        <Link fontSize='16px' fontWeight='bold' textDecor='underline' color='green'> Subir archivo</Link>
                        <Image src={upload}/>
                    </Flex>
                </FilePicker>
            </Flex>
            <Button ml='5%' mt='1em' w='15%' colorScheme='green' onClick={onOpen} >Confirmar trámite</Button>
            <SuccessModal isOpen={isOpen} onClose={onClose} setState={setState}/>
        </Flex>
    )
}
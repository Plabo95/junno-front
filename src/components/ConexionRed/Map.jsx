import { Flex, Input, Text, Button, Image, useDisclosure } from "@chakra-ui/react"

//components
import SuccessModal from "./SuccessModal"

//images
import map from '../../img/conexionRed/map.png'

export default function Map({setState}){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Flex w='100%'  pt='2em' direction='column' gap='2em' pb='10vh' >
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Conexión Red Eléctrica</Text>
            <Flex w='100%' px='5%' gap='5em' >
                <Flex maxW='40%' gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> Direccion</Text>
                    <Input placeholder='Lorem ipsum' bg='#E9E6E6' />
                </Flex>
                <Flex maxW='40%' gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Referencia catastral</Text>
                    <Input placeholder='948474646K' bg='#E9E6E6' />
                </Flex>
            </Flex>
            <Button mt='1em' colorScheme='green' maxW='10%' ml='5%' >Buscar</Button>
            <Image px='5%'  src={map} />
            <Button mt='1em' colorScheme='green' maxW='15%' ml='5%' onClick={onOpen} >Finalizar y descargar</Button>
            <SuccessModal isOpen={isOpen} onClose={onClose} setState={setState}/>
        </Flex>
    )
}
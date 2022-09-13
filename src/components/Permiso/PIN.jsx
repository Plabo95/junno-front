import { Flex, Text, Button, Input } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"

//components 
import PinModal from "./PinModal"

export default function PIN({setState}){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(

        <Flex w='100%'  pt='2em' direction='column' gap='2em'>
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Permiso de obra</Text>
            <Text px='5%' fontWeight='500' fontSize='16px'>
                Completa los datos:
            </Text>
            <Flex direction='column' gap='1em' px='5%' maxW='40%'>
                <Text color='green' fontWeight='600' >Clave PIN</Text>
                <Text color='green' fontWeight='600' >Introduzca su DNI/NIE</Text>
                <Input/>
                <Text color='green' fontWeight='600' >Introduzca la fecha de validez de su DNI (o fecha de su expedición si es un DNI permanente)</Text>
                <Input/>
                <Button mt='2em' w='50%' colorScheme='green' onClick={onOpen} >Validar</Button>
            </Flex>
            <PinModal isOpen={isOpen} onClose={onClose} setState={setState}/>
        </Flex>
    )
}
import {Modal, ModalOverlay, ModalContent, Input, Text, Button, Flex } from "@chakra-ui/react"


export default function PinModal({isOpen, onClose, setState}){

    return(
        <Modal  isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent p='2em'  justify='center' gap='1em'>
                <Text fontWeight='600' color='green' fontSize='24px' > Introduzca la clave </Text>
                <Text fontWeight='400' fontSize='20px' >Clave</Text>
                <Flex gap='2em'>
                    <Input bg='#F5F5F5' w='40%' />  
                    <Button colorScheme='green' onClick={ ()=> setState('manual2') } >Enviar</Button>
                </Flex>      
            </ModalContent>
        </Modal>
    )
}
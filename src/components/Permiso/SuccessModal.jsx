import {Modal, ModalOverlay, ModalContent, Image, Text, Button, Flex } from "@chakra-ui/react"

import success from '../../img/documentos/success.png'

export default function SuccessModal({isOpen, onClose, setState}){

    return(
        <Modal  isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent p='2em' align='center' justify='center' gap='2em'>
                <Flex justify='center'>
                    <Image  src={success} />
                </Flex>
                <Text fontWeight='400' fontSize='20px' >¡Permiso solicitado con éxito! </Text>
                <Button colorScheme='green' onClick={ ()=> setState('start') } >Ver</Button>
            </ModalContent>
        </Modal>
    )
}
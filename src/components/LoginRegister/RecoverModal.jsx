import {Modal,ModalOverlay,ModalContent,ModalBody} from '@chakra-ui/react'
import { Link, Button, Input, Text } from '@chakra-ui/react'

  export default function RecoverModal({isOpen, onClose}) {
    return (
      <>
        <Modal size='lg' isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>

            <ModalBody p='4em'>

                <Text align='center' fontSize='32px' fontWeight='600' mb='1em'>Restablecer contraseña</Text>
                <Text align='center' my='2em' >Se enviará a su dirección de correo electrónico información para  restablecer su contraseña.</Text>
                <Input placeholder='Correo electrónico' />
                <Button my='2em' colorScheme='green' w='100%' >Enviar</Button>
                <Link onClick={onClose} color='gray.500' textDecor='underline'>Volver al inicio de sesión</Link>

            </ModalBody>

          </ModalContent>
        </Modal>
      </>
    )
  }
import { Flex, Input, Text, Button } from "@chakra-ui/react"


export default function Login({setState}){

    return(
        <Flex w='100%'  pt='2em' direction='column' gap='2em'>
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Conexión Red Eléctrica</Text>
            <Text px='5%' fontWeight='500' fontSize='16px'>
                Completa los datos
            </Text>
            <Flex w='30%' gap='1em' direction ='column' px='5%' >
                <Text fontWeight='600' fontSize='16px' color='green'> Usuario</Text>
                <Input bg='#E9E6E6' />
            </Flex>
            <Flex w='30%' gap='1em' direction ='column' px='5%' >
                <Text fontWeight='600' fontSize='16px' color='green'> Contraseña</Text>
                <Input type='password' bg='#E9E6E6' />
            </Flex>
            <Button mt='1em' colorScheme='green' w='10%' ml='5%' onClick={()=>setState('form')} >Validar</Button>
        </Flex>
    )
}
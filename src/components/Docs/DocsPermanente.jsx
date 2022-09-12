import { Flex, Text, Button, Input } from "@chakra-ui/react"


export default function DocsPermanente({setState}){

    return(

        <Flex w='100%'  pt='2em' direction='column' gap='2em'>
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Solicitud de certificado o informe urbanístico</Text>
            <Text px='5%' fontWeight='500' fontSize='16px'>
                Completa los datos:
            </Text>
            <Flex direction='column' gap='1em' px='5%' maxW='30%'>
                <Text color='green' fontWeight='600' >Clave Permanente</Text>
                <Text color='green' fontWeight='600' >Introduzca su DNI/NIE</Text>
                <Input/>
                <Text color='green' fontWeight='600' >Contraseña</Text>
                <Input/>
                <Button w='50%' colorScheme='green' onClick={ ()=>setState('manual2') } >Validar</Button>
            </Flex>
        </Flex>

    )
}
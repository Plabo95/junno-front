import { Flex, Text, Button, Input } from "@chakra-ui/react"


export default function DocsPIN({setState}){

    return(

        <Flex w='100%'  pt='2em' direction='column' gap='2em'>
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Solicitud de certificado o informe urbanístico</Text>
            <Text px='5%' fontWeight='500' fontSize='16px'>
                Para comenzar puedes elegir el método de autenticación con el que deseas solicitar el certificado :
            </Text>
            <Flex direction='column' gap='1em' >
                <Text color='green' fontWeight='600' >Clave PIN</Text>
                <Text color='green' fontWeight='600' >Introduzca su DNI/NIE</Text>
                <Input/>
                <Text color='green' fontWeight='600' >Introduzca la fecha de validez de su DNI (o fecha de su expedición si es un DNI permanente)</Text>
                <Input/>
                <Button colorScheme='green' >Validar</Button>
            </Flex>
        </Flex>

    )
}
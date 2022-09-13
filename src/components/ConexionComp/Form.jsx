import { Flex, Input, Text, Button } from "@chakra-ui/react"


export default function Form({setState}){

    return(
        <Flex w='100%'  pt='2em' direction='column' gap='2em' pb='10vh'>
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Conexión Compañías Eléctricas</Text>
            <Text px='5%' fontWeight='600' color='green' fontSize='16px'>
                Solicitante de la instalación
            </Text>
            {/*  ROW DE 3 INPUTS */}
            <Flex w='100%' px='5%' gap='5em' >
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Nombre:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>NIF:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> Direccion:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
            </Flex>
            {/*  ROW DE 4 INPUTS */}
            <Flex w='100%' px='5%' gap='5em' >
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Población:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Provincia:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> Nº:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> CP:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
            </Flex>
            {/*  ROW DE 3 INPUTS */}
            <Flex w='100%' px='5%' gap='5em' >
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Teléfono:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Mail:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> Persona de contacto:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
            </Flex>
            <Text  px='5%' fontWeight='600' color='green' fontSize='20px'>Propietario del inmueble donde se ubica la instalación</Text>
            {/*  ROW DE 3 INPUTS */}
            <Flex w='100%' px='5%' gap='5em' >
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Nombre:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>NIF:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> Direccion:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
            </Flex>
            {/*  ROW DE 4 INPUTS */}
            <Flex w='100%' px='5%' gap='5em' >
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Población:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Provincia:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> Nº:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> CP:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
            </Flex>
            {/*  ROW DE 3 INPUTS */}
            <Flex w='100%' px='5%' gap='5em' >
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Teléfono:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Mail:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> Persona de contacto:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
            </Flex>
            <Text  px='5%' fontWeight='600' color='green' fontSize='20px'>Situación de la instalación de generación</Text>
            {/*  ROW DE 2 INPUTS */}
            <Flex w='100%' px='5%' gap='5em' >
                <Flex  gap='1em' direction ='column'>Direccion
                    <Text fontWeight='600' fontSize='16px' color='green'>Población:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Provincia:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
            </Flex>
            {/*  ROW DE 3 INPUTS */}
            <Flex w='100%' px='5%' gap='5em' >
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Municipio:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Nº::</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> CP:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
            </Flex>
            <Flex maxW='60%' gap='1em' direction ='column' px='5%' >
                <Text fontWeight='600' fontSize='16px' color='green'> Aclarador de ubicación:</Text>
                <Input type='textarea' bg='#E9E6E6' h='100px' />
            </Flex>
            {/*  ROW DE 3 INPUTS */}
            <Flex w='100%' px='5%' gap='5em' >
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Teléfono:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Mail:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
                <Flex  gap='1em' direction ='column'>
                    <Text fontWeight='600' fontSize='16px' color='green'> Persona de contacto:</Text>
                    <Input bg='#E9E6E6' />
                </Flex>
            </Flex>

            <Flex maxW='30%' gap='1em' direction ='column' px='5%'>
                    <Text fontWeight='600' fontSize='16px' color='green'>Ayuntamiento de:</Text>
                    <Input  bg='#E9E6E6' />
            </Flex>
            <Flex maxW='60%' gap='1em' direction ='column' px='5%' >
                <Text fontWeight='600' fontSize='16px' color='green'> Observaciones:</Text>
                <Input type='textarea' bg='#E9E6E6' h='100px' />
            </Flex>
            <Button mt='1em' colorScheme='green' w='10%' ml='5%' onClick={()=>setState('map')} >Continuar</Button>
        </Flex>
    )
}
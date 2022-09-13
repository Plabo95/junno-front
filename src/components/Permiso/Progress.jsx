import React, {useEffect, useState} from "react";
import { Flex, Text, Button, Progress } from "@chakra-ui/react";


export default function DocsProgress({setState}){

    const [progress, setProgress] = useState(0)

    const sube = async() => {
        if(progress<100){
            setTimeout(() => {setProgress(progress+1);}, 10);        
        }
    }

    useEffect(()=>{
        sube();
    },[progress])

    return(
        <Flex w='100%'  pt='2em' direction='column' gap='2em'>
            <Text  px='5%' fontWeight='500' fontSize='32px' color='green'>Solicitud de permiso de obra</Text>
            <Text px='5%' fontWeight='500' fontSize='16px'>
                Espere  unos minutos  hasta que  se complete el proceso, podrá ver el avance en la barra de progreso.  
            </Text>
            <Flex w='100%' px='5%' align='center' direction='column' gap='2em' mt='4em' mb='6em'>
                <Text fontWeight='bold' fontSize='32px' color='green'>{progress} % Completado</Text>
                <Progress value={progress} w='80%' colorScheme='green' height='32px' rounded='lg' />
            </Flex>
            {progress===100?
                <Button ml='5%' colorScheme='green' w='20%' mt='' onClick={()=>setState('results')} > Ver resultados </Button>
                :<></>
            }
        </Flex>
    )
}
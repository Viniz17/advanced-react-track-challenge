import { Text, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../components/AppContext"

const ContaInfo = () => {
    const { isLoggedIn, user } = useContext(AppContext)

    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            {isLoggedIn ? (
                <Box>
                    <Text fontSize='xl'>
                        Bem-vindo, {user}!
                    </Text>
                    <Link to='/conta/1'>
                        <Text fontSize='xl'>
                            Conta
                        </Text>
                    </Link>
                </Box>
            ) : (
                <Text fontSize='xl' color='red'>
                    Você precisa estar logado para acessar a página "Conta".
                </Text>
            )}
        </>
    )
}

export default ContaInfo

import React from 'react'
import Button from '@material-ui/core/Button'
import { ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import logo from '../../assets/logo-future-eats-red.png'
import useProtectedPage from '../../hooks/useProtectedPage'

const Login = () =>{
    useProtectedPage()
    
    return(
        <div>
           <ScreenContainer>
               <img src={logo}></img>
                <h3>Entrar</h3>
                <LoginForm />
                <SignUpButtonContainer>
                    <Button variant="text" color="primary"
                        type={'submit'}
                        fullWidth
                        margin={'normal'}
                    >
                    Não possui cadastro? Clique aqui
                    </Button>
                </SignUpButtonContainer>
            </ScreenContainer>
        </div>
    )
}
export default Login
import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from './styles';
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect, useState } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormStep3 = () => {

    const navigate = useNavigate(); // navigate('/home');
    const { state, dispatch } = useForm();
    const [messageErro, setMessageErro] = useState(''); // mensagem de erro!!!

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        });
    }, []);

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            console.log(state);
        } else { setMessageErro('Preenchimento dos campos obrigatório!') }
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {state.name}! E onde te achamos?</h1>
                <p>Preencha abaixo os meios para nós entrarmos em contato.</p>

                <hr/>

                <div className="messageError">{messageErro}</div>

                <label>Qual é o seu E-mail? 
                    <input 
                        type="email" 
                        autoFocus 
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>Qual é o Link para seu Github? 
                    <input 
                        type="url" 
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>


                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>

            </C.Container>
        </Theme>
    );
}
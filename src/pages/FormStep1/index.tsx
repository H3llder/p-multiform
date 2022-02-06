import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from './styles';
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect, useState } from "react";

export const FormStep1 = () => {

    const navigate = useNavigate(); // navigate('/home');
    const { state, dispatch } = useForm();
    const [messageErro, setMessageErro] = useState('');

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);
    
    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step2');
        } else {
            setMessageErro('Preenchimento do campo obrigatório!')
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }
    
    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr/>

                <div className="messageError">{messageErro}</div>

                <label>Seu nome completo: 
                    <input 
                        type="text" 
                        autoFocus 
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label> <button onClick={handleNextStep}>Proximo</button>
            </C.Container>
        </Theme>
    );
}
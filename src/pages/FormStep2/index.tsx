import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from './styles';
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect, useState } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = () => {

    const navigate = useNavigate(); // navigate('/home');
    const { state, dispatch } = useForm();
    const [messageErro, setMessageErro] = useState(''); // mensagem de erro!!!

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        });
    }, []);

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }
    
    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3');
        }
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Olá {state.name}, o que melhor descreve você?</h1>
                <p>Escolha uma das opções abaixo de acordo baseado em seu nível.</p>

                <hr/>

                <SelectOption 
                    title="Sou Iniciante"
                    description="Comecei a programar há menos de 2 anos."
                    icon="🥳"
                    selected={state.level == 0}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption 
                    title="Sou Avançado"
                    description="Já programo há 2 anos."
                    icon="😎"
                    selected={state.level == 1}
                    onClick={()=>setLevel(1)}
                />

            <Link to="/" className="backButton">Voltar</Link>
            <button onClick={handleNextStep}>Proximo</button>

            </C.Container>
        </Theme>
    );
}
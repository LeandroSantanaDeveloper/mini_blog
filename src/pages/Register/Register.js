import styles from './Register.module.css';

import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

export const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setComfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, loading } = useAuthentication();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            displayName,
            email,
            password,
        }

        if (password !== confirmPassword) {
            return setError('As senhas precisa, ser iguais');
        }

        if (!error) {

        } else {
            setDisplayName('');
            setEmail('');
            setPassword('');
            setComfirmPassword('');
            setError("");
        }

        const res = await createUser(user);
        console.log(res)

    };

    useEffect(() => {
        if (authError) {
             setError(authError);

        }
    }, [authError])

    return (
        <div className={styles.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartinhe suas histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeholder="Nome do Usuário"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Insira a sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme a sua senha"
                        value={confirmPassword}
                        onChange={(e) => setComfirmPassword(e.target.value)}
                    />
                </label>
                {!loading && <button className='btn'>Cadastrar</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}

                {error && <p className='error'>`${error}`</p>}

            </form>
        </div>
    )
}

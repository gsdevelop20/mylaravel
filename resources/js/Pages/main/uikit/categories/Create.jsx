import {useRef, useState} from 'react';
import { router } from '@inertiajs/react'
import {InputText} from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import {Button} from 'primereact/button';
import {Toast} from 'primereact/toast'; // Usado para mostrar mensagens
import Layout from '@/Layouts/layout/layout.jsx';

export default function Create() {
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });

    const [errors, setErrors] = useState({});
    const toast = useRef(null); // Usado para exibir mensagens de sucesso/erro

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        router.post('/categories', formData, {
            onError: (error) => {
                setErrors(error);
                toast.current.show({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Houve um erro ao criar a categoria',
                    life: 3000
                });
            },
            onSuccess: () => {
                toast.current.show({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Categoria criada com sucesso!',
                    life: 3000
                });
            }
        });
    };

    return (
        <Layout>
            <Toast ref={toast}/> {/* Toast component para mensagens */}

            <h1>Criar Nova Categoria</h1>

            <form onSubmit={handleSubmit}>
                <div className="p-field">
                    <label htmlFor="name">Nome</label>
                    <InputText
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`p-inputtext ${errors.name ? 'p-invalid' : ''}`}
                    />
                    {errors.name && <small className="p-error">{errors.name}</small>}
                </div>

                <div className="p-field">
                    <label htmlFor="description">Descrição</label>
                    <InputTextarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className={`p-inputtext ${errors.description ? 'p-invalid' : ''}`}
                    />
                    {errors.description && <small className="p-error">{errors.description}</small>}
                </div>

                <Button type="submit" label="Criar Categoria" className="p-button p-button-primary"/>
            </form>
        </Layout>
    );
}

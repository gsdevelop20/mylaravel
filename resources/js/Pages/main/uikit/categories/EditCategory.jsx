import {useState, useEffect, useRef} from 'react';
import {router} from '@inertiajs/react';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from 'primereact/button';
import {Toast} from 'primereact/toast'; // Usado para mostrar mensagens
import Layout from '@/Layouts/layout/layout.jsx';

export default function EditCategory({category}) {
    const [formData, setFormData] = useState({
        id: category?.id || '',
        name: category?.name || '',
        description: category?.description || ''
    });

    const [errors, setErrors] = useState({});
    const toast = useRef(null); // Usado para exibir mensagens de sucesso/erro

    // Atualiza os dados do formulário
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Envia os dados atualizados
    const handleSubmit = (e) => {
        e.preventDefault();

        router.put(`/categories/${category.id}`, formData, {
            onError: (error) => {
                setErrors(error); // Exibe erros de validação
                toast.current.show({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Erro ao atualizar categoria',
                    life: 3000
                });
            },
            onSuccess: () => {
                toast.current.show({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Categoria atualizada com sucesso!',
                    life: 3000
                });
            }
        });
    };

    return (
        <Layout>
            <Toast ref={toast}/> {/* Toast component para mensagens */}

            <h1>Editar Categoria</h1>

            <form onSubmit={handleSubmit} className="flex flex-column gap-2">
                <div className="p-field w-full">
                    <label htmlFor="name">Nome</label>
                    <InputText
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`p-inputtext ${errors.name ? 'p-invalid' : ''} w-full`}
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
                        className={`p-inputtext ${errors.description ? 'p-invalid' : ''} w-full`}
                    />
                    {errors.description && <small className="p-error">{errors.description}</small>}
                </div>

                <Button type="submit" label="Salvar" className="p-button w-10rem p-button-primary"/>
            </form>
        </Layout>
    );
}

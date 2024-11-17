import React, {useState} from 'react';
import {router} from '@inertiajs/react';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Dropdown} from 'primereact/dropdown';
import {InputNumber} from 'primereact/inputnumber';
import {Button} from 'primereact/button';
import Layout from '@/Layouts/layout/layout.jsx';
import {route} from 'ziggy-js';

const CreateProduct = ({categories}) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        quantity: 0,
        category_id: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        router.post(route('products.store'), formData, {
            onError: (err) => setErrors(err),
            onSuccess: () => {
                setFormData({name: '', description: '', price: null, category_id: null});
            },
        });
    };

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Criar Novo Produto</h1>

            <form onSubmit={handleSubmit} className="p-fluid">
                <div className="mb-3 flex flex-column gap-1">
                    <label htmlFor="name">Nome</label>
                    <InputText
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'p-invalid' : ''}
                    />
                    {errors.name && <small className="p-error">{errors.name}</small>}
                </div>

                <div className="mb-3 flex flex-column gap-1">
                    <label htmlFor="description">Descrição</label>
                    <InputTextarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        className={errors.description ? 'p-invalid' : ''}
                    />
                    {errors.description && <small className="p-error">{errors.description}</small>}
                </div>

                <div className="mb-3 flex flex-column gap-1">
                    <label htmlFor="price">Preço</label>
                    <InputNumber
                        id="price"
                        name="price"
                        value={formData.price}
                        onValueChange={(e) => setFormData({...formData, price: e.value})}
                        mode="currency"
                        currency="BRL"
                        locale="pt-BR"
                        className={errors.price ? 'p-invalid' : ''}
                    />
                    {errors.price && <small className="p-error">{errors.price}</small>}
                </div>

                <div className="mb-3 flex flex-column gap-1">
                    <label htmlFor="price">Quantidade</label>
                    <InputNumber
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onValueChange={(e) => setFormData({ ...formData, quantity: e.value })}
                        className={errors.quantity ? 'p-invalid' : '' + ' w-10rem'}
                        decrementButtonClassName="p-button-secondary"
                        incrementButtonClassName="p-button-secondary"
                        showButtons
                        buttonLayout="horizontal"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                        min={0}
                    />

                    {errors.quantity && <small className="p-error">{errors.quantity}</small>}


                    {errors.quantity && <small className="p-error">{errors.quantity}</small>}
                </div>

                <div className="mb-3 flex flex-column gap-1">
                    <label htmlFor="category_id">Categoria</label>
                    <Dropdown
                        id="category_id"
                        name="category_id"
                        value={formData.category_id}
                        onChange={(e) => setFormData({...formData, category_id: e.value})}
                        options={categories.map((category) => ({
                            label: category.name,
                            value: category.id,
                        }))}
                        placeholder="Selecione uma Categoria"
                        className={errors.category_id ? 'p-invalid' : ''}
                    />
                    {errors.category_id && <small className="p-error">{errors.category_id}</small>}
                </div>

                <Button type="submit" label="Salvar Produto" className="p-button-primary"/>
            </form>
        </Layout>
    );
};

export default CreateProduct;

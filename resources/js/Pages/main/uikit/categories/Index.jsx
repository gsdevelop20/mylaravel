import React, {useState} from 'react';
import {Link, router} from '@inertiajs/react';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dialog} from 'primereact/dialog';
import Layout from '@/Layouts/layout/layout.jsx';
import {route} from 'ziggy-js';

const Index = ({categories}) => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Função para confirmar e excluir a categoria
    const handleDelete = () => {
        if (selectedCategory) {
            router.delete(`/categories/${selectedCategory.id}`);
            setShowDeleteDialog(false);
        }
    };

    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-bold mb-4">Categorias</h1>

                {/* Link para criar uma nova categoria */}
                <Link href={route('categories.create')}>
                    <Button label="Criar Nova Categoria" icon="pi pi-plus" className="p-button-primary mb-3"/>
                </Link>

                {/* Tabela de Categorias utilizando PrimeReact */}
                <DataTable value={categories} paginator rows={10} className="p-datatable-striped">
                    <Column field="id" header="#" className="p-text-center"/>
                    <Column field="name" header="Nome"/>
                    <Column field="description" header="Descrição"/>
                    <Column
                        body={(rowData) => (
                            <div>
                                {/* Link para editar categoria */}
                                <Link href={route('categories.edit', {category: rowData.id})}>
                                    <Button icon="pi pi-pencil" className="p-button-text p-button-sm"/>
                                </Link>
                                {/* Botão de excluir categoria */}
                                <Button
                                    icon="pi pi-trash"
                                    className="p-button-text p-button-sm p-button-danger"
                                    onClick={() => {
                                        setSelectedCategory(rowData);
                                        setShowDeleteDialog(true);
                                    }}
                                />
                            </div>
                        )}
                        header="Ações"
                        className="p-text-center"
                    />
                </DataTable>

                {/* Dialog para confirmação de exclusão */}
                <Dialog
                    visible={showDeleteDialog}
                    style={{width: '400px'}}
                    header="Confirmar Exclusão"
                    modal
                    footer={
                        <div>
                            <Button label="Cancelar" icon="pi pi-times" onClick={() => setShowDeleteDialog(false)}
                                    className="p-button-text"/>
                            <Button label="Excluir" icon="pi pi-check" onClick={handleDelete}
                                    className="p-button-danger"/>
                        </div>
                    }
                >
                    <p>Tem certeza de que deseja excluir esta categoria?</p>
                </Dialog>
            </div>
        </Layout>
    );
};

export default Index;

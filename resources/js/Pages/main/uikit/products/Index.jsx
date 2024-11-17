import React, {useState} from 'react';
import {Link, router} from '@inertiajs/react';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import Layout from '@/Layouts/layout/layout.jsx';
import {route} from 'ziggy-js';
import {locale, addLocale} from 'primereact/api';

addLocale('pt', {
    startsWith: 'Começa com',
    contains: 'Contém',
    notContains: 'Não contém',
    endsWith: 'Termina com',
    equals: 'Igual a',
    notEquals: 'Diferente de',
    noFilter: 'Sem filtro',
    lt: 'Menor que',
    lte: 'Menor ou igual a',
    gt: 'Maior que',
    gte: 'Maior ou igual a',
    dateIs: 'Data é',
    dateIsNot: 'Data não é',
    dateBefore: 'Data é antes de',
    dateAfter: 'Data é depois de',
    clear: 'Limpar',
    apply: 'Aplicar',
    matchAll: 'Corresponde a todos',
    matchAny: 'Corresponde a qualquer',
    addRule: 'Adicionar Regra',
    removeRule: 'Remover Regra',
    accept: 'Sim',
    reject: 'Não',
    choose: 'Escolher',
    upload: 'Enviar',
    cancel: 'Cancelar',
    emptyMessage: 'Nenhum resultado encontrado',
    emptyFilterMessage: 'Nenhuma opção disponível',
});

locale('pt');

const Index = ({products}) => {
    const [globalFilter, setGlobalFilter] = useState('');
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Função para confirmar e excluir o produto
    const handleDelete = () => {
        if (selectedProduct) {
            router.delete(route('products.destroy', {product: selectedProduct.id}), {
                onSuccess: () => setShowDeleteDialog(false),
            });
        }
    };

    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-bold mb-4">Produtos</h1>

                {/* Link para criar um novo produto */}
                <Link href={route('products.create')}>
                    <Button label="Criar Novo Produto" icon="pi pi-plus" className="p-button-primary mb-3"/>
                </Link>

                {/* Filtro Global */}
                <div className="mb-4">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search"/>
                        <InputText
                            value={globalFilter}
                            onChange={(e) => setGlobalFilter(e.target.value)}
                            placeholder="Pesquisar..."
                        />
                    </span>
                </div>

                {/* Tabela de Produtos utilizando PrimeReact */}
                <DataTable
                    value={products}
                    paginator
                    rows={10}
                    filterLocale="pt-BR"
                    className="p-datatable-striped"
                    globalFilter={globalFilter}
                    header="Lista de Produtos"
                    emptyMessage="Nenhum produto encontrado." // Mensagem quando não há dados
                >
                    <Column field="id" header="#" filter filterPlaceholder="Filtrar por ID"/>
                    <Column field="name" header="Nome" filter filterPlaceholder="Filtrar por Nome"/>
                    <Column field="description" header="Descrição" filter filterPlaceholder="Filtrar por Descrição"/>
                    <Column
                        field="price"
                        header="Preço"
                        body={(rowData) => `R$ ${rowData.price.toFixed(2)}`}
                        filter
                        filterPlaceholder="Filtrar por Preço"
                        filterMatchMode="equals" // Apenas valores iguais
                    />
                    <Column field="quantity" header="Quantidade" filter filterPlaceholder="Filtrar por Quantidade"/>
                    <Column
                        field="category.name"
                        header="Categoria"
                        body={(rowData) => rowData.category?.name || 'Sem Categoria'}
                        filter
                        filterPlaceholder="Filtrar por Categoria"
                    />

                    <Column
                        body={(rowData) => (
                            <div>
                                {/* Link para editar produto */}
                                <Link href={route('products.edit', { product: rowData.id })}>
                                    <Button icon="pi pi-pencil" className="p-button-text p-button-sm" />
                                </Link>
                                {/* Botão de excluir produto */}
                                <Button
                                    icon="pi pi-trash"
                                    className="p-button-text p-button-sm p-button-danger"
                                    onClick={() => {
                                        setSelectedProduct(rowData);
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
                    onHide={() => setShowDeleteDialog(false)}
                    footer={
                        <div>
                            <Button
                                label="Cancelar"
                                icon="pi pi-times"
                                onClick={() => setShowDeleteDialog(false)}
                                className="p-button-text"
                            />
                            <Button
                                label="Excluir"
                                icon="pi pi-check"
                                onClick={handleDelete}
                                className="p-button-danger"
                            />
                        </div>
                    }
                >
                    <p>Tem certeza de que deseja excluir este produto?</p>
                </Dialog>
            </div>
        </Layout>
    );
};

export default Index;

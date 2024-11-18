import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import {Link, router, usePage} from "@inertiajs/react";

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const role = usePage().props.auth.role;

    const model = [
        {
            label: 'Home',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: route('dashboard') },
                { label: 'Produtos', icon: 'pi pi-fw pi-box', to: route('products.index') },
                ...(role === 'admin' ? [
                    { label: 'Categorias', icon: 'pi pi-fw pi-list', to: route('categories.index') },
                ] : []),
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}


            </ul>
        </MenuProvider>
    );
};

export default AppMenu;

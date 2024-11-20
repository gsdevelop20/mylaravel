import {Link, Head} from '@inertiajs/react';
import {LayoutContext, LayoutProvider} from "@/Layouts/layout/context/layoutcontext.jsx";
import {PrimeReactProvider} from "primereact/api";
import {Button} from "primereact/button";
import React, {useContext} from "react";
import "../../css/home.css";
import {Card} from 'primereact/card';

export default function Welcome({auth, laravelVersion, phpVersion}) {
    const {layoutConfig} = useContext(LayoutContext);
    return (
        <>
            <PrimeReactProvider>
                <LayoutProvider>
                    <Head title="Welcome"/>
                    <div className="flex h-5rem p-4 header justify-content-between align-items-center w-100">
                        <img width={55} src='/images/home/icons/box.png' alt='box'/>
                        <div className="flex align-items-center gap-5">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="bg-green-700 w-7rem link text-center hover:bg-green-800 text-white p-3"
                                    >
                                        Registrar
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    <section className="container mx-auto section-1 flex align-items-center w-full">
                        <div
                            className="w-full align-items-center container-section-1 p-3 justify-content-center  md:flex-row flex-column-reverse align-items-center flex">
                            <div className="flex flex-column gap-1">
                                <h2 className="text-white">
                                    Todo o seu estoque de produtos em um só lugar
                                </h2>
                                <p className="text-white">
                                    O sistema de gestão de estoque mais completo do mercado.
                                </p>

                                <Link
                                    href={route('register')}
                                    className="bg-green-700 w-7rem link text-center hover:bg-green-800 text-white p-3 mt-2"
                                >
                                    Registrar
                                </Link>
                            </div>
                            <div className="">
                                <img className="" alt="dashboard" src="/images/home/dashboard.png"/>
                            </div>
                        </div>
                    </section>

                    <section
                        className="container mx-auto section-2 justify-content-center flex flex-column gap-8 align-items-center w-7 mt-8">

                        <div className='flex flex-column gap-8'>
                            <div
                                className="lign-items-center container-section-2 justify-content-center align-items-center xl:flex-row flex-column-reverse flex">
                                <div>
                                    <img alt="dashboard" src="/images/home/dashboard.png"/>
                                </div>
                                <div className="flex flex-column container-card-info gap-1">
                                    <h2 className="">
                                        Controle de estoque
                                    </h2>
                                    <p className="">
                                        Tenha controle total sobre o seu estoque de produtos.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="lign-items-center container-section-2 justify-content-center align-items-center xl:flex-row flex-column flex">
                                <div className="flex flex-column container-card-info gap-1">
                                    <h2 className="">
                                        Tenha logs de todas as movimentações
                                    </h2>
                                    <p className="">
                                        Saiba exatamente o que acontece com o seu estoque.
                                    </p>
                                </div>
                                <div>
                                    <img alt="dashboard" src="/images/home/dashboard.png"/>
                                </div>
                            </div>
                            <div
                                className="lign-items-center container-section-2 justify-content-center align-items-center xl:flex-row flex-column-reverse flex">
                                <div>
                                    <img alt="dashboard" src="/images/home/dashboard.png"/>
                                </div>
                                <div className="flex flex-column container-card-info gap-1">
                                    <h2 className="">
                                        Tenha relatórios completos
                                    </h2>
                                    <p className="">
                                        Tenha relatórios completos sobre o seu estoque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="container mx-auto flex justify-content-center mt-8 align-items-center w-100">
                        <div className="flex align-items-center gap-5">
                            <img width={55} src='/images/home/icons/box.png' alt='box'/>
                            <h3 className="text-white">Sistema de gestão de estoque</h3>
                        </div>
                    </footer>
                </LayoutProvider>
            </PrimeReactProvider>
        </>
    )
        ;
}

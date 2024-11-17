import React, { useState } from 'react';
import { Button } from 'primereact/button';
import Layout from "@/Layouts/layout/layout.jsx";

const Gabriel = () => {
    const [items,setItems] = useState([
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                console.log('update');
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                console.log('delete');
            }
        },
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                console.log('home');
            }
        }
    ]);

    return (
        <Layout>
            <div className="flex gap-2">
                {items.map((item, i) => (
                    <Button key={i} label={item.label} icon={item.icon} onClick={item.command} />
                ))}
            </div>
        </Layout>
    );
};

export default Gabriel;

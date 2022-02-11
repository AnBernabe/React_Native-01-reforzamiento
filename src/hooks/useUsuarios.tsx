import { useState, useRef, useEffect } from "react";
import { reqResApi } from "../api/reqRes";
import { Usuario, ReqResListado } from "../interfaces/reqRes";

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);
    const totalPaginaRef = useRef(0);

    useEffect(() => {
        // Llamado al API
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        try {
            const resp = await reqResApi.get<ReqResListado>('/users', {
                params: {
                    page: paginaRef.current
                }
            });

            if (resp.data.data.length > 0) {
                setUsuarios(resp.data.data);
                totalPaginaRef.current = resp.data.total_pages;
            }
            else {
                alert('No hay más registros')
            }

        } catch (error) {
            console.log(error);
        }
    };

    const paginaSiguiente = () => {
        if(paginaRef.current < totalPaginaRef.current) {
            paginaRef.current++;
            cargarUsuarios();
        }
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }

};

// components/ListMhs.js
import React from 'react';
import Swal from 'sweetalert2';

function ListMhs({ no, nim, nama }) {
const handleEdit = () => {
    Swal.fire({
        title: 'Edit Mahasiswa',
        input: 'text',
        inputLabel: 'Nama:',
        inputPlaceholder: 'Masukkan nama',
        showCancelButton: true,
        focusConfirm: false,
    });
};

const handleDelete = () => {
    Swal.fire({
    icon: 'warning',
    title: 'Are you sure?',
    text: 'Your wont be able to revert this!',
    showCancelButton: true,
    confirmButtonText: 'Hapus',
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
        title:'Deleted!',
        text: 'Mahasiswa has been deleted.',
        icon:'success',
        confirmButtonText: 'OK',
        });
    }});
};

return (
    <tr className=" border-t">
        <td className="p-3 border border-gray-300">{no}</td>
        <td className="p-3 border border-gray-300">{nim}</td>
        <td className="p-3 border border-gray-300">{nama}</td>
        <td className="p-3 border border-gray-300">
            <button 
            className="px-2 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600" onClick={handleEdit}>
            Edit
            </button>
            <button
            className="px-2 py-1 ml-2 text-white bg-red-500 rounded hover:bg-red-600" onClick={handleDelete}>
                Hapus
            </button>
        </td>
    </tr>
);
}

export default ListMhs;

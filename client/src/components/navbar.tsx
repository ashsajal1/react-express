import React from 'react'

export default function Navbar() {
    return (
        <header className='border p-2 flex items-center justify-between'>
            <div>Logo</div>
            <div className='flex items-center gap-2'>
                <button className='p-1 text-slate-50 hover:bg-blue-700 active:ring active:ring-blue-200 rounded bg-blue-600'>Sign up</button>
                <button className='p-1 text-slate-50 hover:bg-blue-700 active:ring active:ring-blue-200 rounded bg-blue-600'>Login</button>
            </div>
        </header>
    )
}

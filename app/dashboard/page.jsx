import React from 'react'
import CreateForm from './_components/CreateForm'
import FormList from './_components/FormList'

function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className='p-10 flex-grow'>
                <h2 className='font-bold text-3xl flex items-center justify-between'>
                    Dashboard
                    <CreateForm />
                </h2>
                <FormList />
            </div>
        </div>
    )
}

export default Dashboard

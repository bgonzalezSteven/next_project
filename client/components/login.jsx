import { LockClosedIcon } from '@heroicons/react/solid'
import { useEffect, useState } from "react";
import api from '../env'

export default function login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    const info = window.sessionStorage.getItem('info')
    if (info) {
      window.sessionStorage.removeItem('info')
    } 
    console.log('Iniciamos perro')
  }), []



  // Funciones para la toma de datos del formulario

  const handleChange = e => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

// Funciones para la entrada/salida de datos
  
  const send = async () => {  
    console.log('api')
    await api({
      type: 'post',
      rute: 'login',
      data: form
    })
  }

  return (
    <div>
      
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inicia sesión con tu cuenta</h2>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 mb-1 border  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.pasword}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border  rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={send}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Acceder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
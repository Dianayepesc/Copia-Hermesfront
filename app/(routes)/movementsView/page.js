"use client"
import React from "react";
import { Sidebar } from "../../components/sidebar";
import { Header } from "../../components/header";
import { SiGoogleforms } from "react-icons/si";

export default function movementsView() {
    return(
       
        <div className="grid  xl:grid-cols-6">
        <Sidebar />
        <div className="xl:col-span-5">
          <Header />
          <div>
            <h2>Movimientos de entrada y salida </h2>
          </div>
          
          <div class="flex justify-center items-center min-h-screen">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">Nombre</th>
                        <th scope="col" class="px-6 py-3">Apellido</th>
                        <th scope="col" class="px-6 py-3">Cargo</th>
                        <th scope="col" class="px-6 py-3">Tipo de documento</th>
                        <th scope="col" class="px-6 py-3">Numero de documento</th>
                        <th scope="col" class="px-6 py-3">Hora entrada</th>
                        <th scope="col" class="px-6 py-3">Hora salida</th>
                        <th scope="col" class="px-6 py-3">Fecha</th>
                        <th scope="col" class="px-6 py-3">Detalles</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Juan Andres</td>
                        <td class="px-6 py-4">Garcia Lopez</td>
                        <td class="px-6 py-4">Aprendiz</td>
                        <td class="px-6 py-4">C.C</td>
                        <td class="px-6 py-4">1032937844</td>
                        <td class="px-6 py-4">09:00am</td>
                        <td class="px-6 py-4">06:00pm</td>
                        <td class="px-6 py-4">2024/07/24</td>
                        <td class="px-6 py-4"><SiGoogleforms /></td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Juan Andres</td>
                        <td class="px-6 py-4">Garcia Lopez</td>
                        <td class="px-6 py-4">Aprendiz</td>
                        <td class="px-6 py-4">C.C</td>
                        <td class="px-6 py-4">1032937844</td>
                        <td class="px-6 py-4">09:00am</td>
                        <td class="px-6 py-4">06:00pm</td>
                        <td class="px-6 py-4">2024/07/24</td>
                        <td class="px-6 py-4"><SiGoogleforms /></td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Juan Andres</td>
                        <td class="px-6 py-4">Garcia Lopez</td>
                        <td class="px-6 py-4">Aprendiz</td>
                        <td class="px-6 py-4">C.C</td>
                        <td class="px-6 py-4">1032937844</td>
                        <td class="px-6 py-4">09:00am</td>
                        <td class="px-6 py-4">06:00pm</td>
                        <td class="px-6 py-4">2024/07/24</td>
                        <td class="px-6 py-4"><SiGoogleforms /></td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">Juan Andres</td>
                        <td class="px-6 py-4">Garcia Lopez</td>
                        <td class="px-6 py-4">Aprendiz</td>
                        <td class="px-6 py-4">C.C</td>
                        <td class="px-6 py-4">1032937844</td>
                        <td class="px-6 py-4">09:00am</td>
                        <td class="px-6 py-4">06:00pm</td>
                        <td class="px-6 py-4">2024/07/24</td>
                        <td class="px-6 py-4"><SiGoogleforms /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


        </div>
        </div>
        
    );
}

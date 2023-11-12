"use client"
import React from "react";
import { useState, useEffect } from 'react';

function ShowTableForAllTours({ tours, setTours }) {
    useEffect(() => {
        console.log('Tours state:', tours); // Log the state after it updates
      }, [tours]);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tour names
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date Created
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-black">
                {tours.map((item, index) => (
                <tr key={`${item.Id}-${index}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.Id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.Name_of_the_tour}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.Time_created}
                  </td>
                </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTableForAllTours;

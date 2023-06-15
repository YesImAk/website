import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="w-1/2 mx-auto h-8 transparent bg-gray-600 bottom-0 items-center absolute inset-x-0">
                <div className="flex justify-center w-100">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="/img/logo2.png" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">Chill Beats</p>
                            </div>                      
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; Chill Beats
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

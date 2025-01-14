import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-5">
                <div className="pt-5 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                    </div>
                    <div className="mt-2 grid content-center grid-cols-1 sm:grid-cols-3 md:grid-cols-1">
                        <p className="text-white text-center sm:text-center text-opacity-50">
                            {new Date().getFullYear()} &copy; Chill Beats
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

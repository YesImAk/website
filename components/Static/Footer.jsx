import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="/img/logo2.png" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">Chill Beats</p>
                            </div>                      
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Links</p>
                            <div>
                                <Link href="https://bit.ly/3LYzaDe">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Vote Bot
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <a href="https://shorturl.at/zKNX7" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Invite Bot
                                </a>
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

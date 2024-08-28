import logo from '../assets/logo.png';
import InputButton from "./InputButton.jsx";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="w-full flex flex-col items-center border-t-2 border-orange-100 mt-10 py-4 bg-black text-white lg:flex-row rounded-tl-3xl rounded-tr-3xl">
            <div className="w-full md:w-2/3 pt-10 md:pt-0 flex flex-col items-center lg:items-start">
                <img src={logo} className="ml-0 md:ml-10 mb-10 lg:mb-10" alt="Logo" />
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-[320px]">
                    <div className="text-center md:text-left lg:ml-20">
                        <h1 className="text-3xl font-bold mb-4 ">Contacts</h1>
                        <p>infos@gmail.com</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold mb-4">Adresse</h1>
                        <p>Maison Aubin</p>
                    </div>
                </div>
                {/* <p className="text-center mt-10">&copy; {year} Jeunesse et vie. Tous droits réservés</p> */}
            </div>
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:mr-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold mb-6 text-orange-600">Restons connecté</h1>
                    <p>Vous voulez être à jour des informations de l’église locale ? Rejoignez notre newsletter pour être tenu au courant de nos prochains évènements et de nos réunions d’enseignements !</p>
                </div>
                <div className="mt-6 w-full mx-10">
                    <InputButton text="S'inscrire maintenant"/>
                </div>
            </div>
        </div>
    );
}

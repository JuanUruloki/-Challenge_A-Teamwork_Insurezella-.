import Image from "next/image";
const Products = () => {

    return (
        <div className="w-screen h-[120vh]">
            <div className="flex flex-row items-center justify-center h-60 w-full mt-16">
            <div className="flex flex-col items-center justify-center h-full w-56 mx-8 bg-white shadow-cards">
                <div className="flex h-14 w-14 bg-red-300 bg-cover bg-center"
                style={{backgroundImage:'url(/medicare-icon.png)'}}
                />
            <p className="font-heroTitle text-xl text-center px-10">Health insurance</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-56 mx-8 bg-white shadow-cards">
                <div className="flex h-14 w-14 bg-red-300 bg-cover bg-center"
                style={{backgroundImage:'url(/medicare-advantage-icon.png)'}}
                />
            <p className="font-heroTitle text-xl text-center px-10">Medicare supplement</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-56 mx-8 bg-white shadow-cards">
                <div className="flex h-14 w-14 bg-red-300 bg-cover bg-center"
                style={{backgroundImage:'url()'}}
                />
            <p className="font-heroTitle text-xl text-center px-10">Medicare Advantage</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-56 mx-8 bg-white shadow-cards">
                <div className="flex h-14 w-14 bg-red-300 bg-cover bg-center"
                style={{backgroundImage:'url()'}}
                />
            <p className="font-heroTitle text-xl text-center px-10">Life insurance</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-56 mx-8 bg-white shadow-cards">
                <div className="flex h-14 w-14 bg-red-300 bg-cover bg-center"
                style={{backgroundImage:'url()'}}
                />
            <p className="font-heroTitle text-xl text-center px-10">ACA obamacare</p>
            </div>
            </div>
            <h1>Products</h1>
        </div>
    );

}

export default Products
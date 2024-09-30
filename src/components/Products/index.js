import Image from "next/image";
const Products = () => {

    return (
        <div className="flex flex-col w-full h-[120vh]">
            <div className="flex flex-row items-center justify-center h-72 w-full my-16">
            <div className="flex flex-col items-center justify-center h-full w-52 mx-8 rounded-lg bg-white shadow-cards">
                <div className="flex h-20 w-20 bg-cover bg-center"
                style={{backgroundImage:'url(/medicare.jpg)'}}
                />
            <p className="font-heroTitle text-xl text-center px-10">Health insurance</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-52 mx-8 rounded-lg bg-white shadow-cards">
                <div className="flex h-20 w-20 bg-cover bg-center"
                style={{backgroundImage:'url(/medicare-advantage.jpg)'}}
                />
            <p className="font-heroTitle text-xl text-center px-10">Medicare supplement</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-52 mx-8 rounded-lg bg-white shadow-cards">
                <div className="flex h-20 w-20 bg-cover bg-center"
                style={{backgroundImage:'url(/advantage.jpg)'}}
                />
            <p className="font-heroTitle text-xl text-center px-10">Medicare Advantage</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-52 mx-8 rounded-lg bg-white shadow-cards">
                <div className="flex h-20 w-20 bg-cover bg-center"
                style={{backgroundImage:'url(/life.jpg)'}}
                />
            <p className="font-heroTitle text-xl text-center px-10">Life insurance</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-52 mx-8 rounded-lg bg-white shadow-cards">
                <div className="flex h-20 w-20 bg-cover bg-center"
                style={{backgroundImage:'url(/obamacare.jpg)'}}
                />
            <p className="font-heroTitle text-xl text-center px-10">ACA obamacare</p>
            </div>
            </div>
            <div className="flex flex-col  xl:flex-row w-auto h-full m-20">
                <div className="flex flex-col h-full w-1/2 bg-contain bg-right bg-no-repeat"
                style={{backgroundImage:'url(/committed-help.png)'}}
                />
                <div className="flex flex-col items-start justify-evenly h-full 2xl:w-1/2 ml-28 px-28 2xl:px-16">
                <h2 className="text-3xl 2xl:text-6xl font-heroTitle">Committed to help you find the right plan</h2>
                <p className="text-xs 2xl:text-xl font-textRegular text-slate-500">Insurance is an important financial tool that can help you protect yourself and your loved ones from financial losses in the event of an unexpected event. It is important to consider your individual needs and circumstances when choosing the right insurance coverage for you and your family.</p>
                <button className="h-7 w-48 2xl:h-12 2xl:w-72 text-xs 2xl:text-lg font-textRegular text-white rounded-full bg-lightBlue">ABOUT INSUREZELLA</button>
                <div className="flex flex-row w-full h-1/6">
                    <div className="flex flex-row items-center w-1/2 h-full">
                        <div className="w-1/2 h-10 2xl:h-16 bg-contain bg-center bg-no-repeat"
                        style={{backgroundImage:'url(/money.jpg)'}}
                        />
                        <p className="font-heroTitle text-sm 2xl:text-xl text-start pr-4">Save Money Compare Plans</p>
                    </div>
                    <div className="flex flex-row items-center w-1/2 h-full">
                        <div className="w-1/2 h-10 2xl:h-16 bg-contain bg-center bg-no-repeat"
                        style={{backgroundImage:'url(/agents.jpg)'}}
                        />
                        <p className="font-heroTitle text-sm 2xl:text-xl text-start pr-4">Licensed Agents</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );

}

export default Products
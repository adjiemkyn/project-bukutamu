import { useState } from "react";
import { handleSubmit } from "./inputdatatamu";

export default function App() {

    const [dataTamu, setDataTamu] = useState([])

    return (
        <div className="w-screen min-h-screen bg-slate-100">
            <div className="w-full max-w-[900px] flex flex-col mx-auto p-10">
                <h1 className="text-4xl text-orange-500" data-testid="buku">BUKU TAMU WEDDING</h1>

                <form className="w-full flex flex-col p-8 bg-white shadow-lg gap-4 mt-10" onSubmit={(e) => handleSubmit(e, dataTamu, setDataTamu)}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname">Nama Lengkap</label>
                        <input type="text" id="fullname" required className="h-10 px-3 font-light rounded-md  
                        border-[1px] border-slate-300" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="alamat">Alamat</label>
                        <textarea type="text" id="alamat" required className="p-3 font-light 
                        rounded-md h-[70px] border-[1px] border-slate-300"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="pesan">Pesan</label>
                        <textarea type="text" id="pesan" required className="p-3 font-light 
                        rounded-md h-[100px] border-[1px] border-slate-300"/>
                    </div>
                    <button type="submit" id="btn" className="w-[120px] h-10 bg-orange-500 text-white ml-auto">Submit</button>

                </form>

                {dataTamu.map((e) => {
                    return (
                        <div className="w-full flex flex-col bg-white shadow-md p-6 my-6 rounded-md" key={e.id}>
                            <h1 className="text-2xl font-light">{e.fullname}</h1>
                            <small>{e.pesan} </small>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
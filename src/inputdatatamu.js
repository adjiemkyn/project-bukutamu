
export const handleSubmit = (e, dataTamu, setDataTamu) => {
    //stop form for reload page
    e.preventDefault()

    //get input data
    let fullname = e.target.fullname.value;
    let alamat = e.target.alamat.value;
    let pesan = e.target.pesan.value;

    setDataTamu([
        ...dataTamu,
        {
            fullname: fullname,
            alamat: alamat,
            pesan: pesan,
            id: Date.now()
        }
    ])

}